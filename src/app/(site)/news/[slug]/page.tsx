"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";

const articles = [
  {
    slug: "fashion-week-2024",
    title: "PLANET M Dominates Fashion Week 2024",
    date: "Apr 5, 2024",
    hero: "https://images.pexels.com/photos/9821877/pexels-photo-9821877.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "This season, PLANET M made an indelible mark on fashion weeks across the country. Our models walked for 15 designers at Lakme Fashion Week, India Fashion Week, and several regional showcases, cementing our reputation as the agency that represents the most sought-after talent in the industry.",
      "From opening shows to exclusive presentations, our roster was in high demand. Several of our models were chosen as show openers and closers for major designers, a testament to the trust and relationships we have built with the fashion community over the years.",
      "The feedback from designers and fashion directors has been overwhelmingly positive. Our models were praised for their professionalism, walk quality, and ability to embody the creative vision of each collection. This season's success is a direct result of our rigorous training and commitment to excellence.",
      "We extend our gratitude to every designer who trusted us with their vision and to our models whose dedication made this achievement possible. Fashion Week 2024 will be remembered as a defining moment for PLANET M.",
    ],
  },
  {
    slug: "new-studio",
    title: "New State-of-the-Art Studio Opening",
    date: "Mar 28, 2024",
    hero: "https://images.pexels.com/photos/15190577/pexels-photo-15190577.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "PLANET M is proud to announce the opening of our new 5000 square foot studio in the heart of Noida Film City. This world-class facility represents a significant investment in our infrastructure and our commitment to providing the best environment for our talent and clients.",
      "The studio features three shooting bays, each equipped with professional lighting systems, seamless backdrops, and the latest camera technology. A dedicated hair and makeup suite, green room, and client lounge ensure that every shoot runs smoothly and comfortably.",
      "Natural light floods the main shooting area through floor-to-ceiling windows, while blackout capability allows for complete control over artificial lighting setups. The space has been designed by industry professionals who understand the specific needs of fashion and commercial photography.",
      "We invite our clients and partners to book the studio for their own productions. With competitive rates and full technical support available, the PLANET M studio is set to become a creative hub for the entire fashion community.",
    ],
  },
  {
    slug: "international-partnership",
    title: "International Partnership Announcement",
    date: "Mar 20, 2024",
    hero: "https://images.pexels.com/photos/25399489/pexels-photo-25399489.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "PLANET M has entered into a strategic partnership with three leading European modeling agencies, creating a direct pipeline for our talent to access international markets. This collaboration marks a significant milestone in our mission to put Indian models on the global stage.",
      "The partnership includes exchange programs, shared client rosters, and coordinated campaign opportunities. Our models will now have the opportunity to work in fashion capitals including Paris, Milan, London, and Berlin, while European talent will gain access to the rapidly growing Indian market.",
      "This initiative comes at a time when global fashion is increasingly looking to India for fresh perspectives and diverse beauty. We believe this partnership will create transformative opportunities for our talent and strengthen the bridge between Indian and international fashion industries.",
      "Several of our models have already been selected for upcoming campaigns in Europe. We look forward to sharing more details as these projects develop and to continuing our mission of representing Indian excellence on the world stage.",
    ],
  },
  {
    slug: "charity-event",
    title: "Annual Charity Gala Raises 50 Lakhs",
    date: "Mar 12, 2024",
    hero: "https://images.pexels.com/photos/29271917/pexels-photo-29271917.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "PLANET M hosted its annual charity gala this month, raising over 50 lakhs for educational initiatives supporting underprivileged children across India. The black-tie event brought together the fashion industry's most prominent figures for an evening of celebration and philanthropy.",
      "The gala featured a spectacular fashion show showcasing our models in designs donated by leading Indian designers. A live auction of exclusive experiences and artwork contributed significantly to the fundraising total, with our community showing incredible generosity.",
      "The funds raised will be directed toward building digital classrooms in rural areas, providing scholarships for talented students from disadvantaged backgrounds, and supporting vocational training programs that create sustainable livelihoods.",
      "We extend our deepest gratitude to everyone who contributed to this cause. At PLANET M, we believe that our success carries a responsibility to give back, and we are committed to making this annual event a cornerstone of our community engagement.",
    ],
  },
  {
    slug: "digital-launch",
    title: "Digital Platform Launch: Model Connect",
    date: "Mar 1, 2024",
    hero: "https://images.pexels.com/photos/9148280/pexels-photo-9148280.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "PLANET M is excited to launch Model Connect, our new digital platform that revolutionizes the way models and brands connect. This innovative solution streamlines the entire booking process, making it faster, more transparent, and more efficient for everyone involved.",
      "Model Connect allows brands to browse our complete roster, filter by specific requirements, view comprehensive portfolios, and submit booking requests directly through the platform. Real-time availability updates ensure that both parties have accurate information at their fingertips.",
      "For our models, the platform provides a centralized dashboard to manage their schedules, review booking requests, access campaign materials, and track their earnings. The intuitive interface is designed to simplify the administrative aspects of a modeling career so our talent can focus on their craft.",
      "We believe Model Connect will set a new standard for agency-client interactions in the Indian fashion industry. The platform is currently available to select partners and will be rolled out to all clients in the coming weeks.",
    ],
  },
  {
    slug: "award-win",
    title: "Awarded Agency of the Year 2024",
    date: "Feb 20, 2024",
    hero: "https://images.pexels.com/photos/4510111/pexels-photo-4510111.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    content: [
      "PLANET M has been honored with the prestigious Agency of the Year award at the 2024 Indian Fashion & Beauty Awards. This recognition celebrates our contribution to the industry, our commitment to talent development, and the exceptional campaigns we have delivered over the past year.",
      "The award selection process evaluated agencies across multiple criteria including talent roster quality, campaign innovation, client satisfaction, industry impact, and contribution to diversity and inclusion. PLANET M scored exceptionally well across all categories.",
      "This achievement would not have been possible without the dedication of our team, the trust of our clients, and most importantly, the incredible talent of the models we represent. Every member of the PLANET M family has played a role in earning this recognition.",
      "We accept this award with humility and gratitude. It inspires us to continue pushing boundaries, raising standards, and championing the next generation of Indian modeling talent. The best is yet to come.",
    ],
  },
];

export default function NewsDetailPage() {
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
          href="/news"
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
          Back to News
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
              color: "#C4A44C",
              fontWeight: 600,
              letterSpacing: "0.15em",
            }}
          >
            NEWS
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
            href="/news"
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
            Back to News
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1C1814",
              textDecoration: "none",
              borderBottom: "1px solid #1C1814",
              paddingBottom: 4,
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#C4A44C";
              e.currentTarget.style.borderColor = "#C4A44C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#1C1814";
              e.currentTarget.style.borderColor = "#1C1814";
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
