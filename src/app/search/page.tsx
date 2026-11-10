import { Metadata } from 'next';
import SearchHero from '@/components/search/SearchHero';
import SearchFilters from '@/components/search/SearchFilters';
import RealScoutIntegration from '@/components/search/RealScoutIntegration';
import ContactSection from '@/components/ContactSection';
import { AGENT_NAME, PHONE_DISPLAY } from '@/config/site';

export const metadata: Metadata = {
  alternates: { canonical: '/search' },
  title: 'Search Las Vegas Homes for Sale',
  description: `Live MLS home search for Las Vegas, Summerlin, and Henderson with ${AGENT_NAME}. Call ${PHONE_DISPLAY} to tour.`,
};

export default function SearchPage() {
  return (
    <main className="min-h-screen">
      <SearchHero />
      <SearchFilters />
      <RealScoutIntegration />
      <ContactSection />
    </main>
  );
}
