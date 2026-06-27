"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";

interface Props {
  name: string;
  category: string;
  credit: string;
  slug: string;
  image: string;
}

export default function ModelCard({ name, category, credit, slug, image }: Props) {
  const cardRef    = useRef<HTMLDivElement>(null);
  const glintRef   = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const arrowRef   = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!cardRef.current || !overlayRef.current || !glintRef.current) return;

    gsap.to(overlayRef.current, { opacity: 1, duration: 0.45, ease: "power3.out" });
    gsap.to(cardRef.current.querySelector("img"), {
      scale: 1.06,
      duration: 0.7,
      ease: "power3.out",
    });
    gsap.fromTo(glintRef.current,
      { x: "-110%", opacity: 0.8 },
      { x: "210%", opacity: 0, duration: 0.9, ease: "power2.inOut" }
    );
    if (textRef.current) {
      gsap.fromTo(textRef.current.children,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: "power3.out" }
      );
    }
    if (arrowRef.current) {
      gsap.fromTo(arrowRef.current,
        { x: -6, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.35, ease: "power3.out", delay: 0.1 }
      );
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !overlayRef.current) return;

    gsap.to(overlayRef.current, { opacity: 0, duration: 0.4, ease: "power3.out" });
    gsap.to(cardRef.current.querySelector("img"), {
      scale: 1,
      duration: 0.65,
      ease: "power3.out",
    });
    gsap.set(glintRef.current, { x: "-110%" });
  };

  return (
    <Link href={`/models/${slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          aspectRatio: "3 / 4",
          backgroundColor: "var(--bg-secondary)",
        }}
      >
        {/* Category pill — always visible top-left */}
        <div style={{
          position: "absolute",
          top: 14,
          left: 14,
          zIndex: 3,
          fontFamily: "var(--font-ui)",
          fontSize: "var(--text-tiny)",
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--gold-warm)",
          background: "rgba(5,3,2,0.55)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          padding: "5px 10px",
          border: "1px solid rgba(196,164,76,0.25)",
        }}>
          {category}
        </div>

        {/* Image */}
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        />

        {/* Glint effect */}
        <div
          ref={glintRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "55%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
            transform: "translateX(-110%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Hover overlay */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(5,3,2,0.94) 0%, rgba(5,3,2,0.45) 50%, rgba(5,3,2,0.08) 100%)",
            opacity: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px 20px 24px",
            zIndex: 1,
          }}
        >
          <div ref={textRef} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {/* View Portfolio label */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <span style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-tiny)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold-warm)",
              }}>
                View Portfolio
              </span>
              <div ref={arrowRef} style={{ opacity: 0, color: "var(--gold-warm)", display: "flex" }}>
                <ArrowUpRight size={13} />
              </div>
            </div>

            {/* Name */}
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "#FAF8F4",
              letterSpacing: "0.04em",
              lineHeight: 1.2,
            }}>
              {name}
            </span>

            {/* Credit */}
            <span style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-tiny)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "rgba(250,248,244,0.55)",
              marginTop: 2,
            }}>
              {credit}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
