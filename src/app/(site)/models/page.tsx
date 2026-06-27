"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { gsap } from "gsap";
import ModelCard from "@/components/ModelCard";
import ModelCounter from "@/components/ModelCounter";

const categories = ["ALL", "WOMEN", "MEN", "COMMERCIAL", "EDITORIAL", "DIGITAL"];

const models = [
  { name: "ANANYA SHARMA", category: "WOMEN", credit: "Vogue India / Elle", slug: "ananya-sharma", seed: 11844304 },
  { name: "RAHUL VERMA", category: "MEN", credit: "GQ / Esquire", slug: "rahul-verma", seed: 15870088 },
  { name: "PREETI KAPOOR", category: "WOMEN", credit: "Harper's Bazaar / L'Officiel", slug: "preeti-kapoor", seed: 31743090 },
  { name: "ARJUN MEHTA", category: "MEN", credit: "Vogue Man / FHM", slug: "arjun-mehta", seed: 8126621 },
  { name: "NEHA SINGH", category: "WOMEN", credit: "Vogue India / Cosmopolitan", slug: "neha-singh", seed: 17825439 },
  { name: "VIKAS PATEL", category: "MEN", credit: "GQ India / Man's World", slug: "vikas-patel", seed: 4729154 },
  { name: "RITIKA AHLUWALIA", category: "WOMEN", credit: "Femina / Vogue", slug: "ritika-ahluwalia", seed: 28698700 },
  { name: "AARAV KHAN", category: "MEN", credit: "Elle Man / FHM", slug: "aarav-khan", seed: 6454667 },
  { name: "KAVYA JOSHI", category: "COMMERCIAL", credit: "Amazon Fashion / Myntra", slug: "kavya-joshi", seed: 30512491 },
  { name: "ROHAN DESAI", category: "COMMERCIAL", credit: "Tata / Adidas", slug: "rohan-desai", seed: 30725121 },
  { name: "ISHITA VERMA", category: "EDITORIAL", credit: "Vogue / Harper's Bazaar", slug: "ishita-verma", seed: 29271917 },
  { name: "ADITYA ROY", category: "EDITORIAL", credit: "GQ / L'Officiel", slug: "aditya-roy", seed: 14707868 },
  { name: "MAYA CHOPRA", category: "DIGITAL", credit: "Instagram / YouTube", slug: "maya-chopra", seed: 4510111 },
  { name: "DEV RAJ", category: "DIGITAL", credit: "Instagram / TikTok", slug: "dev-raj", seed: 33523782 },
  { name: "SARA NAIR", category: "WOMEN", credit: "Vogue India / Elle", slug: "sara-nair", seed: 8018040 },
  { name: "KABIR SINGH", category: "MEN", credit: "GQ / Esquire", slug: "kabir-singh", seed: 17393361 },
  { name: "TARA JOSHI", category: "WOMEN", credit: "Vogue / L'Officiel", slug: "tara-joshi", seed: 12655540 },
  { name: "ZAYN ALI", category: "MEN", credit: "GQ India / Vogue Man", slug: "zayn-ali", seed: 2751215 },
  { name: "NISHA GUPTA", category: "COMMERCIAL", credit: "Nykaa / Myntra", slug: "nisha-gupta", seed: 31762856 },
  { name: "SAMAR SINGH", category: "EDITORIAL", credit: "Harper's Bazaar / Elle", slug: "samar-singh", seed: 18899634 },
  { name: "KIRA MEHTA", category: "DIGITAL", credit: "YouTube / Instagram", slug: "kira-mehta", seed: 29538558 },
  { name: "AVIDESH SHARMA", category: "MEN", credit: "FHM / GQ", slug: "avidesh-sharma", seed: 31589335 },
];

function ModelsRosterContent() {
  const gridRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  
  // Read category search param if present (e.g. /models?category=FASHION)
  const categoryParam = searchParams.get("category")?.toUpperCase() || "ALL";
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  const filteredModels = activeCategory === "ALL" ? models : models.filter((m) => m.category === activeCategory);

  // Sync category filter state if search parameter changes externally
  useEffect(() => {
    const param = searchParams.get("category")?.toUpperCase() || "ALL";
    if (categories.includes(param)) {
      setActiveCategory(param);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll<HTMLElement>(".model-card-wrapper");
    if (!cards.length) return;

    gsap.set(cards, { opacity: 0, y: 40 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, [activeCategory]);

  return (
    <section
      style={{
        padding: "40px var(--gutter) 120px",
        backgroundColor: "var(--bg-primary)",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "3rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: 8,
          letterSpacing: "0.08em",
        }}
      >
        OUR ROSTER
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          fontWeight: 400,
          color: "var(--text-secondary)",
          marginBottom: 56,
        }}
      >
        {filteredModels.length} {activeCategory === "ALL" ? "models" : activeCategory.toLowerCase()}
      </p>

      <div
        style={{
          display: "flex",
          gap: 32,
          marginBottom: 56,
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(194, 184, 170, 0.3)",
          paddingBottom: 16,
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.8rem",
                fontWeight: activeCategory === cat ? 700 : 500,
                letterSpacing: "0.2em",
                color: activeCategory === cat ? "var(--text-primary)" : "var(--text-secondary)",
                transition: "color 0.3s ease",
              }}
            >
              {cat}
            </span>
            <div
              style={{
                height: 2,
                backgroundColor: "var(--gold-mid)",
                width: activeCategory === cat ? "100%" : 0,
                marginTop: 4,
                transition: "width 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
                borderRadius: 1,
              }}
            />
          </button>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <ModelCounter total={models.length} filtered={filteredModels.length} />
      </div>

      <div
        ref={gridRef}
        className="model-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
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
  );
}

export default function ModelsPage() {
  return (
    <Suspense fallback={
      <div style={{
        padding: "120px var(--gutter)",
        textAlign: "center",
        fontFamily: "var(--font-ui)",
        fontSize: "1.2rem",
        color: "var(--text-secondary)",
        letterSpacing: "0.1em",
        minHeight: "100vh",
      }}>
        LOADING ROSTER...
      </div>
    }>
      <ModelsRosterContent />
    </Suspense>
  );
}
