"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import ModelCard from "@/components/ModelCard";
import ModelCounter from "@/components/ModelCounter";

const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { 
    category: "FASHION",    
    name: "ANANYA SHARMA",  
    seed: 11844304,
    video: "/videos/model_ananya.mp4?v=4"
  },
  { 
    category: "EDITORIAL",  
    name: "RAHUL VERMA",    
    seed: 15870088,
    video: "/videos/model_rahul.mp4?v=4"
  },
  { 
    category: "COMMERCIAL", 
    name: "PREETI KAPOOR",  
    seed: 31743090,
    video: "/videos/model_preeti.mp4?v=4"
  },
  { 
    category: "RUNWAY",     
    name: "ARJUN MEHTA",    
    seed: 8126621,
    video: "/videos/model_arjun.mp4?v=4"
  },
  { 
    category: "DIGITAL",    
    name: "NEHA SINGH",     
    seed: 29538558,
    video: "/videos/model_neha.mp4?v=4"
  },
  { 
    category: "PRINT",      
    name: "VIKAS PATEL",    
    seed: 15037841,
    video: "/videos/model_vikas.mp4?v=4"
  },
];

const reelPexels = [11844304, 5346109, 31526048, 14801145, 15869826, 29271917, 9104796, 4510111, 30847757, 8018040];
const reelNames  = ["MAYA CHOPRA", "DEV RAJ", "ISHAAN VERMA", "ZARA KHAN", "AARAV MEHTA", "KIARA JOSHI", "REHAN SINGH", "MYRA PATEL", "VIHAN SHARMA", "ANAYA REDDY"];
const reelItems  = Array.from({ length: 10 }, (_, i) => ({
  label: "EDITORIAL", name: reelNames[i], credit: "Photographer: Sarah Chen", seed: reelPexels[i],
}));

const models = [
  { name: "ANANYA SHARMA",   category: "WOMEN",      credit: "Vogue India / Elle",           slug: "ananya-sharma",   seed: 11844304 },
  { name: "RAHUL VERMA",     category: "MEN",        credit: "GQ / Esquire",                slug: "rahul-verma",     seed: 15870088 },
  { name: "PREETI KAPOOR",   category: "WOMEN",      credit: "Harper's Bazaar / L'Officiel", slug: "preeti-kapoor",   seed: 31743090 },
  { name: "ARJUN MEHTA",     category: "MEN",        credit: "Vogue Man / FHM",              slug: "arjun-mehta",     seed: 8126621  },
  { name: "NEHA SINGH",      category: "WOMEN",      credit: "Vogue India / Cosmopolitan",   slug: "neha-singh",      seed: 17825439 },
  { name: "VIKAS PATEL",     category: "MEN",        credit: "GQ India / Man's World",       slug: "vikas-patel",     seed: 4729154  },
  { name: "RITIKA AHLUWALIA", category: "WOMEN",     credit: "Femina / Vogue",               slug: "ritika-ahluwalia", seed: 28698700 },
  { name: "AARAV KHAN",      category: "MEN",        credit: "Elle Man / FHM",               slug: "aarav-khan",      seed: 6454667  },
  { name: "KAVYA JOSHI",     category: "COMMERCIAL", credit: "Amazon Fashion / Myntra",      slug: "kavya-joshi",     seed: 30512491 },
  { name: "ROHAN DESAI",     category: "COMMERCIAL", credit: "Tata / Adidas",                slug: "rohan-desai",     seed: 30725121 },
  { name: "ISHITA VERMA",    category: "EDITORIAL",  credit: "Vogue / Harper's Bazaar",      slug: "ishita-verma",    seed: 29271917 },
  { name: "ADITYA ROY",      category: "EDITORIAL",  credit: "GQ / L'Officiel",              slug: "aditya-roy",      seed: 14707868 },
  { name: "MAYA CHOPRA",     category: "DIGITAL",    credit: "Instagram / YouTube",          slug: "maya-chopra",     seed: 4510111  },
  { name: "DEV RAJ",         category: "DIGITAL",    credit: "Instagram / TikTok",           slug: "dev-raj",         seed: 33523782 },
  { name: "SARA NAIR",       category: "WOMEN",      credit: "Vogue India / Elle",           slug: "sara-nair",       seed: 8018040  },
  { name: "KABIR SINGH",     category: "MEN",        credit: "GQ / Esquire",                slug: "kabir-singh",     seed: 17393361 },
];

const newsArticles = [
  { date: "12 JUN 2026", headline: "PLANET M Signs Exclusive Partnership with Vogue India",    seed: 5325771, large: true  },
  { date: "08 JUN 2026", headline: "Ananya Sharma Named Face of Chanel Fall Campaign",          seed: 6069954, large: false },
  { date: "01 JUN 2026", headline: "Rahul Verma Walks for Louis Vuitton SS27",                  seed: 7779758, large: false },
];

const instagramPexels = [7779244, 7081100, 9821877, 15190577, 25399489, 5560184];
const instagramPosts  = Array.from({ length: 6 }, (_, i) => ({ seed: instagramPexels[i] }));

const categories = ["ALL", "WOMEN", "MEN", "COMMERCIAL", "EDITORIAL", "DIGITAL"];

// ── Stats ──
const stats = [
  { value: "16+", label: "Years of Excellence" },
  { value: "200+", label: "Active Models"       },
  { value: "50+", label: "Brand Partners"       },
  { value: "12",  label: "Cities Covered"       },
];

export default function HomePage() {
  const transitionRef = useRef<HTMLDivElement>(null);
  const heroRef       = useRef<HTMLDivElement>(null);
  const reelTrackRef  = useRef<HTMLDivElement>(null);
  const gridRef       = useRef<HTMLDivElement>(null);
  const manifestoRef  = useRef<HTMLDivElement>(null);
  const quoteRef      = useRef<HTMLHeadingElement>(null);
  const statsRef      = useRef<HTMLDivElement>(null);

  const [activeSlide,    setActiveSlide]    = useState(0);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isDragging,     setIsDragging]     = useState(false);
  const [dragStart,      setDragStart]      = useState(0);
  const [scrollLeft,     setScrollLeft]     = useState(0);
  const [lightboxOpen,   setLightboxOpen]   = useState(false);
  const [lightboxIndex,  setLightboxIndex]  = useState(0);
  const [videoLoaded,    setVideoLoaded]    = useState(false);
  const [nextVideoLoaded, setNextVideoLoaded] = useState(false);

  const filteredModels = activeCategory === "ALL" ? models : models.filter((m) => m.category === activeCategory);

  // Page-in transition wipe
  useEffect(() => {
    const tl = gsap.timeline();
    if (transitionRef.current) {
      tl.to(transitionRef.current, { scaleY: 0, duration: 0.85, ease: "power3.inOut", transformOrigin: "top center" }, 0);
    }
    return () => { tl.kill(); };
  }, []);

  // Hero auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Programmatic autoplay & preload next slide
  useEffect(() => {
    if (!heroRef.current) return;
    
    // Play active slide video
    const activeVideo = heroRef.current.querySelector<HTMLVideoElement>(`video[data-slide="${activeSlide}"]`);
    if (activeVideo) {
      activeVideo.muted = true;
      activeVideo.play().catch(() => {});
    }
    
    // Preload next slide's video
    const nextIndex = (activeSlide + 1) % slides.length;
    // Create a hidden preload link for the next video
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = slides[nextIndex].video;
    link.id = 'preload-next-video';
    const existing = document.getElementById('preload-next-video');
    if (existing) existing.remove();
    document.head.appendChild(link);
    
    // Reset loaded state for new slide
    setVideoLoaded(false);
    
    // Force-hide spinner after 6s (safety net for slow connections)
    const timeout = setTimeout(() => setVideoLoaded(true), 6000);
    return () => clearTimeout(timeout);
  }, [activeSlide]);

  // Grid category filter animation
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll<HTMLElement>(".model-card-wrapper");
    if (!cards.length) return;
    gsap.set(cards, { opacity: 0, y: 28 });
    gsap.to(cards, { opacity: 1, y: 0, duration: 0.5, stagger: 0.055, ease: "power3.out", overwrite: "auto" });
  }, [activeCategory]);

  // Manifesto word reveal
  useEffect(() => {
    if (!manifestoRef.current || !quoteRef.current) return;
    const words = quoteRef.current.querySelectorAll(".word");
    gsap.set(words, { opacity: 0, y: 18 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: manifestoRef.current,
        start: "top 62%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      },
    });
    tl.to(words, { opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease: "power3.out" });
    return () => { tl.kill(); ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  // Stats reveal
  useEffect(() => {
    if (!statsRef.current) return;
    gsap.fromTo(
      statsRef.current.querySelectorAll(".stat-item"),
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      }
    );
  }, []);

  const handleMouseDown  = useCallback((e: React.MouseEvent) => {
    if (!reelTrackRef.current) return;
    setIsDragging(true);
    setDragStart(e.pageX - reelTrackRef.current.offsetLeft);
    setScrollLeft(reelTrackRef.current.scrollLeft);
  }, []);

  const handleMouseMove  = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !reelTrackRef.current) return;
    e.preventDefault();
    const x = e.pageX - reelTrackRef.current.offsetLeft;
    reelTrackRef.current.scrollLeft = scrollLeft - (x - dragStart) * 1.5;
  }, [isDragging, dragStart, scrollLeft]);

  const handleMouseUp    = useCallback(() => setIsDragging(false), []);
  const handleMouseLeave = useCallback(() => setIsDragging(false), []);

  const closeLightbox     = () => setLightboxOpen(false);
  const prevLightboxImage = () => setLightboxIndex((p) => (p - 1 + 9) % 9);
  const nextLightboxImage = () => setLightboxIndex((p) => (p + 1) % 9);

  const quoteText = "We do not create models. We find the ones who were always meant to be seen.";

  return (
    <>
      {/* ── Transition wipe ── */}
      <div
        ref={transitionRef}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "var(--bg-invert)",
          zIndex: 9999,
          transformOrigin: "top center",
          pointerEvents: "none",
        }}
      />

      {/* ═══════════════════════════════════════
          HERO CAROUSEL
      ═══════════════════════════════════════ */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - var(--nav-height))",
          minHeight: 480,
          overflow: "hidden",
          backgroundColor: "var(--bg-secondary)",
        }}
      >
        {/* Active slide video + inactive static images for performance */}
        {slides.map((slide, i) => {
          const isActive = i === activeSlide;
          const imgUrl = `https://images.pexels.com/photos/${slide.seed}/pexels-photo-${slide.seed}.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop`;
          return (
            <div
              key={slide.seed}
              className="gpu"
              style={{
                position: "absolute",
                inset: 0,
                opacity: isActive ? 1 : 0,
                transition: "opacity 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                zIndex: isActive ? 1 : 0,
              }}
            >
              {/* Static poster image shown for all slides */}
              <img
                src={imgUrl}
                alt=""
                loading={isActive ? "eager" : "lazy"}
                decoding="async"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 25%",
                  pointerEvents: "none",
                }}
              />
              {/* Video only rendered for active slide */}
              {isActive && (
                <video
                  data-slide={i}
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onLoadedData={() => setVideoLoaded(true)}
                  onError={() => setVideoLoaded(true)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 25%",
                    pointerEvents: "none",
                  }}
                />
              )}
              {/* Loading overlay shown briefly until video loads */}
              {isActive && !videoLoaded && (
                <div style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(13,11,9,0.3)",
                }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    border: "2px solid rgba(196,164,76,0.15)",
                    borderTopColor: "var(--gold-mid)",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }} />
                </div>
              )}

              {/* Gradient overlays per slide */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(5,3,2,0.62) 0%, rgba(5,3,2,0.18) 55%, transparent 100%)",
                zIndex: 1,
              }} />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(5,3,2,0.7) 0%, transparent 50%)",
                zIndex: 1,
              }} />
            </div>
          );
        })}

        {/* ── Slide text block ── */}
        <div
          className="hero-text-block"
          style={{
            position: "absolute",
            bottom: 72,
            left: "var(--gutter)",
            zIndex: 2,
            maxWidth: "min(520px, 70vw)",
          }}
        >
          <span style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-micro)",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "var(--gold-warm)",
            display: "block",
            marginBottom: 14,
            textTransform: "uppercase",
          }}>
            {slides[activeSlide]?.category}
          </span>
          <h2
            className="hero-text-block"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
              fontWeight: 700,
              color: "#FAF8F4",
              letterSpacing: "0.05em",
              lineHeight: 1.1,
            }}
          >
            {slides[activeSlide]?.name}
          </h2>
        </div>

        {/* ── Left vertical progress bar ── */}
        <div style={{
          position: "absolute",
          left: "calc(var(--gutter) - 24px)",
          top: "20%",
          bottom: "20%",
          width: 2,
          backgroundColor: "rgba(250,248,244,0.15)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}>
          <div style={{
            width: "100%",
            backgroundColor: "var(--gold-mid)",
            height: `${((activeSlide + 1) / slides.length) * 100}%`,
            transition: "height 6s linear",
          }} />
        </div>

        {/* ── Slide counter (bottom right) ── */}
        <div style={{
          position: "absolute",
          bottom: 72,
          right: "var(--gutter)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#FAF8F4",
            letterSpacing: "0.04em",
          }}>
            {String(activeSlide + 1).padStart(2, "0")}
          </span>
          <div style={{ width: 32, height: 1, backgroundColor: "rgba(250,248,244,0.3)" }} />
          <span style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-small)",
            fontWeight: 500,
            color: "rgba(250,248,244,0.5)",
            letterSpacing: "0.1em",
          }}>
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* ── Bottom progress bar ── */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          backgroundColor: "rgba(255,255,255,0.12)",
          zIndex: 2,
        }}>
          <div style={{
            height: "100%",
            background: "var(--gold-gradient)",
            width: `${((activeSlide + 1) / slides.length) * 100}%`,
            transition: "width 6s linear",
          }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════ */}
      <section style={{
        backgroundColor: "var(--bg-secondary)",
        padding: "0",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}>
        <div
          ref={statsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            maxWidth: "100%",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="stat-item"
              style={{
                padding: "clamp(28px, 4vw, 48px) var(--gutter)",
                borderRight: i < stats.length - 1 ? "1px solid var(--border-subtle)" : "none",
                textAlign: "center",
                opacity: 0,
              }}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                color: "var(--gold-mid)",
                letterSpacing: "0.04em",
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-micro)",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EDITORIAL REEL
      ═══════════════════════════════════════ */}
      <section
        className="reel-section"
        style={{
          padding: "80px var(--gutter) 40px",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        {/* Header row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 36,
        }}>
          <div>
            <span style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-micro)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "var(--gold-mid)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 6,
            }}>
              Recent Editorial
            </span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-subsection)",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "0.03em",
              lineHeight: 1,
            }}>
              Latest Work
            </h2>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            {[
              { dir: -1, icon: <ChevronLeft size={18} /> },
              { dir: 1,  icon: <ChevronRight size={18} /> },
            ].map(({ dir, icon }, idx) => (
              <MagneticButton
                key={idx}
                onClick={() => {
                  if (reelTrackRef.current) reelTrackRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
                }}
              >
                <div style={{
                  width: 42,
                  height: 42,
                  border: "1px solid var(--border-default)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  transition: "border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold-mid)";
                  e.currentTarget.style.color = "var(--gold-mid)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-default)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}>
                  {icon}
                </div>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Reel */}
        <div
          ref={reelTrackRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            display: "flex",
            gap: 14,
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          {reelItems.map((item) => (
            <div
              key={item.seed}
              className="reel-card"
              style={{
                minWidth: 300,
                width: 300,
                height: 440,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "var(--bg-secondary)",
                flexShrink: 0,
              }}
            >
              <img
                src={`https://images.pexels.com/photos/${item.seed}/pexels-photo-${item.seed}.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop`}
                alt={item.name}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              />

              {/* Category pill */}
              <div style={{
                position: "absolute",
                top: 14,
                left: 14,
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
                zIndex: 2,
              }}>
                {item.label}
              </div>

              {/* Hover overlay */}
              <div
                className="reel-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(5,3,2,0.9) 0%, rgba(5,3,2,0.2) 55%, transparent 100%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "20px 18px",
                  zIndex: 1,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
              >
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#FAF8F4",
                  letterSpacing: "0.04em",
                  display: "block",
                  marginBottom: 4,
                }}>
                  {item.name}
                </span>
                <span style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--text-tiny)",
            fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "rgba(250,248,244,0.55)",
                }}>
                  {item.credit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════ */}
      <section style={{
        width: "100%",
        height: 58,
        backgroundColor: "var(--bg-invert)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div
          className="marquee-track"
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[1, 2].map((n) => (
            <span
              key={n}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-small)",
                fontWeight: 500,
                letterSpacing: "0.18em",
                color: "var(--text-inverse)",
                paddingRight: 48,
                textTransform: "uppercase",
              }}
            >
            PLANET&nbsp;M&ensp;
              ✦&ensp;NOIDA FILM CITY&ensp;
              ✦&ensp;INDIA'S FINEST&ensp;
              ✦&ensp;FASHION&ensp;
              ✦&ensp;COMMERCIAL&ensp;
              ✦&ensp;EDITORIAL&ensp;
              ✦&ensp;RUNWAY&ensp;
              ✦&ensp;PRINT&ensp;
              ✦&ensp;DIGITAL&ensp;
              ✦&ensp;TALENT MANAGEMENT&ensp;&ensp;
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MODEL ROSTER
      ═══════════════════════════════════════ */}
      <section
        style={{
          padding: "var(--section-pad) var(--gutter)",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: 48, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-micro)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "var(--gold-mid)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}>
              Our Roster
            </span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-section)",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "0.03em",
              lineHeight: 1.05,
            }}>
              THE TALENT
            </h2>
          </div>
          <a
            href="/models"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-micro)",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "1px solid var(--border-default)",
              paddingBottom: 4,
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gold-mid)";
              e.currentTarget.style.borderColor = "var(--gold-mid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.borderColor = "var(--border-default)";
            }}
          >
            View All <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Category filters */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(16px, 3vw, 36px)",
          marginBottom: 48,
          flexWrap: "wrap",
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: "none",
                border: "none",
                padding: "6px 0",
                cursor: "pointer",
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-micro)",
                fontWeight: activeCategory === cat ? 700 : 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: activeCategory === cat ? "var(--text-primary)" : "var(--text-secondary)",
                position: "relative",
                transition: "color 0.3s ease",
              }}
            >
              {cat}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 1,
                background: "var(--gold-gradient)",
                width: activeCategory === cat ? "100%" : 0,
                transition: "width 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }} />
            </button>
          ))}
        </div>

        {/* Counter */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <ModelCounter total={models.length} filtered={filteredModels.length} />
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="model-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(10px, 1.5vw, 18px)",
          }}
        >
          {filteredModels.map((m) => (
            <div key={m.slug} className="model-card-wrapper">
              <ModelCard
                name={m.name}
                category={m.category}
                credit={m.credit}
                slug={m.slug}
                image={`https://images.pexels.com/photos/${m.seed}/pexels-photo-${m.seed}.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MANIFESTO
      ═══════════════════════════════════════ */}
      <section
        ref={manifestoRef}
        className="manifesto-section"
        style={{
          position: "relative",
          padding: "clamp(80px, 12vw, 160px) var(--gutter)",
          backgroundColor: "var(--bg-secondary)",
          overflow: "hidden",
        }}
      >
        {/* Watermark */}
        <span style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(5rem, 18vw, 16rem)",
          fontWeight: 700,
          color: "var(--border-subtle)",
          letterSpacing: "0.1em",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          lineHeight: 1,
          userSelect: "none",
        }}>
          PLANET M
        </span>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          {/* Left gold accent line */}
          <div style={{
            width: 2,
            height: 56,
            background: "linear-gradient(to bottom, transparent, var(--gold-mid), transparent)",
            margin: "0 auto 40px",
          }} />

          <span style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-micro)",
            fontWeight: 600,
            letterSpacing: "0.24em",
            color: "var(--gold-mid)",
            textTransform: "uppercase",
            display: "block",
            marginBottom: 28,
          }}>
            Our Manifesto
          </span>

          <h3
            ref={quoteRef}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 700,
              fontStyle: "normal",
              color: "var(--text-primary)",
              lineHeight: 1.45,
              letterSpacing: "0.03em",
              marginBottom: 36,
            }}
          >
            {quoteText.split(" ").map((word, i) => (
              <span
                key={i}
                className="word"
                style={{ display: "inline-block", opacity: 0 }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h3>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body-lg)",
            fontWeight: 500,
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginBottom: 44,
            maxWidth: 580,
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            At PLANET M, we believe true presence cannot be taught. Based in Noida Film City,
            we represent a meticulously curated roster of talent that defines the future of fashion,
            commercial, editorial, and digital media across India and beyond.
          </p>

          <a
            href="/about"
            className="btn-ghost"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-micro)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-gold)",
              border: "1px solid var(--border-gold)",
              padding: "14px 36px",
              transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gold-mid)";
              e.currentTarget.style.color = "#FAF8F4";
              e.currentTarget.style.borderColor = "var(--gold-mid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--text-gold)";
              e.currentTarget.style.borderColor = "var(--border-gold)";
            }}
          >
            Discover Our Story
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEWS GRID
      ═══════════════════════════════════════ */}
      <section
        style={{
          padding: "var(--section-pad) var(--gutter)",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 40, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-micro)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "var(--gold-mid)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}>
              Press & News
            </span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-section)",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "0.03em",
              lineHeight: 1.05,
            }}>
              IN THE SPOTLIGHT
            </h2>
          </div>
          <a
            href="/news"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-micro)",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderBottom: "1px solid var(--border-default)",
              paddingBottom: 4,
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gold-mid)";
              e.currentTarget.style.borderColor = "var(--gold-mid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.borderColor = "var(--border-default)";
            }}
          >
            All News <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div
          className="news-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "58fr 42fr",
            gap: 14,
          }}
        >
          {newsArticles.map((article) => {
            const isLarge = article.large;
            return (
              <div
                key={article.seed}
                className="news-grid-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  gridColumn: isLarge ? "1 / 2" : "2 / 3",
                  gridRow: isLarge ? "1 / 3" : "auto",
                  minHeight: isLarge ? 560 : 220,
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <img
                  src={`https://images.pexels.com/photos/${article.seed}/pexels-photo-${article.seed}.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop`}
                  alt={article.headline}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  padding: isLarge ? "36px 32px" : "20px 22px",
                  background: "linear-gradient(to top, rgba(5,3,2,0.9) 0%, rgba(5,3,2,0.4) 55%, transparent 100%)",
                }}>
                  <span style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "var(--text-tiny)",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    color: "var(--gold-warm)",
                    display: "block",
                    marginBottom: 10,
                    textTransform: "uppercase",
                  }}>
                    {article.date}
                  </span>
                  <h4 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: isLarge ? "clamp(1.4rem, 2.5vw, 2rem)" : "clamp(1rem, 1.6vw, 1.3rem)",
                    fontWeight: 700,
                    color: "#FAF8F4",
                    letterSpacing: "0.03em",
                    lineHeight: 1.3,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-warm)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#FAF8F4"; }}
                  >
                    {article.headline}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INSTAGRAM
      ═══════════════════════════════════════ */}
      <section
        style={{
          padding: "var(--section-pad) var(--gutter)",
          backgroundColor: "var(--bg-secondary)",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 36,
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div>
            <span style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-micro)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "var(--gold-mid)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}>
              Follow Along
            </span>
            <a
              href="https://instagram.com/planetm.india"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-subsection)",
                fontWeight: 700,
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                gap: 10,
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-mid)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
            >
              @planetm.india
              <ExternalLink size={20} style={{ opacity: 0.5 }} />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div
          className="insta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
          }}
        >
          {instagramPosts.map((post, i) => (
            <div
              key={post.seed}
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "var(--bg-surface)",
              }}
            >
              <img
                src={`https://images.pexels.com/photos/${post.seed}/pexels-photo-${post.seed}.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop`}
                alt={`Planet M on Instagram #${i + 1}`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.07)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(5,3,2,0.55)",
                  backdropFilter: "blur(2px)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
              >
                <ExternalLink size={22} color="#FAF8F4" />
                <span style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--text-tiny)",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "#FAF8F4",
                  textTransform: "uppercase",
                }}>
                  View Post
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <Testimonials />

      {/* ═══════════════════════════════════════
          LIGHTBOX
      ═══════════════════════════════════════ */}
      {lightboxOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.96)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(6px)",
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevLightboxImage(); }}
            style={{
              position: "absolute",
              left: 24,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(250,248,244,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#FAF8F4",
              zIndex: 2,
              transition: "border-color 0.3s ease, background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold-mid)";
              e.currentTarget.style.color = "var(--gold-mid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#FAF8F4";
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src="https://images.pexels.com/photos/14848573/pexels-photo-14848573.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600&fit=crop"
            alt="Gallery"
            loading="lazy"
            style={{ maxWidth: "88vw", maxHeight: "88vh", objectFit: "contain" }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
            style={{
              position: "absolute",
              right: 24,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(250,248,244,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#FAF8F4",
              zIndex: 2,
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold-mid)";
              e.currentTarget.style.color = "var(--gold-mid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#FAF8F4";
            }}
          >
            <ChevronRight size={24} />
          </button>

          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "none",
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: "pointer",
              color: "#FAF8F4",
              zIndex: 2,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-ui)",
              fontSize: "1.1rem",
              fontWeight: 400,
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold-mid)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
