import { type CSSProperties, type ReactNode, useRef } from "react";
import { useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlareHover({ children, className = "" }: Props) {
  const overlay = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const sweep = (enter: boolean) => {
    if (reduce) return;
    const el = overlay.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.backgroundPosition = enter ? "-100% -100%, 0 0" : "100% 100%, 0 0";
    requestAnimationFrame(() => {
      el.style.transition = "650ms ease";
      el.style.backgroundPosition = enter ? "100% 100%, 0 0" : "-100% -100%, 0 0";
    });
  };

  const glare: CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background:
      "linear-gradient(-45deg, hsla(0,0%,0%,0) 58%, rgba(255,248,235,0.22) 70%, hsla(0,0%,0%,0) 100%)",
    backgroundSize: "220% 220%, 100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%, 0 0",
  };

  return (
    <span
      className={`relative block overflow-hidden ${className}`}
      onMouseEnter={() => sweep(true)}
      onMouseLeave={() => sweep(false)}
    >
      {children}
      <span ref={overlay} style={glare} aria-hidden />
    </span>
  );
}
