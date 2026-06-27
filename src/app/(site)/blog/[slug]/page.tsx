"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";

const articles = [
  {
    slug: "portfolio-guide",
    title: "The Ultimate Portfolio Guide for Aspiring Models",
    category: "TIPS",
    author: "Rahul Mehra",
    date: "Mar 15, 2024",
    hero: "https://images.pexels.com/photos/5325771/pexels-photo-5325771.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "Your modeling portfolio is your most powerful tool. It is the first impression you make on agencies, casting directors, and brands. A well-crafted portfolio can open doors, while a poorly assembled one can close them just as quickly. In this guide, we walk you through every step of building a portfolio that stands out.",
      "Start with strong headshots. Natural lighting, minimal makeup, and a clean background allow your features to shine. Include a variety of expressions — serious, smiling, contemplative — to demonstrate range. Professional photographers who specialize in model portfolios understand how to capture your best angles and bring out your unique look.",
      "Full-body shots are equally important. Brands need to see your stature, proportions, and how you carry yourself. Include both casual and editorial-style full-body images. Avoid heavy retouching; authenticity is highly valued in today's market. Agencies want to see the real you, not an AI-enhanced version.",
      "Finally, curate selectively. Ten outstanding images are far more effective than fifty mediocre ones. Update your portfolio regularly as you gain experience and your look evolves. Remember, your portfolio is a living document of your career — treat it with the care it deserves.",
    ],
  },
  {
    slug: "ss24-campaign",
    title: "Behind the Scenes: SS24 Campaign Shoot",
    category: "BEHIND THE SCENES",
    author: "Ahana Batra",
    date: "Mar 10, 2024",
    hero: "https://images.pexels.com/photos/5560184/pexels-photo-5560184.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "The PLANET M team recently wrapped production on our Spring/Summer 2024 campaign, and we are thrilled to share an exclusive behind-the-scenes look. Shot over three days at a stunning location outside Jaipur, the campaign brings together a diverse cast of our finest talent.",
      "Day one began at 4 AM with hair and makeup. Our creative director envisioned a palette of warm terracottas and soft ivories, inspired by the Rajasthani landscape. The styling team worked meticulously, each look carefully curated to complement the natural surroundings while maintaining a high-fashion edge.",
      "The energy on set was electric. Our models moved with grace and professionalism, bringing the creative vision to life with every frame. The photographer captured over two thousand images across the three days, each one a testament to the exceptional talent represented by PLANET M.",
      "The final campaign will launch across digital platforms and print publications later this month. Stay tuned for the reveal — we promise it will be worth the wait.",
    ],
  },
  {
    slug: "new-face-fashion",
    title: "The New Face of Indian Fashion",
    category: "INDUSTRY",
    author: "Rahul Mehra",
    date: "Mar 5, 2024",
    hero: "https://images.pexels.com/photos/6069954/pexels-photo-6069954.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "Indian fashion is undergoing a remarkable transformation. Designers are moving beyond traditional aesthetics to embrace a global sensibility while retaining the rich cultural heritage that makes Indian fashion unique. This evolution is creating unprecedented opportunities for models who can bridge both worlds.",
      "The demand for diversity has never been greater. Brands are actively seeking models who represent the full spectrum of Indian beauty — different skin tones, body types, regional features, and personal styles. The era of a single narrow beauty standard is giving way to a celebration of individuality.",
      "Digital platforms have accelerated this shift. Social media allows models to build personal brands and connect directly with audiences and clients. Many of our most successful talents have leveraged Instagram and other platforms to showcase their versatility and attract international attention.",
      "At PLANET M, we are proud to be at the forefront of this change. We represent models who are redefining beauty standards and proving that Indian fashion can be both authentic and globally relevant. The future of the industry is bright, and it belongs to those who dare to be different.",
    ],
  },
  {
    slug: "what-brands-want",
    title: "What Top Brands Look for in Models",
    category: "ADVICE",
    author: "Ahana Batra",
    date: "Feb 28, 2024",
    hero: "https://images.pexels.com/photos/7779758/pexels-photo-7779758.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "After years of working with leading brands and casting directors, we have identified the qualities that consistently set successful models apart. While physical attributes matter, they are only part of the equation. The most sought-after models possess a combination of professionalism, adaptability, and presence.",
      "Reliability is paramount. Casting directors need to know that you will show up on time, prepared, and ready to work. Your reputation is built on the small things — punctuality, courtesy, and a positive attitude on set. These qualities make brands want to work with you again and again.",
      "Versatility is another key factor. The ability to transform your look and adapt to different creative directions is invaluable. Models who can move seamlessly between editorial, commercial, runway, and digital work are in high demand. This versatility also provides more opportunities and a more sustainable career.",
      "Ultimately, brands look for authenticity. The most compelling models are those who bring their true selves to their work. Confidence that comes from self-awareness, not arrogance, creates images that resonate with audiences. Be genuine, work hard, and let your unique qualities shine through.",
    ],
  },
  {
    slug: "q2-additions",
    title: "Q2 Roster Additions: Meet Our New Talent",
    category: "ANNOUNCEMENT",
    author: "PLANET M Team",
    date: "Feb 20, 2024",
    hero: "https://images.pexels.com/photos/7779244/pexels-photo-7779244.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "We are delighted to announce the newest members of the PLANET M family. This quarter, we have added twelve exceptionally talented individuals to our roster, each bringing a unique look and energy that will expand the range of talent we can offer our clients.",
      "Among our new signings are three models who will be focusing on high-fashion editorial and runway work, with measurements and looks that align with international standards. They have already begun booking with top designers for the upcoming fashion week season.",
      "We have also added five commercial and lifestyle models who excel in campaigns, catalogs, and digital content. Their relatable appeal and strong on-camera presence make them ideal for brand collaborations across fashion, beauty, and lifestyle sectors.",
      "Please join us in welcoming our new talent. We look forward to watching their careers flourish and are committed to providing them with the guidance and opportunities they need to succeed in this competitive industry.",
    ],
  },
  {
    slug: "first-casting-guide",
    title: "Your First Casting: A Complete Guide",
    category: "GUIDE",
    author: "Ahana Batra",
    date: "Feb 15, 2024",
    hero: "https://images.pexels.com/photos/7081100/pexels-photo-7081100.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "Your first casting call can be nerve-wracking, but with the right preparation, it can also be an exciting and rewarding experience. At PLANET M, we prepare our talent thoroughly for every casting, ensuring they walk in with confidence and professionalism.",
      "Preparation begins the night before. Lay out your outfit — keep it simple and fitted so the casting team can see your natural silhouette. Avoid heavy patterns or logos. Bring your portfolio, a pair of heels (if applicable), and a small kit with basic touch-up items. Get a full night's rest and arrive hydrated.",
      "On arrival, be polite to everyone you meet. The receptionist, assistants, and other staff all contribute to the feedback you receive. When it is your turn, walk in with good posture, make eye contact, and introduce yourself clearly. Follow the photographer or casting director's direction without overthinking it.",
      "After the casting, send a brief thank-you note to your agent and the casting team. Regardless of the outcome, each casting is a learning experience. Reflect on what went well and what you can improve. With persistence and preparation, your breakthrough moment will come.",
    ],
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const containerRef = useRef<HTMLDivElement>(null);

  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    if (!containerRef.current) return;
    const children = containerRef.current.children;
    gsap.fromTo(
      children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" }
    );
  }, [slug]);

  if (!article) {
    return (
      <div
        style={{
          backgroundColor: "var(--bg-primary)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "3rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: 16,
          }}
        >
          Article Not Found
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            fontWeight: 400,
            color: "var(--text-secondary)",
            marginBottom: 32,
          }}
        >
          The article you are looking for does not exist.
        </p>
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#C4A44C",
            textDecoration: "none",
            borderBottom: "1px solid #C4A44C",
            paddingBottom: 4,
          }}
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "var(--bg-primary)",
        minHeight: "100vh",
        padding: "120px var(--gutter-desktop, 80px) 80px",
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
        }}
        ref={containerRef}
      >
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            marginBottom: 40,
          }}
        >
          <img
            loading="lazy"
            src={article.hero}
            alt={article.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 8,
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
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.65rem",
              color: "var(--text-secondary)",
            }}
          >
            /
          </span>
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "var(--text-secondary)",
            }}
          >
            {article.author}
          </span>
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.65rem",
              color: "var(--text-secondary)",
            }}
          >
            /
          </span>
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "var(--text-secondary)",
            }}
          >
            {article.date}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-section)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "var(--text-primary)",
            lineHeight: 1.15,
            marginBottom: 32,
          }}
        >
          {article.title}
        </h1>

        {article.content.map((paragraph, i) => (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body)",
              fontWeight: 400,
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            {paragraph}
          </p>
        ))}

        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px solid rgba(194, 184, 170, 0.3)",
          }}
        >
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              textDecoration: "none",
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
            Back to Blog
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              textDecoration: "none",
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
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
