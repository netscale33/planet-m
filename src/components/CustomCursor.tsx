"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.innerWidth <= 768;
    if (isMobile.current) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const trail = trailRef.current;
    if (!dot || !ring || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let trailX = 0;
    let trailY = 0;
    let scale = 1;
    let targetScale = 1;

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const onHoverIn = () => {
      targetScale = 2.5;
      ring.style.borderColor = "rgba(196, 164, 76, 0.9)";
      ring.style.backgroundColor = "rgba(196, 164, 76, 0.08)";
      dot.style.backgroundColor = "#C4A44C";
      dot.style.width = "6px";
      dot.style.height = "6px";
    };

    const onHoverOut = () => {
      targetScale = 1;
      ring.style.borderColor = "rgba(196, 164, 76, 0.6)";
      ring.style.backgroundColor = "transparent";
      dot.style.backgroundColor = "#C4A44C";
      dot.style.width = "8px";
      dot.style.height = "8px";
    };

    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        "a, button, [data-cursor-hover], .model-card, .hover-link"
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", onHoverIn);
        el.addEventListener("mouseleave", onHoverOut);
      });
    };

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      scale += (targetScale - scale) * 0.12;
      ring.style.transform = `translate(${ringX - 14}px, ${ringY - 14}px) scale(${scale})`;

      trailX += (mouseX - trailX) * 0.06;
      trailY += (mouseY - trailY) * 0.06;
      trail.style.transform = `translate(${trailX - 20}px, ${trailY - 20}px)`;

      requestAnimationFrame(animate);
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      trail.style.opacity = "0";
    };

    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      trail.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouse);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth <= 768) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#C4A44C",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-100px, -100px)",
          transition: "opacity 0.3s, width 0.3s, height 0.3s",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "1.5px solid rgba(196, 164, 76, 0.6)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-100px, -100px)",
          transition: "opacity 0.3s, border-color 0.3s, background-color 0.3s",
          willChange: "transform",
        }}
      />
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(196, 164, 76, 0.15)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-100px, -100px)",
          transition: "opacity 0.3s",
          willChange: "transform",
        }}
      />
    </>
  );
}
