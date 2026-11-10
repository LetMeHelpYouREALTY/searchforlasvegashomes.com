import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  FEATURED_LISTING,
  FEATURED_LISTING_PATH,
  FeaturedListingPageBody,
  featuredListingJsonLd,
} from "@/components/sections/FeaturedListing";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageSchemas from "@/components/seo/PageSchemas";
import ContactSection from "@/components/ContactSection";
import { PHONE_DISPLAY, PHONE_HREF, SITE_HOST } from "@/config/site";

const l = FEATURED_LISTING;
const title = `${l.address}, ${l.city} ${l.zip} | ${l.price} | Pool, No HOA, Owned Solar`;
const description = `${l.beds} bed, ${l.baths} bath, ${l.sqft} sq ft two-story home in ${l.city} ${l.zip} with a private pool, no HOA dues, and owned solar. Listed at ${l.price}. MLS #${l.mlsNumber}.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  // Prefer the single canonical listing URL so copies do not compete in search.
  alternates: { canonical: l.canonicalUrl },
  openGraph: {
    title,
    description,
    url: l.canonicalUrl,
    type: "website",
    ...(l.image
      ? {
          images: [
            {
              url: new URL(l.image, l.canonicalUrl).href,
              width: 1600,
              height: 1200,
              alt: l.imageAlt,
            },
          ],
        }
      : {}),
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Search", path: "/search" },
  { name: l.address, path: FEATURED_LISTING_PATH },
];

const faqs = [
  {
    q: `How much is ${l.address}?`,
    a: `${l.address}, ${l.city}, ${l.state} ${l.zip} is listed at ${l.price} (MLS #${l.mlsNumber}).`,
  },
  {
    q: `Does ${l.address} have HOA dues?`,
    a: "No. The home is not in a homeowners association, so there are no monthly HOA dues.",
  },
  {
    q: `How do I tour ${l.address}?`,
    a: `Call Dr. Jan Duffy at ${PHONE_DISPLAY} to schedule a private tour.`,
  },
];

export default function FeaturedListingPage() {
  if (!l.active) notFound();
  const jsonLd = JSON.stringify(featuredListingJsonLd(l.canonicalUrl)).replace(
    /</g,
    "\\u003c",
  );

  return (
    <main className="min-h-screen">
      <PageSchemas
        path={FEATURED_LISTING_PATH}
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        speakableSelectors={["h1", "#faq"]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <FeaturedListingPageBody
        phone={PHONE_DISPLAY}
        phoneHref={PHONE_HREF}
        siteHost={SITE_HOST}
      />
      <ContactSection />
    </main>
  );
}
