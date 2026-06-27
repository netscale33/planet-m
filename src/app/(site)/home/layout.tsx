import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Planet M — India's premier modeling agency based in Noida Film City. Discover elite fashion, editorial, commercial, and runway talent from across India.",
  openGraph: {
    title: "Planet M — India's Premier Modeling Agency",
    description:
      "Discover India's finest fashion, editorial, commercial & runway models. Based in Noida Film City, UP.",
    url: "https://www.planetm.in/home",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.planetm.in/home",
  },
  keywords: [
    "modeling agency India", "Planet M", "fashion models India",
    "Noida Film City models", "talent agency India", "top models India",
  ],
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
