"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

// Central Roster database for dynamic details lookup
const modelsRoster = [
  { name: "ANANYA SHARMA", category: "WOMEN", tagline: "FASHION · RUNWAY", bio: "Ananya Sharma is one of India's most sought-after fashion models, known for her striking presence on the runway and in print. With features in Vogue India, Elle, and Harper's Bazaar, she brings a timeless elegance to every project.", slug: "ananya-sharma", seed: 11844304 },
  { name: "RAHUL VERMA", category: "MEN", tagline: "EDITORIAL · COMMERCIAL", bio: "Rahul Verma is a top male model based in Delhi, known for his strong facial structure and versatility. He has walked for leading designers at India Fashion Week and starred in national campaigns for premium brands.", slug: "rahul-verma", seed: 15870088 },
  { name: "PREETI KAPOOR", category: "WOMEN", tagline: "RUNWAY · COMMERCIAL", bio: "Preeti Kapoor brings a vibrant energy and expressive range to every shoot. Specializing in commercial campaigns and runway, she has partnered with leading beauty and lifestyle brands across India.", slug: "preeti-kapoor", seed: 31743090 },
  { name: "ARJUN MEHTA", category: "MEN", tagline: "RUNWAY · FASHION", bio: "Arjun Mehta is a professional runway and editorial model. His sharp presence, combined with a dedicated work ethic, makes him a favorite among premium men's fashion designers and magazines.", slug: "arjun-mehta", seed: 8126621 },
  { name: "NEHA SINGH", category: "WOMEN", tagline: "WOMEN · FASHION", bio: "Neha Singh possesses a unique aesthetic that shines in haute couture and creative editorial spreads. Based in Noida, she has collaborated with top photographers and stylists throughout the country.", slug: "neha-singh", seed: 17825439 },
  { name: "VIKAS PATEL", category: "MEN", tagline: "MEN · EDITORIAL", bio: "Vikas Patel is an international-standard male talent representing Noida Film City. With GQ India and Man's World layouts, he excels in tailoring, luxury brand campaigns, and high-concept editorials.", slug: "vikas-patel", seed: 4729154 },
  { name: "RITIKA AHLUWALIA", category: "WOMEN", tagline: "WOMEN · RUNWAY", bio: "Ritika Ahluwalia is a runway veteran who brings confidence and poise to every fashion week. Her poise and editorial versatility have landed her covers in Femina and Vogue.", slug: "ritika-ahluwalia", seed: 28698700 },
  { name: "AARAV KHAN", category: "MEN", tagline: "MEN · COMMERCIAL", bio: "Aarav Khan is a premium commercial and digital model. Known for his charismatic presence, he has starred in major digital campaigns for tech, fitness, and lifestyle brands.", slug: "aarav-khan", seed: 6454667 },
  { name: "KAVYA JOSHI", category: "COMMERCIAL", tagline: "COMMERCIAL · BRANDING", bio: "Kavya Joshi is a major face in commercial modeling, representing brands like Amazon Fashion and Myntra. Her friendly, approachable style makes her a first choice for national media.", slug: "kavya-joshi", seed: 30512491 },
  { name: "ROHAN DESAI", category: "COMMERCIAL", tagline: "COMMERCIAL · LIFESTYLE", bio: "Rohan Desai is a commercial powerhouse, partnering with active brands like Adidas and Tata. His athletic build and professional focus drive success in print and video assets.", slug: "rohan-desai", seed: 30725121 },
  { name: "ISHITA VERMA", category: "EDITORIAL", tagline: "EDITORIAL · COUTURE", bio: "Ishita Verma's high-fashion look has graced the pages of Vogue and Harper's Bazaar. She excels in boundary-pushing avant-garde editorials and couture runway shows.", slug: "ishita-verma", seed: 29271917 },
  { name: "ADITYA ROY", category: "EDITORIAL", tagline: "EDITORIAL · MAN", bio: "Aditya Roy is an editorial model featured in GQ and L'Officiel. His expressive performance and dynamic poses make him a standout in high-concept fashion photography.", slug: "aditya-roy", seed: 14707868 },
  { name: "MAYA CHOPRA", category: "DIGITAL", tagline: "DIGITAL · INFLUENCE", bio: "Maya Chopra is a digital-first talent bridging social media influence and high-end commercial styling. Her dynamic content creation has built campaigns for international beauty lines.", slug: "maya-chopra", seed: 4510111 },
  { name: "DEV RAJ", category: "DIGITAL", tagline: "DIGITAL · CAMPAIGN", bio: "Dev Raj represents the new generation of digital creators and models. His presence across TikTok and Instagram has positioned him as a leading digital face for youth culture.", slug: "dev-raj", seed: 33523782 },
  { name: "SARA NAIR", category: "WOMEN", tagline: "WOMEN · EDITORIAL", bio: "Sara Nair has been a prominent face in high-fashion modeling, walking for top couturiers. Her features in Elle and Vogue India highlight her classic, graceful silhouette.", slug: "sara-nair", seed: 8018040 },
  { name: "KABIR SINGH", category: "MEN", tagline: "MEN · RUNWAY", bio: "Kabir Singh is a prominent runway model who brings strength and structure to the catwalk. He has represented top international menswear lines and lifestyle brands.", slug: "kabir-singh", seed: 17393361 },
  { name: "TARA JOSHI", category: "WOMEN", tagline: "WOMEN · COMMERCIAL", bio: "Tara Joshi is a classic editorial face, bringing soft strength and versatility. She has modeled in campaigns spanning luxury jewelry, travel, and traditional couture.", slug: "tara-joshi", seed: 12655540 },
  { name: "ZAYN ALI", category: "MEN", tagline: "MEN · EDITORIAL", bio: "Zayn Ali is a versatile male model focusing on tailored couture and luxury editorials. His high-end editorial campaigns highlight his expressive range.", slug: "zayn-ali", seed: 2751215 },
  { name: "NISHA GUPTA", category: "COMMERCIAL", tagline: "COMMERCIAL · BEAUTY", bio: "Nisha Gupta is a commercial and beauty model whose face represents Nykaa and Myntra campaigns. Her versatility is perfect for television ads and retail prints.", slug: "nisha-gupta", seed: 31762856 },
  { name: "SAMAR SINGH", category: "EDITORIAL", tagline: "EDITORIAL · RUNWAY", bio: "Samar Singh is an editorial and runway model who brings structure and focus. He has walked for leading designers and starred in major fashion editorial layouts.", slug: "samar-singh", seed: 18899634 },
  { name: "KIRA MEHTA", category: "DIGITAL", tagline: "DIGITAL · INFLUENCER", bio: "Kira Mehta is a digital native modeling for top beauty, fashion, and lifestyle startups. Her active online audience makes her a massive digital commercial force.", slug: "kira-mehta", seed: 29538558 },
  { name: "AVIDESH SHARMA", category: "MEN", tagline: "MEN · EDITORIAL", bio: "Avidesh Sharma is a structured male model representing Noida Film City. With high-fashion layouts, he excels in formal wear and high-concept editorials.", slug: "avidesh-sharma", seed: 31589335 },
];

// Curated list of verified fashion Pexels IDs for portfolio rendering
const curatedFashionPexels = [
  11844304, 15870088, 31743090, 8126621, 17825439, 4729154, 28698700, 6454667,
  30512491, 30725121, 29271917, 14707868, 4510111, 33523782, 8018040, 17393361,
  12655540, 2751215, 31762856, 18899634, 29538558, 31589335, 10203170, 35501782,
  15927094, 14848573, 5346109, 31526048, 14801145, 15869826, 9104796, 30847757,
  7779244, 7081100, 9821877, 15190577, 25399489, 5560184, 5325771, 7779758
];

export default function ModelDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Look up model dynamically
  const rosterModel = modelsRoster.find((m) => m.slug === slug);

  const model = rosterModel || {
    name: slug ? slug.toUpperCase().replace(/-/g, " ") : "FEATURED MODEL",
    category: "FEATURED",
    tagline: "INDIA'S FINEST · NOIDA FILM CITY",
    bio: "A distinguished talent represented by PLANET M, bringing exceptional presence and versatility to every project.",
    slug: slug || "featured",
    seed: 11844304,
  };

  // Generate responsive gender-aligned model stats
  const isMale = model.category === "MEN" || model.tagline.includes("MEN") || model.name.includes("RAHUL") || model.name.includes("ARJUN") || model.name.includes("VIKAS") || model.name.includes("AARAV") || model.name.includes("KABIR") || model.name.includes("SAMAR") || model.name.includes("ZAYN") || model.name.includes("AVIDESH") || model.name.includes("ROHAN") || model.name.includes("ADITYA") || model.name.includes("DEV");

  const modelStats = [
    { label: "HEIGHT", value: isMale ? "6'1\"" : "5'9\"" },
    { label: "EYES", value: "Brown" },
    { label: "HAIR", value: "Black" },
    { label: "LOCATION", value: "Noida Film City" },
    { label: "CATEGORY", value: model.category },
    { label: "BOOKING", value: "batraahana.movies@planetm.agency" },
  ];

  // Pick 9 unique curated fashion images dynamically based on model seed to ensure unique portfolio lists
  const seedIndex = Math.abs(model.seed) % (curatedFashionPexels.length - 9);
  const modelPortfolioSeeds = curatedFashionPexels.slice(seedIndex, seedIndex + 9);

  const galleryImages = modelPortfolioSeeds.map((pSeed, i) => ({
    seed: pSeed,
    alt: `${model.name} - Portfolio Shot ${i + 1}`,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <>
      {/* Back button header navigation bar */}
      <div style={{
        position: "fixed",
        top: 84,
        left: "var(--gutter)",
        zIndex: 99,
      }}>
        <button
          onClick={() => router.back()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-ui)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            backgroundColor: "rgba(28,24,20,0.65)",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "8px 16px",
            borderRadius: "4px",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--gold-mid)";
            e.currentTarget.style.color = "var(--gold-mid)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "#FFFFFF";
          }}
        >
          <ChevronLeft size={14} /> Back to Roster
        </button>
      </div>

      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "85vh",
          minHeight: "480px",
          overflow: "hidden",
          backgroundColor: "var(--bg-secondary)",
        }}
      >
        <img
          loading="lazy"
          src={`https://images.pexels.com/photos/${model.seed}/pexels-photo-${model.seed}.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop`}
          alt={model.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(13,11,9,0.85) 0%, rgba(13,11,9,0.3) 50%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "clamp(24px, 5vw, 64px)",
            left: "var(--gutter)",
            right: "var(--gutter)",
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "var(--gold-mid)",
              display: "block",
              marginBottom: 8,
              textTransform: "uppercase",
            }}
          >
            {model.tagline}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
              textTransform: "uppercase",
            }}
          >
            {model.name}
          </h1>
        </div>
      </section>

      {/* BIO + STATS SECTION (Responsive Columns) */}
      <section
        className="models-detail-grid"
        style={{
          padding: "120px 80px",
          backgroundColor: "var(--bg-primary)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "var(--gold-mid)",
              display: "block",
              marginBottom: 16,
            }}
          >
            ABOUT
          </span>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              fontWeight: 500,
              color: "var(--text-secondary)",
              lineHeight: 1.8,
            }}
          >
            {model.bio}
          </p>
        </div>
        <div>
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "var(--gold-mid)",
              display: "block",
              marginBottom: 16,
            }}
          >
            DETAILS
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px 32px",
            }}
          >
            {modelStats.map((stat) => (
              <div key={stat.label}>
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: "var(--text-dim)",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION (Responsive Column Count) */}
      <section
        className="models-portfolio-grid"
        style={{
          padding: "0 80px 120px",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "var(--gold-mid)",
            display: "block",
            marginBottom: 32,
          }}
        >
          PORTFOLIO
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
          }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={`${img.seed}-${i}`} // UNIQUE KEY RESOLUTION (Fixes duplicate key warnings)
              onClick={() => openLightbox(i)}
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "var(--bg-secondary)",
              }}
            >
              <img
                loading="lazy"
                src={`https://images.pexels.com/photos/${img.seed}/pexels-photo-${img.seed}.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop`}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(13,11,9,0.45)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
              >
                <Camera size={22} color="#FFFFFF" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section
        style={{
          padding: "var(--section-pad) var(--gutter)",
          backgroundColor: "var(--bg-dark)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-subsection)",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Book {model.name}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            fontWeight: 500,
            color: "rgba(250,248,244,0.65)",
            marginBottom: 40,
            maxWidth: 480,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          For booking inquiries, availability, and rates, please get in touch with our casting office.
        </p>
        <a
          href="mailto:batraahana.movies@planetm.agency"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#FFFFFF",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            border: "1px solid var(--gold-mid)",
            padding: "14px 36px",
            backgroundColor: "var(--gold-mid)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--gold-mid)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--gold-mid)";
            e.currentTarget.style.color = "#FFFFFF";
          }}
        >
          BOOK THIS MODEL
          <ChevronRight size={14} />
        </a>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(13,11,9,0.97)",
            zIndex: 100000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#FFFFFF",
              zIndex: 2,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gold-mid)";
              e.currentTarget.style.borderColor = "var(--gold-mid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <img
            loading="lazy"
            src={`https://images.pexels.com/photos/${galleryImages[lightboxIndex].seed}/pexels-photo-${galleryImages[lightboxIndex].seed}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600&fit=crop`}
            alt={galleryImages[lightboxIndex].alt}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#FFFFFF",
              zIndex: 2,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gold-mid)";
              e.currentTarget.style.borderColor = "var(--gold-mid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <ChevronRight size={20} />
          </button>
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#FFFFFF",
              zIndex: 2,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gold-mid)";
              e.currentTarget.style.borderColor = "var(--gold-mid)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
