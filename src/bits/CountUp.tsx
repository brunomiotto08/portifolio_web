import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useLayoutEffect, useEffect, useRef } from "react";

type Props = {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  padStart?: number;
  className?: string;
};

export function CountUp({
  to,
  from = 0,
  duration = 1.4,
  decimals,
  prefix = "",
  suffix = "",
  padStart,
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const places = decimals ?? (String(to).includes(".") ? String(to).split(".")[1].length : 0);
  const motionValue = useMotionValue(from);
  const spring = useSpring(motionValue, {
    damping: 34,
    stiffness: Math.round(140 / Math.max(duration, 0.6)),
    mass: 0.7,
  });
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const format = (n: number) => {
    let digits = n.toFixed(places);
    if (padStart) digits = digits.padStart(padStart, "0");
    return `${prefix}${digits}${suffix}`;
  };

  useLayoutEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = format(latest);
    });
  }, [padStart, places, prefix, spring, suffix]);

  useEffect(() => {
    if (ref.current && !inView) ref.current.textContent = format(from);
  }, [from, padStart, places, prefix, suffix, inView]);

  useEffect(() => {
    if (reduce) {
      if (ref.current) ref.current.textContent = format(to);
      return;
    }
    if (inView) {
      motionValue.set(from);
      requestAnimationFrame(() => motionValue.set(to));
    }
  }, [from, inView, motionValue, padStart, places, prefix, reduce, suffix, to]);

  return (
    <span ref={ref} className={className}>
      {format(from)}
    </span>
  );
}
