"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const articles = [
  {
    slug: "portfolio-guide",
    title: "The Ultimate Portfolio Guide for Aspiring Models",
    category: "TIPS",
    excerpt:
      "Everything you need to know about building a professional modeling portfolio that gets you noticed by top agencies and brands.",
    author: "Rahul Mehra",
    date: "Mar 15, 2024",
    image: "https://images.pexels.com/photos/5325771/pexels-photo-5325771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    slug: "ss24-campaign",
    title: "Behind the Scenes: SS24 Campaign Shoot",
    category: "BEHIND THE SCENES",
    excerpt:
      "An exclusive look at our Spring/Summer 2024 campaign production featuring never-before-seen moments from the set.",
    author: "Ahana Batra",
    date: "Mar 10, 2024",
    image: "https://images.pexels.com/photos/5560184/pexels-photo-5560184.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    slug: "new-face-fashion",
    title: "The New Face of Indian Fashion",
    category: "INDUSTRY",
    excerpt:
      "How Indian fashion is evolving and what it means for models entering the industry today.",
    author: "Rahul Mehra",
    date: "Mar 5, 2024",
    image: "https://images.pexels.com/photos/6069954/pexels-photo-6069954.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    slug: "what-brands-want",
    title: "What Top Brands Look for in Models",
    category: "ADVICE",
    excerpt:
      "Insider perspective on what casting directors and brands really seek when selecting talent for campaigns.",
    author: "Ahana Batra",
    date: "Feb 28, 2024",
    image: "https://images.pexels.com/photos/7779758/pexels-photo-7779758.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    slug: "q2-additions",
    title: "Q2 Roster Additions: Meet Our New Talent",
    category: "ANNOUNCEMENT",
    excerpt:
      "Introducing the newest faces joining the PLANET M family this quarter.",
    author: "PLANET M Team",
    date: "Feb 20, 2024",
    image: "https://images.pexels.com/photos/7779244/pexels-photo-7779244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    slug: "first-casting-guide",
    title: "Your First Casting: A Complete Guide",
    category: "GUIDE",
    excerpt:
      "How to prepare, what to expect, and how to make a lasting impression at your very first casting call.",
    author: "Ahana Batra",
    date: "Feb 15, 2024",
    image: "https://images.pexels.com/photos/7081100/pexels-photo-7081100.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
];

export default function BlogPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".blog-card");
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
          BLOG
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
          Insights, advice, and stories from the PLANET M team.
        </p>

        <div
          ref={gridRef}
          className="blog-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="blog-card"
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
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    color: "#C4A44C",
                  }}
                >
                  {article.category}
                </span>
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
                    justifyContent: "space-between",
                    alignItems: "center",
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
                    {article.author}
                  </span>
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
