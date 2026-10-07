import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
};

export function Magnet({ children, className = "", padding = 48, strength = 10 }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const box = el.getBoundingClientRect();
      const cx = box.left + box.width / 2;
      const cy = box.top + box.height / 2;
      if (Math.abs(cx - e.clientX) < box.width / 2 + padding && Math.abs(cy - e.clientY) < box.height / 2 + padding) {
        setActive(true);
        setPos({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength });
      } else {
        setActive(false);
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, reduce, strength]);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          transition: active ? "transform 0.22s ease-out" : "transform 0.45s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}
