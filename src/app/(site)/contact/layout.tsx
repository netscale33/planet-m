import type { Metadata } from "next";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.planetm.in/#localbusiness",
  name: "Planet M",
  description: "India's Premier Modeling Agency based in Noida Film City.",
  url: "https://www.planetm.in",
  telephone: "+91-98765-43210",
  email: "Mehrarahul.films@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "J40/10, 3rd Floor, Near Zee Studio, Noida Film City",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5355,
    longitude: 77.3910,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  priceRange: "₹₹₹",
};

export const metadata: Metadata = {
  title: "Contact | Book Models or Apply — Noida Film City",
  description:
    "Contact Planet M modeling agency in Noida Film City. Book models for fashion shoots, campaigns, or runway events. Inquire about model representation or casting.",
  openGraph: {
    title: "Contact Planet M | Modeling Agency — Noida Film City",
    description:
      "Reach out to Planet M for model bookings, casting inquiries, or partnership opportunities. Based in Noida Film City, UP, India.",
    url: "https://www.planetm.in/contact",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.planetm.in/contact",
  },
  keywords: [
    "contact modeling agency India", "book models India", "hire models Noida",
    "model casting India", "modeling agency contact", "Planet M contact",
    "Noida Film City agency contact", "fashion model booking India",
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
