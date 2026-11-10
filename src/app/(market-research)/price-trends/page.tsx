import { Metadata } from 'next';
import PriceTrendsHero from '@/components/market-research/PriceTrendsHero';
import PriceCharts from '@/components/market-research/PriceCharts';
import MarketMetrics from '@/components/market-research/MarketMetrics';
import TrendAnalysis from '@/components/market-research/TrendAnalysis';
import ToolPageShell from '@/components/seo/ToolPageShell';
import { TOOL_PAGES } from '@/config/toolPages';

const page = TOOL_PAGES['price-trends'];

export const metadata: Metadata = {
  alternates: { canonical: page.path },
  title: page.title,
  description: page.description,
};

export default function PriceTrendsPage() {
  return (
    <ToolPageShell {...page}>
      <PriceTrendsHero />
      <PriceCharts />
      <MarketMetrics />
      <TrendAnalysis />
    </ToolPageShell>
  );
}
