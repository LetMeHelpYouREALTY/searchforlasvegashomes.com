import { Metadata } from 'next';
import SearchHero from '@/components/search/SearchHero';
import RealScoutIntegration from '@/components/search/RealScoutIntegration';
import DataOverlays from '@/components/search/DataOverlays';
import SearchFilters from '@/components/search/SearchFilters';

export const metadata: Metadata = {
  title: "Search Las Vegas Homes with Data-Driven Insights | SearchForLasVegasHomes.com",
  description: "Find your perfect Las Vegas home using RealScout technology enhanced with Dr. Jan's proprietary market data and neighborhood analysis.",
  keywords: "Las Vegas homes for sale, real estate search, RealScout, market data, neighborhood analysis",
};

export default function SearchPage() {
  return (
    <main className="min-h-screen">
      <SearchHero />
      <SearchFilters />
      <RealScoutIntegration />
      <DataOverlays />
    </main>
  );
}
