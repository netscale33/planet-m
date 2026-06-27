import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Modeling Tips & Industry Insights",
  description:
    "Explore Planet M's blog for expert modeling tips, industry insights, career advice for aspiring models, and behind-the-scenes content from India's top modeling agency.",
  openGraph: {
    title: "Blog | Modeling Tips & Insights — Planet M India",
    description:
      "Expert modeling tips, career advice, and industry insights from Planet M — India's premier modeling agency.",
    url: "https://www.planetm.in/blog",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.planetm.in/blog",
  },
  keywords: [
    "modeling tips India", "how to become a model", "modeling career India",
    "model portfolio tips", "fashion industry insights India", "Planet M blog",
    "modeling agency blog", "aspiring model tips India",
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
