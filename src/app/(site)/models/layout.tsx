import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Models | Fashion, Editorial & Commercial Talent",
  description:
    "Browse Planet M's roster of elite fashion, commercial, editorial, digital, and runway models from across India. India's most prestigious modeling agency.",
  openGraph: {
    title: "Our Models | Planet M — India's Premier Modeling Agency",
    description:
      "Browse elite fashion, commercial, editorial & runway models represented by Planet M. India's top talent agency.",
    url: "https://www.planetm.in/models",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.planetm.in/models",
  },
  keywords: [
    "fashion models India", "top models India", "editorial models",
    "commercial models India", "runway models India", "model portfolio India",
    "hire models India", "book models India", "Indian models agency",
  ],
};

export default function ModelsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
