import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export type HoverExpandItem = {
  label: string;
  sublabel?: string;
  image: string;
  imageAlt?: string;
  description?: string;
  href?: string;
  index?: string;
  objectTop?: boolean;
};

export type HoverExpandProps = {
  items: HoverExpandItem[];
  collapsedHeight?: number;
  expandedHeight?: number;
  className?: string;
};

const spring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 32,
  mass: 0.9,
};

export function HoverExpand({
  items,
  collapsedHeight = 68,
  expandedHeight = 320,
  className = "",
}: HoverExpandProps) {
  const reduce = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const sync = () => setCoarse(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div
      className={`flex w-full flex-col ${className}`}
      onMouseLeave={() => {
        if (!coarse) setHoveredIndex(null);
      }}
    >
      <div className="w-full border-t border-mist/12" />

      {items.map((item, i) => {
        const isHovered = hoveredIndex === i;
        const isOtherHovered = hoveredIndex !== null && !isHovered;

        return (
          <div key={item.href ?? item.label}>
            <motion.a
              href={item.href ?? "#"}
              className={`relative block w-full overflow-hidden ${item.href ? "cursor-pointer" : "cursor-default"}`}
              animate={{
                height: isHovered ? expandedHeight : collapsedHeight,
                opacity: isOtherHovered ? 0.38 : 1,
              }}
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      height: spring,
                      opacity: { duration: 0.22, ease: "easeOut" },
                    }
              }
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => {
                if (!coarse) setHoveredIndex(null);
              }}
              onFocus={() => setHoveredIndex(i)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setHoveredIndex(null);
                }
              }}
              onClick={(e) => {
                if (!item.href) e.preventDefault();
                if (item.href && coarse && hoveredIndex !== i) {
                  e.preventDefault();
                  setHoveredIndex(i);
                }
              }}
            >
              <motion.div
                className="absolute inset-0 h-full w-full"
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 1.06,
                }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        opacity: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
                        scale: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
                      }
                }
              >
                <img
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  className={`h-full w-full object-cover ${item.objectTop ? "object-top" : "object-center"}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/25 to-void/10" />
              </motion.div>

              <div className="absolute inset-0 flex items-end px-1 pb-4 sm:px-2">
                <div className="flex w-full items-end justify-between gap-4">
                  <div className="flex min-w-0 items-baseline gap-3">
                    <motion.span
                      className="shrink-0 font-mono text-[11px] tabular-nums"
                      animate={{
                        color: isHovered ? "oklch(0.93 0.012 85)" : "oklch(0.62 0.012 80)",
                        opacity: isHovered ? 0.7 : 1,
                      }}
                      transition={{ duration: reduce ? 0 : 0.2 }}
                    >
                      {item.index ?? String(i + 1).padStart(2, "0")}
                    </motion.span>

                    <motion.span
                      className="truncate font-semibold tracking-[-0.03em]"
                      style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
                      animate={{
                        color: isHovered ? "oklch(0.96 0.01 85)" : "oklch(0.93 0.012 85)",
                      }}
                      transition={{ duration: reduce ? 0 : 0.2 }}
                    >
                      {item.label}
                    </motion.span>

                    {item.description ? (
                      <motion.span
                        className="hidden truncate text-sm text-mist/70 sm:block"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : -8,
                        }}
                        transition={{
                          duration: reduce ? 0 : 0.3,
                          delay: !reduce && isHovered ? 0.12 : 0,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                      >
                        {item.description}
                      </motion.span>
                    ) : null}
                  </div>

                  {item.sublabel ? (
                    <motion.span
                      className="shrink-0 font-mono text-[11px] tracking-[0.08em] uppercase"
                      animate={{
                        color: isHovered ? "oklch(0.93 0.012 85 / 0.7)" : "oklch(0.62 0.012 80)",
                        opacity: isHovered ? 1 : 0.9,
                      }}
                      transition={{ duration: reduce ? 0 : 0.2 }}
                    >
                      {item.sublabel}
                    </motion.span>
                  ) : null}
                </div>
              </div>
            </motion.a>
            <div className="w-full border-t border-mist/12" />
          </div>
        );
      })}
    </div>
  );
}
