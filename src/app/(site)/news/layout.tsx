import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Indian Fashion Industry",
  description:
    "Stay updated with the latest news, campaigns, and industry updates from Planet M — India's premier modeling agency. Covering Indian fashion, editorial, and runway events.",
  openGraph: {
    title: "News & Updates | Planet M Modeling Agency India",
    description:
      "Latest news, campaigns, and fashion industry updates from Planet M — India's top modeling agency.",
    url: "https://www.planetm.in/news",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.planetm.in/news",
  },
  keywords: [
    "modeling agency news India", "Indian fashion news", "model campaign news",
    "fashion industry India updates", "Planet M news", "Noida Film City events",
  ],
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
