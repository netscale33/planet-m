"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: "+", label: "Models Represented" },
  { value: 200, suffix: "+", label: "Placements" },
  { value: 50, suffix: "+", label: "Brand Partnerships" },
  { value: 1, prefix: "#", label: "In India" },
];

const team = [
  {
    name: "Rahul Mehra",
    role: "Founder & Director",
    seed: 29538558,
    bio: "With over 15 years of experience in fashion and talent management, Rahul founded PLANET M with a vision to bridge the gap between raw talent and the global stage.",
  },
  {
    name: "Ahana Batra",
    role: "Casting Director",
    seed: 9148280,
    bio: "Ahana brings a keen eye for potential and a decade of casting expertise across editorial, commercial, and runway campaigns for India's leading brands.",
  },
];

function Counter({ value, suffix, prefix, label, index }: { value: number; suffix?: string; prefix?: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: value,
            duration: 2,
            ease: "power3.out",
            onUpdate: () => {
              if (countRef.current) {
                countRef.current.textContent = Math.floor(obj.val).toString();
              }
            },
          });
        },
        once: true,
      });
    }, el);
    return () => ctx.revert();
  }, [value]);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: "40px 20px",
        borderRight: index < stats.length - 1 ? "1px solid rgba(196, 164, 76, 0.2)" : "none",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 700,
          color: "#C4A44C",
          lineHeight: 1,
          marginBottom: 12,
        }}
      >
        {prefix ? <span>{prefix}</span> : null}
        <span ref={countRef}>0</span>
        {suffix ? <span>{suffix}</span> : null}
      </div>
      <div
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "var(--text-small)",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#7A6E62",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const brandStoryRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
        );
      }

      const storyEls = brandStoryRef.current?.children;
      if (storyEls) {
        gsap.fromTo(
          storyEls,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: brandStoryRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "70vh",
          minHeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#1C1814",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.pexels.com/photos/29271917/pexels-photo-29271917.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 50%, rgba(196,164,76,0.08) 0%, transparent 60%), linear-gradient(to bottom, rgba(28,24,20,0.4), rgba(28,24,20,0.8))",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <h1
            ref={headingRef}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-hero)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
            }}
          >
            India&apos;s Finest
            <br />
            Talent Agency
          </h1>
        </div>
      </div>

      {/* Brand Story */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px",
        }}
      >
        <div
          ref={brandStoryRef}
          className="about-story-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-tiny)",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C4A44C",
                marginBottom: 16,
              }}
            >
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-section)",
                fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.15,
              marginBottom: 24,
              letterSpacing: "0.04em",
            }}
          >
            Crafting Careers,
              <br />
              Defining Beauty
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                fontWeight: 400,
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              Founded in the heart of Noida Film City, PLANET M was born from a
              singular belief — that India possesses some of the most striking
              and versatile faces in the world. We are not just a modeling
              agency; we are a launchpad for dreams.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                fontWeight: 400,
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              From editorial spreads in Vogue to blockbuster ad campaigns, our
              talent defines the visual landscape of modern India. Every face we
              represent tells a story. Every career we build is a testament to
              passion, perseverance, and the power of presence.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3/4",
              overflow: "hidden",
            }}
          >
            <img
              loading="lazy"
              src="https://images.pexels.com/photos/8018040/pexels-photo-8018040.jpeg?auto=compress&cs=tinysrgb&w=800&h=1067&fit=crop"
              alt="PLANET M Story"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          backgroundColor: "var(--bg-secondary)",
          padding: "80px 24px",
        }}
      >
        <div
          ref={statsRef}
          className="about-stats-grid"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {stats.map((s, i) => (
            <Counter key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>

      {/* Team */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-tiny)",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C4A44C",
              marginBottom: 16,
            }}
          >
            The Visionaries
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-section)",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "0.04em",
            }}
          >
            Meet Our Team
          </h2>
        </div>
        <div
          className="about-team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 48,
          }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/5",
                  overflow: "hidden",
                }}
              >
                <img
                  loading="lazy"
                  src={`https://images.pexels.com/photos/${member.seed}/pexels-photo-${member.seed}.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop`}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-subsection)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                    letterSpacing: "0.04em",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "var(--text-small)",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#C4A44C",
                    marginBottom: 16,
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div
        style={{
          backgroundColor: "#1C1814",
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-tiny)",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C4A44C",
                marginBottom: 16,
              }}
            >
              Visit Us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-section)",
                fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.04em",
            }}
          >
            Our Studio
            </h2>
          </div>
          <div
            style={{
              borderRadius: 8,
              overflow: "hidden",
              marginBottom: 32,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.677427693161!2d77.3256639!3d28.5817603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44a7a4b1a0d%3A0x6b5b5b5b5b5b5b5b!2sNoida%20Film%20City!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-small)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#C2B8AA",
              }}
            >
              J40/10, 3rd Floor, Near Zee Studio
              <br />
              Noida Film City, Gautam Buddha Nagar, UP — 201301
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
