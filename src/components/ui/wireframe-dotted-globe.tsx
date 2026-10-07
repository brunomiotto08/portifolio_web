import { useEffect, useRef, useState } from "react";
import { geoGraticule, geoOrthographic, geoPath } from "d3-geo";
import { timer } from "d3-timer";
import type { FeatureCollection, MultiPolygon, Polygon } from "geojson";

type LandCollection = FeatureCollection<Polygon | MultiPolygon>;
type LngLat = [number, number];

interface RotatingEarthProps {
  className?: string;
}

const LAND_URL = "/geo/ne_110m_land.json";
const DOTS_URL = "/geo/land-dots.json";

let assetsPromise: Promise<{ land: LandCollection; dots: LngLat[] }> | null = null;

function isLand(value: unknown): value is LandCollection {
  return Boolean(value && typeof value === "object" && Array.isArray((value as LandCollection).features));
}

function isDots(value: unknown): value is LngLat[] {
  if (!Array.isArray(value) || value.length === 0) return false;
  const first: unknown = value[0];
  return Array.isArray(first) && typeof first[0] === "number" && typeof first[1] === "number";
}

function loadGlobeAssets() {
  if (assetsPromise) return assetsPromise;

  assetsPromise = Promise.all([
    fetch(LAND_URL).then((response) => {
      if (!response.ok) throw new Error("land");
      return response.json() as Promise<unknown>;
    }),
    fetch(DOTS_URL).then((response) => {
      if (!response.ok) throw new Error("dots");
      return response.json() as Promise<unknown>;
    }),
  ])
    .then(([land, dots]) => {
      if (!isLand(land) || !isDots(dots)) throw new Error("shape");
      return { land, dots };
    })
    .catch((error: unknown) => {
      assetsPromise = null;
      throw error;
    });

  return assetsPromise;
}

export default function RotatingEarth({ className = "" }: RotatingEarthProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) {
      setPhase("error");
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const projection = geoOrthographic().clipAngle(90);
    const path = geoPath(projection, context);
    const graticule = geoGraticule();
    const rotation: [number, number] = [48, 12];
    const baseSpeed = 0.01;
    const scrollSpeed = 0.017;
    let spin = baseSpeed;
    let fastUntil = 0;
    let baseRadius = 160;
    let width = 0;
    let height = 0;
    let land: LandCollection | null = null;
    let dots: LngLat[] = [];
    let cancelled = false;

    const fit = () => {
      const rect = stage.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width < 2 || height < 2) return;

      baseRadius = Math.min(width, height) * 0.47;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      projection.translate([width / 2, height / 2]).scale(baseRadius).rotate(rotation);
    };

    const render = () => {
      if (width < 2 || height < 2) return;

      context.clearRect(0, 0, width, height);
      const currentScale = projection.scale();
      const scaleFactor = currentScale / baseRadius;

      context.beginPath();
      context.arc(width / 2, height / 2, currentScale, 0, Math.PI * 2);
      context.fillStyle = "#08080a";
      context.fill();
      context.strokeStyle = "#ffffff";
      context.lineWidth = 1.25 * scaleFactor;
      context.stroke();

      context.beginPath();
      path(graticule());
      context.strokeStyle = "#ffffff";
      context.globalAlpha = 0.16;
      context.lineWidth = scaleFactor;
      context.stroke();
      context.globalAlpha = 1;

      if (!land) return;

      context.beginPath();
      for (const feature of land.features) path(feature);
      context.strokeStyle = "#ffffff";
      context.lineWidth = scaleFactor;
      context.stroke();

      const dotRadius = 1.15 * scaleFactor;
      context.beginPath();
      for (const [lng, lat] of dots) {
        const projected = projection([lng, lat]);
        if (!projected) continue;
        const [x, y] = projected;
        context.moveTo(x + dotRadius, y);
        context.arc(x, y, dotRadius, 0, Math.PI * 2);
      }
      context.fillStyle = "#c8cad3";
      context.fill();
    };

    fit();
    render();

    let lastElapsed = 0;
    const clock = timer((elapsed) => {
      const dt = Math.min(Math.max(elapsed - lastElapsed, 0), 48);
      lastElapsed = elapsed;
      if (reduceMotion || dt === 0) return;
      const target = performance.now() < fastUntil ? scrollSpeed : baseSpeed;
      spin += (target - spin) * Math.min(1, dt / 180);
      rotation[0] += dt * spin;
      projection.rotate(rotation);
      render();
    });

    const onScroll = () => {
      fastUntil = performance.now() + 160;
    };

    const observer = new ResizeObserver(() => {
      fit();
      render();
    });
    observer.observe(stage);
    if (!reduceMotion) window.addEventListener("scroll", onScroll, { passive: true });

    loadGlobeAssets()
      .then((assets) => {
        if (cancelled) return;
        land = assets.land;
        dots = assets.dots;
        render();
        setPhase("ready");
      })
      .catch(() => {
        if (!cancelled) setPhase("error");
      });

    return () => {
      cancelled = true;
      clock.stop();
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (phase === "error") return null;

  return (
    <div className={`globe-frame ${className}`}>
      <div ref={stageRef} className="globe-stage">
        <canvas ref={canvasRef} className={phase === "ready" ? "is-ready" : undefined} />
      </div>
    </div>
  );
}
