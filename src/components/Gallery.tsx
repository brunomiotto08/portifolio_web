import type { Shot } from "../data/types";
import { labels } from "../data/site";
import { useLightbox } from "../context/LightboxContext";

export function Gallery({ shots }: { shots: Shot[] }) {
  const { open } = useLightbox();
  const items = shots.filter((s) => s.inGallery);

  return (
    <section className="mt-24" aria-labelledby="gallery-heading">
      <h3 id="gallery-heading" className="text-2xl tracking-[-0.03em]">
        {labels.gallery}
      </h3>
      <p className="mt-2 max-w-[36em] text-sm text-mute">{labels.gallerySub}</p>
      <div className="mt-12 flex flex-col gap-14 md:gap-20">
        {items.map((shot) => {
          const fullIndex = shots.findIndex((s) => s.src === shot.src);
          return (
            <button
              key={shot.src}
              type="button"
              onClick={() => open(shots, Math.max(0, fullIndex))}
              className="group w-full text-left"
            >
              <figure>
                <span
                  className="block overflow-hidden bg-plate"
                  style={{ borderRadius: "var(--radius-frame)" }}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className={`w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.015] ${
                      shot.variant === "tall" ? "aspect-[4/5] max-h-[78dvh]" : "aspect-[16/9]"
                    } ${shot.objectTop ? "object-top" : "object-center"}`}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <figcaption className="mt-4 flex items-baseline justify-between gap-6 font-mono text-[11px] text-dim">
                  <span className="tabular">{shot.stripLabel}</span>
                  <span className="max-w-[48em] text-right leading-relaxed">{shot.caption}</span>
                </figcaption>
              </figure>
            </button>
          );
        })}
      </div>
    </section>
  );
}
