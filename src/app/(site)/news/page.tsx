"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const articles = [
  {
    slug: "fashion-week-2024",
    title: "PLANET M Dominates Fashion Week 2024",
    date: "Apr 5, 2024",
    excerpt:
      "Our models walked for 15 designers across the biggest fashion weeks this season, solidifying our position as India's leading agency.",
    image: "https://images.pexels.com/photos/9821877/pexels-photo-9821877.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    slug: "new-studio",
    title: "New State-of-the-Art Studio Opening",
    date: "Mar 28, 2024",
    excerpt:
      "PLANET M expands with a new 5000 sq ft studio equipped with the latest photography and production facilities.",
    image: "https://images.pexels.com/photos/15190577/pexels-photo-15190577.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    slug: "international-partnership",
    title: "International Partnership Announcement",
    date: "Mar 20, 2024",
    excerpt:
      "Strategic alliance with European modeling agencies opens new opportunities for our talent on the global stage.",
    image: "https://images.pexels.com/photos/25399489/pexels-photo-25399489.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    slug: "charity-event",
    title: "Annual Charity Gala Raises 50 Lakhs",
    date: "Mar 12, 2024",
    excerpt:
      "PLANET M hosted its annual charity event supporting education for underprivileged children across India.",
    image: "https://images.pexels.com/photos/29271917/pexels-photo-29271917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    slug: "digital-launch",
    title: "Digital Platform Launch: Model Connect",
    date: "Mar 1, 2024",
    excerpt:
      "New digital platform connecting models with brands directly, streamlining the booking process for everyone.",
    image: "https://images.pexels.com/photos/9148280/pexels-photo-9148280.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    slug: "award-win",
    title: "Awarded Agency of the Year 2024",
    date: "Feb 20, 2024",
    excerpt:
      "PLANET M wins prestigious industry award, recognized for excellence in talent management and innovative campaigns.",
    image: "https://images.pexels.com/photos/4510111/pexels-photo-4510111.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
];

export default function NewsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".news-card");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--bg-primary)",
        minHeight: "100vh",
        padding: "40px var(--gutter) 80px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-section)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "var(--text-primary)",
            marginBottom: 12,
          }}
        >
          NEWS
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            fontWeight: 400,
            color: "var(--text-secondary)",
            marginBottom: 56,
          }}
        >
          The latest updates and announcements from PLANET M.
        </p>

        <div
          ref={gridRef}
          className="news-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="news-card"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-default)",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(28,24,20,0.08)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                }}
              >
                <img
                  loading="lazy"
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
              <div
                style={{
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  flex: 1,
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "var(--text-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {article.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {article.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: 12,
                    marginTop: "auto",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {article.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
