"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    const tl = gsap.timeline();

    tl.set(overlayRef.current, { scaleY: 1, transformOrigin: "top center" })
      .to(overlayRef.current, {
        scaleY: 0,
        duration: 0.6,
        ease: "power3.inOut",
      })
      .fromTo(
        containerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#1C1814",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
      {children}
    </div>
  );
}
