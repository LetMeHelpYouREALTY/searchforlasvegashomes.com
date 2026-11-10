import { Metadata } from 'next';
import ComparisonHero from '@/components/data-tools/ComparisonHero';
import CostAnalysis from '@/components/data-tools/CostAnalysis';
import MarketComparison from '@/components/data-tools/MarketComparison';
import RelocationGuide from '@/components/data-tools/RelocationGuide';
import ToolPageShell from '@/components/seo/ToolPageShell';
import { TOOL_PAGES } from '@/config/toolPages';

const page = TOOL_PAGES['california-comparison'];

export const metadata: Metadata = {
  alternates: { canonical: page.path },
  title: page.title,
  description: page.description,
};

export default function CaliforniaComparisonPage() {
  return (
    <ToolPageShell {...page}>
      <ComparisonHero />
      <CostAnalysis />
      <MarketComparison />
      <RelocationGuide />
    </ToolPageShell>
  );
}
