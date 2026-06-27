import type { Metadata, Viewport } from "next";
import { Cormorant, Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal"],
  variable: "--font-display",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ui",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const BASE_URL = "https://www.planetm.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Planet M — India's Premier Modeling Agency | Noida Film City",
    template: "%s | Planet M — India's Premier Modeling Agency",
  },
  description:
    "Planet M is India's premier modeling agency based in Noida Film City. Representing elite fashion, commercial, editorial, and runway talent. Apply now or hire the finest models in India.",
  keywords: [
    // Brand
    "Planet M modeling agency",
    "Planet M India",
    // Global
    "modeling agency India",
    "top modeling agency India",
    "best modeling agency India",
    "fashion models India",
    "talent management India",
    "talent agency India",
    "fashion talent agency India",
    "runway models India",
    "editorial models India",
    "commercial models India",
    // Local / Geo
    "modeling agency Noida",
    "Noida Film City modeling agency",
    "modeling agency Delhi NCR",
    "models agency UP",
    "talent agency Noida",
    "modeling agency Greater Noida",
    "Gautam Buddha Nagar modeling agency",
    "modeling agency Uttar Pradesh",
    // Aspiring models
    "how to become a model in India",
    "apply modeling agency India",
    "join modeling agency India",
    "modeling agency for beginners India",
    "modeling requirements India",
    "model audition India",
    "model portfolio India",
    "modeling casting India",
    // Clients / Hiring
    "hire models India",
    "hire fashion models India",
    "book models India",
    "fashion shoot models India",
    "model booking agency India",
    // Niche
    "luxury talent agency India",
    "South Asian models international",
    "Indian fashion models",
    "Bollywood models agency",
    "film city models Noida",
  ],
  authors: [{ name: "Planet M", url: BASE_URL }],
  creator: "Planet M",
  publisher: "Planet M",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: BASE_URL,
    siteName: "Planet M",
    title: "Planet M — India's Premier Modeling Agency",
    description:
      "Elite fashion, commercial, editorial & runway talent from India's most prestigious modeling agency. Based in Noida Film City.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Planet M — India's Premier Modeling Agency",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planet M — India's Premier Modeling Agency",
    description:
      "Elite fashion, commercial, editorial & runway talent. Noida Film City, India.",
    images: ["/images/og-image.png"],
    creator: "@planetm_india",
    site: "@planetm_india",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: BASE_URL,
  },
  category: "business",
  classification: "Modeling Agency, Talent Management",
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida Film City, Gautam Buddha Nagar, Uttar Pradesh, India",
    "geo.position": "28.5355;77.3910",
    "ICBM": "28.5355, 77.3910",
    "DC.title": "Planet M — India's Premier Modeling Agency",
    "DC.description": "Elite modeling talent from Noida Film City, India.",
    "DC.language": "en",
    "DC.coverage": "India",
    "og:locality": "Noida",
    "og:region": "Uttar Pradesh",
    "og:country-name": "India",
    "og:email": "Mehrarahul.films@gmail.com",
    "og:phone_number": "+91 98765 43210",
    "theme-color": "#C4A44C",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Planet M",
    "application-name": "Planet M",
    "msapplication-TileColor": "#0A0806",
    "msapplication-TileImage": "/images/logo.png",
    "format-detection": "telephone=yes",
  },
};

// Organization JSON-LD schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${BASE_URL}/#organization`,
  name: "Planet M",
  alternateName: ["Planet M Modeling Agency", "Planet M India"],
  description:
    "Planet M is India's premier modeling agency, representing elite fashion, commercial, editorial, and runway talent. Located in Noida Film City, Uttar Pradesh.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/logo.png`,
    width: 1040,
    height: 793,
  },
  image: `${BASE_URL}/images/og-image.png`,
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
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Uttar Pradesh" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Mumbai" },
  ],
  knowsAbout: [
    "Fashion Modeling",
    "Commercial Modeling",
    "Editorial Modeling",
    "Runway Modeling",
    "Digital Modeling",
    "Talent Management",
    "Model Casting",
  ],
  sameAs: [
    "https://www.instagram.com/planetm.india",
    "https://www.facebook.com/planetmindia",
  ],
  foundingDate: "2020",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 10,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0806" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${cormorant.variable} ${barlowCondensed.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Theme init script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('planetm-theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Geo meta tags */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Noida Film City, Gautam Buddha Nagar, Uttar Pradesh" />
        <meta name="geo.position" content="28.5355;77.3910" />
        <meta name="ICBM" content="28.5355, 77.3910" />
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Planet M" />
      </head>
      <body className="root-body">
        {children}
      </body>
    </html>
  );
}
