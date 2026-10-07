import { useEffect, useRef } from "react";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import { labels } from "../data/site";
import { useLightbox } from "../context/LightboxContext";

export function Lightbox() {
  const { state, close, next, prev } = useLightbox();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!state) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.dataset.lightbox = "open";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Tab" && state) {
        const root = document.getElementById("lightbox");
        if (!root) return;
        const focusable = root.querySelectorAll<HTMLElement>("button");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      delete document.body.dataset.lightbox;
      document.removeEventListener("keydown", onKey);
      lastFocus.current?.focus();
    };
  }, [state, close, next, prev]);

  if (!state) return null;
  const shot = state.items[state.index];
  if (!shot) return null;

  return (
    <div
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt}
      className="fixed inset-0 z-[80] flex flex-col bg-void"
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <p className="font-mono text-[11px] text-mute tabular">
          {String(state.index + 1).padStart(2, "0")} / {String(state.items.length).padStart(2, "0")}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          className="flex h-10 w-10 items-center justify-center text-mist"
          aria-label={labels.close}
        >
          <X size={22} />
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 md:px-16">
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 hidden h-12 w-12 items-center justify-center text-mist md:flex"
          aria-label={labels.prev}
        >
          <CaretLeft size={28} />
        </button>
        <figure className="flex max-h-full w-full max-w-[1200px] flex-col items-center">
          <img
            src={shot.src}
            alt={shot.alt}
            className="max-h-[82dvh] w-auto max-w-full object-contain"
          />
          <figcaption className="mt-5 max-w-[65ch] font-mono text-[12px] text-mute">
            {shot.caption}
          </figcaption>
        </figure>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 hidden h-12 w-12 items-center justify-center text-mist md:flex"
          aria-label={labels.next}
        >
          <CaretRight size={28} />
        </button>
      </div>
      <div className="flex justify-center gap-6 pb-5 md:hidden">
        <button type="button" onClick={prev} className="text-sm text-mute" aria-label={labels.prev}>
          {labels.prev}
        </button>
        <button type="button" onClick={next} className="text-sm text-mute" aria-label={labels.next}>
          {labels.next}
        </button>
      </div>
    </div>
  );
}
