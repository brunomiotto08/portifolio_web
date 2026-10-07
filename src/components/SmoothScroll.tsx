import type { LenisOptions } from "lenis";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useEffect, useState, type ReactNode } from "react";

const phoneQuery = "(hover: none) and (pointer: coarse)";

const options = {
  autoRaf: true,
  lerp: 0.32,
  wheelMultiplier: 1.15,
  syncTouch: false,
  anchors: {
    duration: 0.55,
    easing: (t) => 1 - (1 - t) ** 3,
  },
  allowNestedScroll: true,
  stopInertiaOnNavigate: true,
} satisfies LenisOptions;

function isPhone() {
  return window.matchMedia(phoneQuery).matches;
}

function keepHashWithoutNativeJump() {
  const onClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const node = event.target;
    if (!(node instanceof Element)) return;

    const anchor = node.closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("#") || href === "#") return;

    const id = decodeURIComponent(href.slice(1));
    if (!document.getElementById(id)) return;

    event.preventDefault();
    if (window.location.hash !== href) history.pushState(null, "", href);
  };

  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [phone, setPhone] = useState(isPhone);

  useEffect(() => {
    const query = window.matchMedia(phoneQuery);
    const sync = () => setPhone(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (phone) return;
    return keepHashWithoutNativeJump();
  }, [phone]);

  if (phone) return children;

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
