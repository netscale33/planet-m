"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home",    href: "/home"    },
  { label: "Models",  href: "/models"  },
  { label: "About",   href: "/about"   },
  { label: "News",    href: "/news"    },
  { label: "Blog",    href: "/blog"    },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const navRef    = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const linksRef  = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  if (pathname === "/") return null;

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu links stagger animation
  useEffect(() => {
    if (menuOpen && linksRef.current) {
      gsap.fromTo(
        linksRef.current.querySelectorAll("a, button"),
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power3.out", delay: 0.12 }
      );
    }
  }, [menuOpen]);

  return (
    <>
      {/* ── Backdrop overlay ── */}
      <div
        ref={overlayRef}
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(5, 3, 2, 0.5)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: "var(--z-mobilemenu)" as unknown as number,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.4s var(--ease-power3)",
        } as React.CSSProperties}
      />

      {/* ── Main Nav ── */}
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--nav-height, 72px)",
          backgroundColor: scrolled
            ? "var(--bg-primary)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
          zIndex: "var(--z-navbar)" as unknown as number,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 var(--gutter)",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          transition: "background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        } as React.CSSProperties}
      >
        {/* Logo — circular badge + brand name */}
        <Link
          href="/home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            transition: "opacity 0.3s ease",
          }}
          aria-label="Planet M — Home"
        >
          {/* Logo image — no container, CSS class handles theme */}
          <Image
            src="/images/logo.png"
            alt="Planet M Logo"
            width={55}
            height={42}
            className="logo-img-nav"
            priority
          />
          {/* Brand name text */}
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.55rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--text-primary)",
            lineHeight: 1,
            textTransform: "uppercase",
          }}>
            Planet M
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          className="nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: 36 }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline"
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--text-tiny)",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--gold-mid)" : "var(--text-primary)",
                  paddingBottom: 3,
                  position: "relative",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-mid)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "var(--gold-mid)" : "var(--text-primary)"; }}
              >
                {link.label}
                {isActive && (
                  <span style={{
                    position: "absolute",
                    bottom: -1,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "var(--gold-mid)",
                  }} />
                )}
              </Link>
            );
          })}
 
          {/* CTA */}
          <Link
            href="/become-a-model"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-tiny)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              padding: "10px 22px",
              border: "1px solid var(--border-default)",
              position: "relative",
              overflow: "hidden",
              transition: "color 0.35s ease, border-color 0.35s ease, background-color 0.35s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--text-primary)";
              e.currentTarget.style.color = "var(--bg-primary)";
              e.currentTarget.style.borderColor = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.borderColor = "var(--border-default)";
            }}
          >
            Become a Model
          </Link>

          <ThemeToggle />
        </div>

        {/* Mobile menu trigger */}
        <div className="mobile-menu-btn" style={{ display: "none", alignItems: "center", gap: 12 }}>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              transition: "color 0.3s ease",
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Panel ── */}
      <div
        ref={mobileRef}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "min(285px, 80vw)",
          height: "100dvh",
          backgroundColor: "var(--bg-primary)",
          borderLeft: "1px solid var(--border-subtle)",
          zIndex: 99999 as unknown as number,
          display: "flex",
          flexDirection: "column",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          opacity: menuOpen ? 1 : 0,
          transition: "transform 0.5s var(--ease-power3), opacity 0.5s var(--ease-power3)",
          willChange: "transform, opacity",
          overflowY: "auto",
          overflowX: "hidden",
        } as React.CSSProperties}
      >
        {/* Mobile panel header with logo + name */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 28px",
          borderBottom: "1px solid var(--border-subtle)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Logo image — no container, CSS class handles theme */}
            <Image
              src="/images/logo.png"
              alt="Planet M"
              width={44}
              height={34}
              className="logo-img-mobile"
            />
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--text-primary)",
              textTransform: "uppercase",
            }}>PLANET M</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-secondary)",
              display: "flex",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div
          ref={linksRef}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "32px 28px",
            gap: 4,
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--gold-mid)" : "var(--text-primary)",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--border-subtle)",
                  display: "block",
                  transition: "color 0.25s ease, padding-left 0.25s ease",
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--gold-mid)";
                  e.currentTarget.style.paddingLeft = "8px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive ? "var(--gold-mid)" : "var(--text-primary)";
                  e.currentTarget.style.paddingLeft = "0px";
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/become-a-model"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-tiny)",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--bg-primary)",
              backgroundColor: "var(--text-primary)",
              padding: "14px 28px",
              marginTop: 24,
              display: "block",
              textAlign: "center",
              transition: "background-color 0.3s ease",
              opacity: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gold-mid)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--text-primary)"; }}
          >
            Become a Model
          </Link>
        </div>

        {/* Bottom info */}
        <div style={{
          padding: "20px 28px",
          borderTop: "1px solid var(--border-subtle)",
        }}>
          <p style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-tiny)",
            letterSpacing: "0.1em",
            color: "var(--text-dim)",
            textTransform: "uppercase",
          }}>
            India's Finest · Noida Film City
          </p>
        </div>
      </div>
    </>
  );
}

