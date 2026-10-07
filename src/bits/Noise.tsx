import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function Noise({ alpha = 12 }: { alpha?: number }) {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const size = 256;
    canvas.width = size;
    canvas.height = size;
    let frame = 0;
    let id = 0;

    const draw = () => {
      const image = ctx.createImageData(size, size);
      const data = image.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = alpha;
      }
      ctx.putImageData(image, 0, 0);
    };

    const loop = () => {
      if (!reduce && frame % 5 === 0) draw();
      if (reduce && frame === 0) draw();
      frame += 1;
      if (!reduce) id = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(id);
  }, [alpha, reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="page-noise pointer-events-none fixed inset-0 z-20 h-full w-full mix-blend-overlay opacity-25"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
