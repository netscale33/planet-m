"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "PLANET M has redefined what a modeling agency can be. Their talent pool is exceptional, and their professionalism is unmatched.",
    author: "Zee Studios",
    role: "Production Partner",
    initial: "ZS",
  },
  {
    quote: "Working with PLANET M was seamless. Every model they sent was perfectly suited to our vision. Truly India's finest.",
    author: "Tarun Tahiliani",
    role: "Fashion Designer",
    initial: "TT",
  },
  {
    quote: "The most professional agency we've collaborated with. Their attention to detail and model selection is world-class.",
    author: "Vogue India",
    role: "Editorial Partner",
    initial: "VI",
  },
  {
    quote: "From runway to print, PLANET M delivers excellence every time. They're our go-to agency for all casting needs.",
    author: "Lakme Fashion Week",
    role: "Event Partner",
    initial: "LF",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const max = testimonials.length;

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".testimonial-inner"),
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const goTo = (i: number) => {
    if (!trackRef.current) return;
    const next = (i + max) % max;
    setActive(next);
    gsap.to(trackRef.current, { x: `-${next * 100}%`, duration: 0.65, ease: "power3.out" });
  };

  return (
    <section
      ref={sectionRef}
      className="testimonials-section"
      style={{
        padding: "100px var(--gutter)",
        backgroundColor: "var(--bg-invert)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Watermark ── */}
      <span style={{
        position: "absolute",
        bottom: "-30px",
        right: "-10px",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(5rem, 14vw, 11rem)",
        fontWeight: 700,
        color: "rgba(255,255,255,0.025)",
        letterSpacing: "0.05em",
        pointerEvents: "none",
        userSelect: "none",
        lineHeight: 1,
      }}>
        PARTNERS
      </span>

      {/* ── Top row ── */}
      <div className="testimonial-inner" style={{ marginBottom: 8 }}>
        <div style={{
          fontFamily: "var(--font-ui)",
          fontSize: "var(--text-micro)",
          fontWeight: 600,
          letterSpacing: "0.22em",
          color: "var(--gold-mid)",
          textTransform: "uppercase",
          marginBottom: 16,
        }}>
          What Partners Say
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 20,
          marginBottom: 52,
        }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-section)",
            fontWeight: 700,
            color: "var(--text-inverse)",
            letterSpacing: "0.03em",
            lineHeight: 1.1,
          }}>
            TRUSTED BY THE BEST
          </h2>

          {/* Navigation */}
          <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
            {[
              { label: "Prev", action: () => goTo(active - 1), icon: <ChevronLeft size={18} /> },
              { label: "Next", action: () => goTo(active + 1), icon: <ChevronRight size={18} /> },
            ].map(({ label, action, icon }) => (
              <button
                key={label}
                onClick={action}
                aria-label={label}
                style={{
                  width: 46,
                  height: 46,
                  border: "1px solid var(--border-default)",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-inverse)",
                  transition: "border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold-mid)";
                  e.currentTarget.style.color = "var(--gold-mid)";
                  e.currentTarget.style.backgroundColor = "rgba(196,164,76,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-inverse)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slider ── */}
      <div className="testimonial-inner" style={{ overflow: "hidden" }}>
        <div
          ref={trackRef}
          style={{ display: "flex", transition: "none" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{ minWidth: "100%", paddingRight: "clamp(24px, 5vw, 64px)" }}
            >
              {/* Large decorative quote mark */}
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "6rem",
                lineHeight: 0.7,
                color: "var(--gold-mid)",
                opacity: 0.35,
                marginBottom: 28,
                fontWeight: 700,
              }}>
                "
              </div>

              {/* Quote */}
              <blockquote style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)",
                fontWeight: 700,
                fontStyle: "normal",
                color: "var(--text-inverse)",
                lineHeight: 1.55,
                marginBottom: 40,
                maxWidth: 760,
                letterSpacing: "0.02em",
              }}>
                {t.quote}
              </blockquote>

              {/* Author row */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {/* Avatar initials */}
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--gold-deep), var(--gold-mid))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#FAF8F4",
                  flexShrink: 0,
                }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "var(--text-small)",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--gold-warm)",
                  }}>
                    {t.author}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-tiny)",
                    fontWeight: 500,
                    color: "var(--text-inverse)",
                    opacity: 0.6,
                    marginTop: 3,
                  }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Progress dots ── */}
      <div className="testimonial-inner" style={{ display: "flex", gap: 8, marginTop: 40, alignItems: "center" }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Testimonial ${i + 1}`}
            style={{
              width: i === active ? 36 : 7,
              height: 7,
              borderRadius: 10,
              border: "none",
              backgroundColor: i === active ? "var(--gold-mid)" : "rgba(255,255,255,0.18)",
              cursor: "pointer",
              transition: "width 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease",
              padding: 0,
            }}
          />
        ))}

        {/* Counter */}
        <span style={{
          marginLeft: "auto",
          fontFamily: "var(--font-ui)",
          fontSize: "var(--text-tiny)",
          fontWeight: 600,
          letterSpacing: "0.12em",
          color: "var(--text-inverse)",
          opacity: 0.4,
        }}>
          {String(active + 1).padStart(2, "0")} / {String(max).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
