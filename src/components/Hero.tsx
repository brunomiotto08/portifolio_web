import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BlurText } from "../bits/BlurText";
import { CountUp } from "../bits/CountUp";
import { Magnet } from "../bits/Magnet";
import { covers } from "../data/projects";
import { hero, proof, WHATSAPP } from "../data/site";

export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const cover = covers[active];

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % covers.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[62dvh] min-h-[320px] overflow-hidden md:h-[72dvh]">
        {covers.map((item, i) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            className={`absolute inset-0 ${i === active ? "z-[1]" : "pointer-events-none z-0"}`}
            initial={false}
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
            tabIndex={i === active ? 0 : -1}
            aria-hidden={i !== active}
          >
            <motion.img
              src={item.src}
              alt={item.alt}
              className={`h-full w-full object-cover ${item.objectTop ? "object-top" : "object-center"}`}
              initial={false}
              animate={{ scale: i === active ? 1 : 1.04 }}
              transition={reduce ? { duration: 0 } : { duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
              fetchPriority={i === 0 ? "high" : "low"}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </motion.a>
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent" />
      </div>

      <div className="relative border-t border-mist/10 bg-void">
        <div className="mx-auto max-w-[1400px] px-5 py-8 md:px-8 md:py-10">
          <h1 className="sr-only">{hero.title}</h1>
          <p className="font-mono text-[11px] tracking-[0.16em] text-dim uppercase">
            {String(active + 1).padStart(2, "0")} / {String(covers.length).padStart(2, "0")} · {cover.badge.replace("Case · ", "")}
          </p>
          <a href={`#${cover.id}`} className="mt-3 block">
            <motion.p
              key={cover.id}
              className="text-[clamp(2rem,1rem+4.2vw,4.35rem)] leading-[0.96] font-semibold tracking-[0.04em] text-mist uppercase"
              initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              aria-live="polite"
            >
              {cover.label}
            </motion.p>
          </a>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="inline-flex h-11 items-center bg-mist px-5 text-[15px] font-medium tracking-[-0.02em] text-void transition-transform active:scale-[0.98]"
              style={{ borderRadius: "var(--radius-frame)" }}
            >
              {hero.ctaProjects}
            </a>
            <Magnet>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center border border-mist/30 px-5 text-[15px] font-medium tracking-[-0.02em] text-mist transition-colors hover:border-mist hover:bg-mist/5"
                style={{ borderRadius: "var(--radius-frame)" }}
              >
                {hero.ctaQuote}
              </a>
            </Magnet>
          </div>
          <div className="mt-8 flex gap-2" role="tablist" aria-label="Cases em destaque">
            {covers.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={item.name}
                onClick={() => setActive(i)}
                className={`h-[2px] w-10 ${i === active ? "bg-mist" : "bg-mist/25"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-mist/10">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-16">
          <BlurText
            text={hero.pitch}
            delay={28}
            className="max-w-[36em] text-[17px] leading-relaxed text-mute"
          />
          <dl className="grid grid-cols-3 gap-4 font-mono">
            {proof.map((item) => (
              <div key={item.label}>
                <dt className="text-[11px] tracking-[0.12em] text-dim uppercase">{item.label}</dt>
                <dd className="mt-1 text-xl tracking-[-0.03em] text-mist tabular">
                  {/^\d+$/.test(item.value) && item.value.length <= 2 ? (
                    <CountUp to={Number(item.value)} padStart={item.value.length} />
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
