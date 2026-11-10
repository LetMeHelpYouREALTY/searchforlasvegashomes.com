import { Metadata } from 'next';
import SearchHero from '@/components/search/SearchHero';
import SearchFilters from '@/components/search/SearchFilters';
import RealScoutIntegration from '@/components/search/RealScoutIntegration';
import ContactSection from '@/components/ContactSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import PageSchemas from '@/components/seo/PageSchemas';
import SectionFaq from '@/components/seo/SectionFaq';
import { AGENT_NAME, PHONE_DISPLAY } from '@/config/site';

const title = 'Search Las Vegas Homes for Sale';
const description = `Live MLS home search for Las Vegas, Summerlin, and Henderson with ${AGENT_NAME}. Call ${PHONE_DISPLAY} to tour.`;

export const metadata: Metadata = {
  alternates: { canonical: '/search' },
  title,
  description,
};

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Search Homes', path: '/search' },
];

const faqs = [
  {
    q: 'Is the home search connected to the Las Vegas MLS?',
    a: 'Yes. Search widgets use RealScout to display live GLVAR/MLS inventory for Dr. Jan Duffy’s account.',
  },
  {
    q: 'Can I save a search for new Las Vegas listings?',
    a: 'Yes. After you refine filters in RealScout, save the search so matching homes reach you as they hit the market.',
  },
  {
    q: 'Who do I call to tour a home I find here?',
    a: `Call ${AGENT_NAME} at ${PHONE_DISPLAY} with the address and preferred tour times.`,
  },
];

export default function SearchPage() {
  return (
    <main className="min-h-screen">
      <PageSchemas
        path="/search"
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service={{
          name: 'Live Las Vegas MLS Home Search',
          description,
        }}
        speakableSelectors={['h1', '#faq']}
      />
      <Breadcrumbs items={breadcrumbs} />
      <SearchHero />
      <SearchFilters />
      <RealScoutIntegration />
      <SectionFaq title="Home search questions" faqs={faqs} />
      <ContactSection />
    </main>
  );
}
