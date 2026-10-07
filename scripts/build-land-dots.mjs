import { readFileSync, writeFileSync } from "node:fs";
import { geoBounds } from "d3-geo";

const land = JSON.parse(readFileSync(new URL("../public/geo/ne_110m_land.json", import.meta.url), "utf8"));

const pointInPolygon = (point, polygon) => {
  const [x, y] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0];
    const yi = polygon[i][1];
    const xj = polygon[j][0];
    const yj = polygon[j][1];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};

const pointInFeature = (point, feature) => {
  const geometry = feature.geometry;
  if (geometry.type === "Polygon") {
    const coordinates = geometry.coordinates;
    if (!pointInPolygon(point, coordinates[0])) return false;
    for (let i = 1; i < coordinates.length; i++) {
      if (pointInPolygon(point, coordinates[i])) return false;
    }
    return true;
  }
  if (geometry.type === "MultiPolygon") {
    for (const polygon of geometry.coordinates) {
      if (!pointInPolygon(point, polygon[0])) continue;
      let inHole = false;
      for (let i = 1; i < polygon.length; i++) {
        if (pointInPolygon(point, polygon[i])) {
          inHole = true;
          break;
        }
      }
      if (!inHole) return true;
    }
  }
  return false;
};

const dots = [];
const step = 16 * 0.08;

for (const feature of land.features) {
  const [[minLng, minLat], [maxLng, maxLat]] = geoBounds(feature);
  for (let lng = minLng; lng <= maxLng; lng += step) {
    for (let lat = minLat; lat <= maxLat; lat += step) {
      if (pointInFeature([lng, lat], feature)) {
        dots.push([Math.round(lng * 100) / 100, Math.round(lat * 100) / 100]);
      }
    }
  }
}

writeFileSync(new URL("../public/geo/land-dots.json", import.meta.url), JSON.stringify(dots));
console.log(`wrote ${dots.length} dots`);
