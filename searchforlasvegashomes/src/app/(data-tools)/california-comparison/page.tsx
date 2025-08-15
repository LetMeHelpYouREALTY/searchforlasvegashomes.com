import { Metadata } from 'next';
import ComparisonHero from '@/components/data-tools/ComparisonHero';
import CostAnalysis from '@/components/data-tools/CostAnalysis';
import MarketComparison from '@/components/data-tools/MarketComparison';
import RelocationGuide from '@/components/data-tools/RelocationGuide';

export const metadata: Metadata = {
  title: "California vs Nevada Real Estate Cost Analysis | Dr. Jan Duffy",
  description: "Comprehensive comparison of California vs Nevada real estate costs, market conditions, and investment opportunities for relocating buyers.",
  keywords: "California vs Nevada, real estate comparison, cost analysis, relocation guide, investment opportunities, market comparison",
};

export default function CaliforniaComparisonPage() {
  return (
    <main className="min-h-screen">
      <ComparisonHero />
      <CostAnalysis />
      <MarketComparison />
      <RelocationGuide />
    </main>
  );
}
