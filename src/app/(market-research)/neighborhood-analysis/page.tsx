import { Metadata } from 'next';
import NeighborhoodHero from '@/components/market-research/NeighborhoodHero';
import NeighborhoodMap from '@/components/market-research/NeighborhoodMap';
import NeighborhoodGuides from '@/components/market-research/NeighborhoodGuides';
import MarketInsights from '@/components/market-research/MarketInsights';
import ToolPageShell from '@/components/seo/ToolPageShell';
import { TOOL_PAGES } from '@/config/toolPages';

const page = TOOL_PAGES['neighborhood-analysis'];

export const metadata: Metadata = {
  alternates: { canonical: page.path },
  title: page.title,
  description: page.description,
};

export default function NeighborhoodAnalysisPage() {
  return (
    <ToolPageShell {...page}>
      <NeighborhoodHero />
      <NeighborhoodMap />
      <NeighborhoodGuides />
      <MarketInsights />
    </ToolPageShell>
  );
}
