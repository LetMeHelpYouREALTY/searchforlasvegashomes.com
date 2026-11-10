import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  AGENT_LICENSE,
  AGENT_NAME,
  BROKERAGE,
  EMAIL,
  OPENING_HOURS_SPEC,
  PHONE_E164,
  POSTAL_CODE,
  SERVICE_AREAS,
  SITE_NAME,
  SITE_NAME_DOMAIN,
  SITE_URL,
  STREET_ADDRESS,
} from "@/config/site";
import type { BreadcrumbItem, FaqItem } from "@/lib/seo/jsonLd";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function buildLocalBusinessSchema() {
  return {
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: [SITE_NAME_DOMAIN, AGENT_NAME],
    description: `${AGENT_NAME}, REALTOR® with ${BROKERAGE}, helps buyers and sellers search Las Vegas homes across Summerlin, Henderson, and the Las Vegas Valley.`,
    url: SITE_URL,
    telephone: PHONE_E164,
    email: EMAIL,
    image: `${SITE_URL}/api/og-image`,
    logo: `${SITE_URL}/api/og-image`,
    priceRange: "$$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Check, Financing",
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET_ADDRESS,
      addressLocality: ADDRESS_LOCALITY,
      addressRegion: ADDRESS_REGION,
      postalCode: POSTAL_CODE,
      addressCountry: ADDRESS_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.1507,
      longitude: -115.3332,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${STREET_ADDRESS}, ${ADDRESS_LOCALITY}, ${ADDRESS_REGION} ${POSTAL_CODE}`)}`,
    openingHoursSpecification: OPENING_HOURS_SPEC.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: SERVICE_AREAS.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    })),
    employee: { "@id": `${SITE_URL}/#dr-jan-duffy` },
    founder: { "@id": `${SITE_URL}/#dr-jan-duffy` },
    parentOrganization: {
      "@type": "RealEstateAgent",
      name: BROKERAGE,
      address: {
        "@type": "PostalAddress",
        streetAddress: STREET_ADDRESS,
        addressLocality: ADDRESS_LOCALITY,
        addressRegion: ADDRESS_REGION,
        postalCode: POSTAL_CODE,
        addressCountry: ADDRESS_COUNTRY,
      },
    },
    sameAs: [
      "https://drjanduffy.realscout.com/homesearch",
      "https://www.berkshirehathawayhs.com",
    ],
  };
}

export function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#dr-jan-duffy`,
    name: AGENT_NAME,
    honorificPrefix: "Dr.",
    jobTitle: "REALTOR®",
    description: `Las Vegas REALTOR® specializing in buyer representation, pricing strategy, negotiation, and home search across Clark County.`,
    url: `${SITE_URL}/about`,
    telephone: PHONE_E164,
    email: EMAIL,
    image: `${SITE_URL}/api/og-image`,
    worksFor: {
      "@type": "RealEstateAgent",
      name: BROKERAGE,
    },
    affiliation: { "@id": `${SITE_URL}/#business` },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      identifier: AGENT_LICENSE,
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
    },
    knowsAbout: [
      "Las Vegas real estate",
      "Buyer representation",
      "Home negotiation",
      "Comparative market analysis",
      "Summerlin homes",
      "Henderson real estate",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET_ADDRESS,
      addressLocality: ADDRESS_LOCALITY,
      addressRegion: ADDRESS_REGION,
      postalCode: POSTAL_CODE,
      addressCountry: ADDRESS_COUNTRY,
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME_DOMAIN,
    alternateName: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE_URL}/#business` },
    about: { "@id": `${SITE_URL}/#dr-jan-duffy` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildWebPageSchema({
  path,
  title,
  description,
  speakableSelectors = ["h1", "#faq"],
}: {
  path: string;
  title: string;
  description: string;
  speakableSelectors?: string[];
}) {
  const url = absoluteUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    primaryEntityOfPage: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items[items.length - 1]?.path ?? "/")}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function buildHowToSchema({
  name,
  description,
  steps,
  url,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  url: string;
}) {
  return {
    "@type": "HowTo",
    name,
    description,
    url,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
    })),
    serviceType: "Real Estate Services",
  };
}

export function buildItemListSchema({
  name,
  items,
}: {
  name: string;
  items: { name: string; url: string; description?: string }[];
}) {
  return {
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}

export function buildGraph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
