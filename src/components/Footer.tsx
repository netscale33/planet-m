"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navigateLinks = [
  { label: "Home",    href: "/home"    },
  { label: "Models",  href: "/models"  },
  { label: "About",   href: "/about"   },
  { label: "News",    href: "/news"    },
  { label: "Blog",    href: "/blog"    },
  { label: "Contact", href: "/contact" },
];

const contactInfo = [
  { label: "Phone",     value: "+91 98765 43210", type: "text" },
  { label: "Rahul Mehra",  value: "Mehrarahul.films@gmail.com", type: "email" },
  { label: "Ahana Batra",  value: "Batraahana.movies@gmail.com", type: "email" },
  { label: "Address",   value: "J40/10, 3rd Floor, Near Zee Studio, Noida Film City, Gautam Buddha Nagar, UP — 201301", type: "text" },
];

const services = [
  { label: "Fashion", href: "/models?category=FASHION" },
  { label: "Commercial", href: "/models?category=COMMERCIAL" },
  { label: "Editorial", href: "/models?category=EDITORIAL" },
  { label: "Digital", href: "/models?category=DIGITAL" },
  { label: "Runway", href: "/models?category=RUNWAY" },
];

const socialLinks = [
  {
    label: "Instagram",
    abbr: "IG",
    href: "https://instagram.com/planetm.india",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    abbr: "FB",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    abbr: "LN",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    abbr: "YT",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef  = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!columnsRef.current) return;
    const cols = Array.from(columnsRef.current.children);
    gsap.fromTo(
      cols,
      { y: 48, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: "power3.out",
        scrollTrigger: {
          trigger: columnsRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        backgroundColor: "var(--bg-secondary)",
        padding: "80px var(--gutter) 0",
        marginTop: "auto",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* ── Gold top accent ── */}
      <div className="gold-line-full" style={{ marginBottom: 56 }} />

      {/* ── Brand header ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        marginBottom: 56,
        flexWrap: "wrap",
      }}>
        {/* Logo image — no container, CSS class handles theme */}
        <Image
          src="/images/logo.png"
          alt="Planet M — India's Premier Modeling Agency"
          width={100}
          height={80}
          className="logo-img-footer"
        />
        {/* Brand name + tagline */}
        <div>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "0.1em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}>
            Planet M
          </div>
          <div style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-micro)",
            fontWeight: 700,
            color: "var(--gold-mid)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginTop: 10,
          }}>
            INDIA'S PREMIER TALENT HOUSE
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: 1, backgroundColor: "var(--border-subtle)", marginBottom: 56 }} />

      {/* ── Four column grid ── */}
      <div
        ref={columnsRef}
        className="footer-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(32px, 4vw, 56px)" }}
      >
        {/* Navigate */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-tiny)",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
            marginBottom: 24,
          }}>
            Navigate
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {navigateLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--text-micro)",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  padding: "12px 18px",
                  border: "1px solid var(--border-default)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold-mid)";
                  e.currentTarget.style.color = "var(--gold-mid)";
                  e.currentTarget.style.backgroundColor = "var(--gold-whisper)";
                  const arrow = e.currentTarget.querySelector('.nav-arrow') as HTMLSpanElement;
                  if (arrow) arrow.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-default)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.backgroundColor = "transparent";
                  const arrow = e.currentTarget.querySelector('.nav-arrow') as HTMLSpanElement;
                  if (arrow) arrow.style.transform = 'translateX(0)';
                }}
              >
                <span>{link.label}</span>
                <span className="nav-arrow" style={{
                  transition: "transform 0.3s ease",
                  display: "inline-block",
                  color: "var(--gold-mid)",
                }}>→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-tiny)",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
            marginBottom: 24,
          }}>
            Contact
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {contactInfo.map((item) => (
              <div key={item.label}>
                <span style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--text-tiny)",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold-mid)",
                  display: "block",
                  marginBottom: 4,
                }}>
                  {item.label}
                </span>
                {item.type === "email" ? (
                  <a href={`mailto:${item.value}`} style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-small)",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    lineHeight: 1.5,
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-mid)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-small)",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    lineHeight: 1.6,
                    display: "block",
                  }}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-tiny)",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
            marginBottom: 24,
          }}>
            Services
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {services.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--text-small)",
                  fontWeight: 700,
                  fontStyle: "normal",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  padding: "8px 0",
                  transition: "color 0.25s ease, padding-left 0.25s ease",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--gold-mid)";
                  e.currentTarget.style.paddingLeft = "6px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Follow */}
        <div>
          <h3 style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-tiny)",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
            marginBottom: 24,
          }}>
            Follow
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--text-small)",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  padding: "8px 0",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-mid)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
              >
                <span style={{
                  width: 34,
                  height: 34,
                  border: "1px solid var(--border-default)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "border-color 0.25s ease",
                }}>
                  {social.icon}
                </span>
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="footer-bottom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px 0",
          marginTop: 56,
          borderTop: "1px solid var(--border-subtle)",
          gap: 12,
        }}
      >
        <span style={{
          fontFamily: "var(--font-ui)",
          fontSize: "var(--text-tiny)",
          fontWeight: 500,
          letterSpacing: "0.08em",
          color: "var(--text-dim)",
        }}>
          © {new Date().getFullYear()} Planet M — All rights reserved
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {["Privacy", "Terms"].map((item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {i > 0 && <span style={{ color: "var(--gold-mid)", fontSize: "0.4rem" }}>✦</span>}
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "var(--text-tiny)",
                    letterSpacing: "0.08em",
                    color: "var(--text-dim)",
                    cursor: "pointer",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-dim)"; }}
                >
                  {item}
                </span>
              </span>
            ))}
          </div>
          <span style={{ color: "var(--gold-mid)", fontSize: "0.4rem" }}>✦</span>
          <a
            href="https://zorvent.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              background: "linear-gradient(135deg, #8A6E2D 0%, #C4A44C 50%, #F3DF95 100%)",
              padding: "10px 22px",
              borderRadius: "50px",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
              boxShadow: "0 0 20px rgba(196, 164, 76, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              position: "relative",
              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 35px rgba(196, 164, 76, 0.9), inset 0 1px 0 rgba(255,255,255,0.5)";
              e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(196, 164, 76, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)";
              e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.2)";
            }}
          >
            <span style={{
              display: "inline-block",
              width: 8,
              height: 8,
              backgroundColor: "#FFFFFF",
              borderRadius: "50%",
              boxShadow: "0 0 10px #FFFFFF",
              animation: "pulse-ring 1.5s infinite",
            }} />
            Designed & Developed by Zorvent ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

