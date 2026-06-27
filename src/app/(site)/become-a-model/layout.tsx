import type { Metadata } from "next";

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Fashion & Commercial Model",
  description:
    "Planet M is seeking talented individuals aged 16–35 to join India's premier modeling agency. We represent fashion, commercial, editorial, digital, and runway models. Apply with your portfolio and measurements.",
  hiringOrganization: {
    "@type": "Organization",
    name: "Planet M",
    sameAs: "https://www.planetm.in",
    logo: "https://www.planetm.in/images/logo.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "J40/10, 3rd Floor, Near Zee Studio, Noida Film City",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
  },
  employmentType: "CONTRACTOR",
  datePosted: "2026-01-01",
  jobLocationType: "TELECOMMUTE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "India",
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: {
      "@type": "QuantitativeValue",
      minValue: 10000,
      maxValue: 500000,
      unitText: "MONTH",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the requirements to become a model at Planet M?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applicants should be 16–35 years old, have a minimum height of 5'4\" for women and 5'9\" for men, be confident in front of the camera, and have or be willing to build a professional portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "Does Planet M charge fees to join?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Planet M does not charge upfront registration fees. We earn through commission on model bookings. Any portfolio or training costs are discussed transparently during onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply to Planet M modeling agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out the application form on our Become a Model page with your details, measurements, and a recent photo. Our team will review your application and reach out within 7 business days.",
      },
    },
    {
      "@type": "Question",
      name: "What types of modeling does Planet M represent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Planet M represents models in fashion, commercial, editorial, digital, and runway categories — covering both print and video campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Planet M located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Planet M is based in Noida Film City, J40/10, 3rd Floor, Near Zee Studio, Gautam Buddha Nagar, Uttar Pradesh — 201301.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Become a Model | Apply to India's Top Agency",
  description:
    "Want to become a model in India? Apply to Planet M — India's premier modeling agency in Noida Film City. We represent fashion, commercial, editorial, and runway talent. Open applications.",
  openGraph: {
    title: "Become a Model | Apply to Planet M — India's Premier Agency",
    description:
      "Apply to Planet M and launch your modeling career. India's most prestigious modeling agency in Noida Film City is now accepting applications.",
    url: "https://www.planetm.in/become-a-model",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.planetm.in/become-a-model",
  },
  keywords: [
    "become a model India", "how to become a model India", "apply modeling agency India",
    "modeling agency applications India", "join Planet M", "model audition India",
    "modeling requirements India", "modeling agency for beginners",
    "model casting Noida", "start modeling career India",
  ],
};

export default function BecomeAModelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
