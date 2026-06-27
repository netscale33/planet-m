"use client";

import { useEffect, useRef } from "react";

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let seed = 0;
    let animationId: number;

    const draw = () => {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      const len = data.length;

      for (let i = 0; i < len; i += 4) {
        const value = Math.floor(((Math.sin(seed + i * 0.01) + 1) / 2) * 55) + 30;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = value;
      }

      seed += 0.1;
      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        pointerEvents: "none",
        opacity: 0.035,
        mixBlendMode: "overlay" as const,
      }}
    />
  );
}
