import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import FeaturedListing from '@/components/sections/FeaturedListing';
import NeighborhoodGuides from '@/components/sections/NeighborhoodGuides';
import BuyerPath from '@/components/sections/BuyerPath';
import LuxuryListings from '@/components/sections/LuxuryListings';
import BuyerFaq from '@/components/sections/BuyerFaq';
import ContactSection from '@/components/ContactSection';
import PageSchemas from '@/components/seo/PageSchemas';
import JsonLd from '@/components/seo/JsonLd';
import {
  AGENT_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_HOST,
  SITE_NAME,
  SITE_URL,
} from '@/config/site';
import { buildGraph, buildItemListSchema } from '@/lib/seo/schemas';

const homeTitle = `${SITE_NAME} | ${AGENT_NAME} · Luxury Las Vegas Home Search`;
const homeDescription = `Search Las Vegas homes for sale with ${AGENT_NAME}, REALTOR®. Live MLS search across Summerlin, Henderson, and the Las Vegas Valley. Call ${PHONE_DISPLAY}.`;

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: '/' },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
    type: 'website',
  },
};

const homeFaqs = [
  {
    q: 'How do I search Las Vegas homes on this site?',
    a: 'Use the search bar on the homepage or open the Search page for advanced filters. Results pull live MLS inventory through RealScout for Dr. Jan Duffy’s account.',
  },
  {
    q: 'What areas does Dr. Jan Duffy cover?',
    a: 'Las Vegas, Summerlin, Henderson, Spring Valley, Northwest Las Vegas, Green Valley, The Lakes, Southern Highlands, and surrounding Clark County communities.',
  },
  {
    q: 'How do I schedule a private tour?',
    a: `Call ${PHONE_DISPLAY} or use the contact section. Share addresses you want to see and preferred times; tours are arranged around listing access windows.`,
  },
  {
    q: 'Where is the office located?',
    a: 'Berkshire Hathaway HomeServices Nevada Properties at 1980 Festival Plaza Drive, Suite 300, Las Vegas, NV 89135 (Downtown Summerlin). Hours are Monday–Friday 9:00 AM–6:00 PM, weekends by appointment.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageSchemas
        path="/"
        title={homeTitle}
        description={homeDescription}
        breadcrumbs={[{ name: 'Home', path: '/' }]}
        faqs={homeFaqs}
        service={{
          name: 'Las Vegas Home Search & Buyer Representation',
          description: homeDescription,
        }}
        howTo={{
          name: 'How to buy a Las Vegas home with Dr. Jan Duffy',
          description:
            'Define your brief, search live inventory, and tour with pricing context.',
          steps: [
            {
              name: 'Define the brief',
              text: 'Price band, must-haves, and the zip codes that fit your day-to-day.',
            },
            {
              name: 'Search live inventory',
              text: 'Use RealScout filters on this site, then save searches for new matches.',
            },
            {
              name: 'Tour with context',
              text: 'Review comps, taxes, HOA details, and negotiation timing before you offer.',
            },
          ],
        }}
        speakableSelectors={['h1', '#faq', '#neighborhoods']}
      />
      <JsonLd
        data={buildGraph([
          buildItemListSchema({
            name: 'Las Vegas neighborhoods for homebuyers',
            items: [
              {
                name: 'Summerlin',
                url: `${SITE_URL}/search`,
                description: 'Master-planned living west of the Strip',
              },
              {
                name: 'Henderson',
                url: `${SITE_URL}/search`,
                description: 'Anthem and Green Valley pockets',
              },
              {
                name: 'Southern Highlands',
                url: `${SITE_URL}/search`,
                description: 'Guard-gated estates in the southern valley',
              },
              {
                name: 'The Lakes',
                url: `${SITE_URL}/search`,
                description: 'Waterfront homes near Sahara and Durango',
              },
            ],
          }),
        ])}
      />
      <HeroSection />
      <FeaturedListing
        phone={PHONE_DISPLAY}
        phoneHref={PHONE_HREF}
        siteHost={SITE_HOST}
      />
      <NeighborhoodGuides />
      <LuxuryListings />
      <BuyerPath />
      <BuyerFaq faqs={homeFaqs} includeSchema={false} />
      <ContactSection />
    </main>
  );
}
