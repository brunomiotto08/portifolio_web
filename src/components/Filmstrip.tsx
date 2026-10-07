import type { Shot } from "../data/types";
import { labels } from "../data/site";
import { useLightbox } from "../context/LightboxContext";

export function Filmstrip({ shots }: { shots: Shot[] }) {
  const { open } = useLightbox();

  return (
    <section className="mt-24" aria-labelledby="scroll-heading">
      <h3 id="scroll-heading" className="text-2xl tracking-[-0.03em]">
        {labels.scroll}
      </h3>
      <p className="mt-2 max-w-[36em] text-sm text-mute">{labels.scrollSub}</p>
      <div
        className="mt-10 -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 md:-mx-8 md:gap-8 md:px-8"
        role="region"
        aria-label={labels.scrollAria}
      >
        {shots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => open(shots, index)}
            className="w-[min(86vw,760px)] shrink-0 snap-start text-left"
          >
            <span
              className="block overflow-hidden bg-plate"
              style={{ borderRadius: "var(--radius-frame)" }}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className={`aspect-[16/9] w-full object-cover ${shot.objectTop ? "object-top" : "object-center"}`}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[11px] text-dim">
              <span className="tabular">{String(index + 1).padStart(2, "0")}</span>
              <span className="truncate text-mute">{shot.caption}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
