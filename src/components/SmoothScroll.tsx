"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;

    const rafId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    });

    const observer = new ResizeObserver(() => {
      lenis.resize();
    });
    observer.observe(document.body);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
