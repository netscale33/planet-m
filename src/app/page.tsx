"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

const FALLBACK_IMAGE = "https://images.pexels.com/photos/11844304/pexels-photo-11844304.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop";
const CINEMATIC_VIDEO = "/videos/runway.mp4?v=4";

export default function IntroGate() {
  const router       = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const textRef      = useRef<HTMLHeadingElement>(null);
  const dividerRef   = useRef<HTMLDivElement>(null);
  const taglineRef   = useRef<HTMLParagraphElement>(null);
  const locationRef  = useRef<HTMLParagraphElement>(null);
  const enterRef     = useRef<HTMLDivElement>(null);
  const overlayRef   = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const hasTriggeredRef = useRef(false);
  // 10-second loading progress simulation
  useEffect(() => {
    const duration = 10000; // 10 seconds
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(timer);
        if (!hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          handleEnter();
        }
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial letter stagger reveal
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll("span.letter");
      gsap.set(letters, { y: 60, rotateX: -25, opacity: 0, transformPerspective: 800 });
      tl.to(letters, {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.07,
        ease: "expo.out",
      }, 0.3);
    }

    // Gold divider
    if (dividerRef.current) {
      tl.fromTo(dividerRef.current, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.9, ease: "power3.out" }, 1.0);
    }

    // Tagline
    if (taglineRef.current) {
      tl.fromTo(taglineRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.15);
    }

    // Location
    if (locationRef.current) {
      tl.fromTo(locationRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.28);
    }

    // Enter CTA
    if (enterRef.current) {
      tl.fromTo(enterRef.current, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.45);
    }

    return () => { tl.kill(); };
  }, []);

  const handleEnter = () => {
    hasTriggeredRef.current = true;
    const tl = gsap.timeline({ onComplete: () => router.push("/home") });

    // Fade out content
    const items = [
      ...(textRef.current?.querySelectorAll("span.letter") ?? []),
      taglineRef.current,
      locationRef.current,
      enterRef.current,
      dividerRef.current,
    ].filter(Boolean);

    tl.to(items, {
      opacity: 0,
      y: -24,
      duration: 0.35,
      stagger: 0.03,
      ease: "power2.in",
    });

    // Full black screen transition wipe
    if (overlayRef.current) {
      tl.to(overlayRef.current, {
        scaleY: 1,
        transformOrigin: "bottom center",
        duration: 0.65,
        ease: "power3.inOut",
      }, "-=0.15");
    }
  };

  const text = "PLANET M";

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ── Background Video (Wilhelmina Editorial Loop) ── */}
      <video
        ref={videoRef}
        src={CINEMATIC_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 25%",
          pointerEvents: "none",
          selectKeep: "none",
        } as React.CSSProperties}
      />

      {/* ── Multi-stop overlay gradient ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(5,3,2,0.75) 0%, rgba(5,3,2,0.2) 42%, rgba(5,3,2,0.85) 100%)",
      }} />

      {/* ── Vignette edges ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)",
        pointerEvents: "none",
      }} />

      {/* ── Transition overlay ── */}
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0D0B09",
          transform: "scaleY(0)",
          transformOrigin: "bottom center",
          zIndex: 10,
        }}
      />

      {/* ── Center content ── */}
      <div style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        padding: "0 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        {/* Title */}
        <h1
          ref={textRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.8rem, 13vw, 10rem)",
            fontWeight: 700,
            fontStyle: "normal",
            color: "#FAF8F4",
            letterSpacing: "0.18em",
            marginBottom: 40,
            lineHeight: 1,
            textShadow: "0 0 120px rgba(196,164,76,0.22), 0 4px 40px rgba(0,0,0,0.5)",
          }}
        >
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="letter"
              style={{
                display: "inline-block",
                opacity: 0,
                ...(char === " " ? { width: "0.35em" } : {}),
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Gold divider ── progress tracks here */}
        <div
          ref={dividerRef}
          style={{
            width: 140,
            height: 1,
            background: "linear-gradient(to right, transparent, var(--gold-mid), var(--gold-light), var(--gold-mid), transparent)",
            margin: "0 auto 40px",
            transform: "scaleX(0)",
            opacity: 0,
            transformOrigin: "center",
          }}
        />

        {/* Tagline */}
        <p
          ref={taglineRef}
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
            fontWeight: 600,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold-warm)",
            marginBottom: 12,
            opacity: 0,
          }}
        >
          India's Premier Talent House
        </p>

        {/* Location */}
        <p
          ref={locationRef}
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "clamp(0.6rem, 1.2vw, 0.72rem)",
            fontWeight: 500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(250,248,244,0.45)",
            marginBottom: 56,
            opacity: 0,
          }}
        >
          Est. 2018 ✦ Noida Film City ✦ India
        </p>

        {/* Auto Progress Loader Panel */}
        <div
          ref={enterRef}
          onClick={handleEnter}
          style={{
            opacity: 0,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          {/* Progress loader circle */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Loading text percentage */}
            <span style={{
              position: "absolute",
              fontFamily: "var(--font-ui)",
              fontSize: "0.6rem",
              fontWeight: 700,
              color: "var(--gold-warm)",
              letterSpacing: "0.05em",
            }}>
              {Math.round(progress)}%
            </span>

            {/* SVG circle track and fill progress */}
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle
                cx="30"
                cy="30"
                r="26"
                stroke="rgba(250,248,244,0.15)"
                strokeWidth="1.5"
                fill="transparent"
              />
              <circle
                cx="30"
                cy="30"
                r="26"
                stroke="var(--gold-mid)"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray="163.36"
                strokeDashoffset={163.36 - (163.36 * progress) / 100}
                strokeLinecap="round"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "30px 30px",
                  transition: "stroke-dashoffset 0.1s linear",
                }}
              />
            </svg>
          </div>

          {/* Label */}
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-tiny)",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(250,248,244,0.8)",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-warm)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(250,248,244,0.8)"; }}
          >
            Skip Intro
          </span>
        </div>
      </div>

      {/* ── Progress bar across screen bottom ── */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: `${progress}%`,
        height: "2px",
        background: "var(--gold-gradient)",
        transition: "width 0.1s linear",
        zIndex: 5,
      }} />

      {/* ── Corner flourishes ── */}
      <div className="gate-bottom-left" style={{
        position: "absolute",
        bottom: 28,
        left: "var(--gutter)",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-tiny)",
        fontWeight: 600,
        letterSpacing: "0.18em",
        color: "rgba(250,248,244,0.35)",
        textTransform: "uppercase",
        zIndex: 2,
      }}>
        Fashion · Commercial · Editorial · Runway
      </div>

      <div className="gate-bottom-right" style={{
        position: "absolute",
        bottom: 28,
        right: "var(--gutter)",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-tiny)",
        fontWeight: 600,
        letterSpacing: "0.18em",
        color: "rgba(250,248,244,0.35)",
        textTransform: "uppercase",
        zIndex: 2,
      }}>
        ©{new Date().getFullYear()} Planet M
      </div>
    </div>
  );
}

