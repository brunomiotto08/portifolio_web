import { motion, useInView, useReducedMotion } from "motion/react";
import { useMemo, useRef } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  eager?: boolean;
};

export function BlurText({ text, className = "", delay = 55, eager = false }: Props) {
  const reduce = useReducedMotion();
  const words = useMemo(() => text.split(" "), [text]);
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const show = eager || inView;

  if (reduce) {
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block will-change-[filter,opacity,transform]"
          initial={{ filter: "blur(7px)", opacity: 0, y: 6 }}
          animate={show ? { filter: "blur(0px)", opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4, delay: (index * delay) / 1000, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : null}
        </motion.span>
      ))}
    </p>
  );
}
