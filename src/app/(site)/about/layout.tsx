import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Planet M Modeling Agency — Noida Film City",
  description:
    "Learn about Planet M — India's premier modeling agency based in Noida Film City. Our story, our values, and our mission to elevate Indian fashion talent on the global stage.",
  openGraph: {
    title: "About Planet M — India's Premier Modeling Agency",
    description:
      "Discover the story, values, and mission of Planet M — India's most prestigious modeling agency in Noida Film City.",
    url: "https://www.planetm.in/about",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.planetm.in/about",
  },
  keywords: [
    "Planet M about", "modeling agency story India", "Noida Film City agency",
    "fashion talent management India", "talent agency about", "Planet M Noida",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
