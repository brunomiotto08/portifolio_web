import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from "motion/react";

type Props = {
  text: string;
  className?: string;
  speed?: number;
};

export function ShinyText({ text, className = "", speed = 4 }: Props) {
  const reduce = useReducedMotion();
  const progress = useMotionValue(0);
  const elapsed = useRef(0);
  const last = useRef<number | null>(null);
  const duration = speed * 1000;

  useAnimationFrame((time) => {
    if (reduce) return;
    if (last.current === null) {
      last.current = time;
      return;
    }
    elapsed.current += time - last.current;
    last.current = time;
    const cycle = duration + 1800;
    const t = elapsed.current % cycle;
    progress.set(t < duration ? (t / duration) * 100 : 100);
  });

  const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`);
  const color = "oklch(0.74 0.014 80)";
  const shine = "oklch(0.96 0.01 85)";

  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(110deg, ${color} 0%, ${color} 38%, ${shine} 50%, ${color} 62%, ${color} 100%)`,
        backgroundSize: "220% auto",
        WebkitBackgroundClip: "text",
        backgroundPosition: reduce ? "50% center" : backgroundPosition,
      }}
    >
      {text}
    </motion.span>
  );
}
