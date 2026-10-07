import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { Shot } from "../data/types";

type LightboxState = {
  items: Shot[];
  index: number;
} | null;

type LightboxContextValue = {
  state: LightboxState;
  open: (items: Shot[], index: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState>(null);

  const open = useCallback((items: Shot[], index: number) => {
    setState({ items, index });
  }, []);

  const close = useCallback(() => setState(null), []);

  const next = useCallback(() => {
    setState((cur) => {
      if (!cur) return cur;
      return { ...cur, index: (cur.index + 1) % cur.items.length };
    });
  }, []);

  const prev = useCallback(() => {
    setState((cur) => {
      if (!cur) return cur;
      return { ...cur, index: (cur.index - 1 + cur.items.length) % cur.items.length };
    });
  }, []);

  const value = useMemo(
    () => ({ state, open, close, next, prev }),
    [state, open, close, next, prev],
  );

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>;
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}
