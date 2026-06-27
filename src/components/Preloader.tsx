"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function Preloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const prevPath = useRef(pathname);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;
    setLoading(true);

    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    if (containerRef.current) {
      tl.set(containerRef.current, { display: "flex" })
        .fromTo(
          containerRef.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.4, ease: "power3.inOut", transformOrigin: "bottom center" }
        )
        .fromTo(textRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, "-=0.2");
    }

    if (ringRef.current) {
      tl.to(
        ringRef.current,
        { strokeDashoffset: 0, duration: 0.6, ease: "power2.inOut" },
        "-=0.3"
      );
    }

    tl.to(containerRef.current, {
      scaleY: 0,
      duration: 0.5,
      ease: "power3.inOut",
      transformOrigin: "top center",
      delay: 0.2,
    });

    return () => { tl.kill(); };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#1C1814",
        zIndex: 9999,
        display: "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        ref={textRef}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2rem",
          fontWeight: 700,
          color: "#F0EBE0",
          letterSpacing: "0.15em",
          marginBottom: 24,
        }}
      >
        PLANET M
      </h1>
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke="#C4A44C"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset="100"
          ref={ringRef}
          transform="rotate(-90 20 20)"
        />
      </svg>
    </div>
  );
}
