import { useEffect, useRef, type ReactNode } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
};

const warm = ["#F4EFE6", "#C9B8A0", "#EDE6D8", "#A8947C"];

export function GradientText({
  children,
  className = "",
  colors = warm,
  animationSpeed = 10,
}: Props) {
  const reduce = useReducedMotion();
  const progress = useMotionValue(0);
  const elapsed = useRef(0);
  const last = useRef<number | null>(null);
  const duration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (reduce) return;
    if (last.current === null) {
      last.current = time;
      return;
    }
    elapsed.current += time - last.current;
    last.current = time;
    const cycle = duration * 2;
    const t = elapsed.current % cycle;
    progress.set(t < duration ? (t / duration) * 100 : 100 - ((t - duration) / duration) * 100);
  });

  useEffect(() => {
    elapsed.current = 0;
    progress.set(40);
  }, [animationSpeed, progress]);

  const backgroundPosition = useTransform(progress, (p) => `${p}% 50%`);
  const gradient = {
    backgroundImage: `linear-gradient(to right, ${[...colors, colors[0]].join(", ")})`,
    backgroundSize: "300% 100%",
  };

  return (
    <motion.span
      className={`inline bg-clip-text text-transparent ${className}`}
      style={{
        ...gradient,
        backgroundPosition: reduce ? "40% 50%" : backgroundPosition,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }}
    >
      {children}
    </motion.span>
  );
}
