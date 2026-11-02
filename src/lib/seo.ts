import type { Metadata } from "next";
import { business } from "@/lib/site";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image = "/hero.png",
}: MetaInput): Metadata {
  const canonical = `${business.siteUrl}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: business.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${business.siteUrl}/#business`,
  name: business.name,
  alternateName: "JHI Services",
  description:
    "JHI SERVICES LLC provides residential heating and cooling services for homeowners in Orange County, New Jersey.",
  url: business.siteUrl,
  telephone: business.phoneRaw,
  image: `${business.siteUrl}/hero.png`,
  slogan: "Residential Heating & Cooling",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Orange County, New Jersey",
    containedInPlace: { "@type": "State", name: "New Jersey" },
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  knowsAbout: [
    "Residential heating",
    "Air conditioning",
    "Heat pumps",
    "HVAC installation",
    "HVAC repair",
    "HVAC maintenance",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Residential HVAC Services",
    itemListElement: [
      "Heating Services",
      "Air Conditioning Services",
      "Heat Pump Services",
      "HVAC Installation & Replacement",
      "HVAC Repairs & Troubleshooting",
      "Preventive Maintenance",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        areaServed: "Orange County, New Jersey",
      },
    })),
  },
};

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${business.siteUrl}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: {
      "@type": "HVACBusiness",
      name: business.name,
      telephone: business.phoneRaw,
      url: business.siteUrl,
    },
    areaServed: { "@type": "AdministrativeArea", name: "Orange County, New Jersey" },
    url: `${business.siteUrl}${path}`,
  };
}
