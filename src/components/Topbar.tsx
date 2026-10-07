import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { GradientText } from "../bits/GradientText";
import { hero, nav, WHATSAPP } from "../data/site";

export function Topbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-mist/10 bg-void">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="font-medium tracking-[-0.03em]">
          <GradientText animationSpeed={16}>Bruno Miotto</GradientText>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-[-0.02em] text-mute transition-colors hover:text-mist"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center bg-mist px-4 text-[13px] font-medium tracking-[-0.02em] text-void transition-transform active:scale-[0.98]"
            style={{ borderRadius: "var(--radius-frame)" }}
          >
            {hero.ctaQuote}
          </a>
        </nav>
        <button
          type="button"
          className="lg:hidden text-mist"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <List size={22} />}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-void px-5 py-8 lg:hidden"
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-2xl tracking-[-0.03em]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex h-11 w-fit items-center bg-mist px-5 text-sm font-medium text-void"
              style={{ borderRadius: "var(--radius-frame)" }}
              onClick={() => setOpen(false)}
            >
              {hero.ctaQuote}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
