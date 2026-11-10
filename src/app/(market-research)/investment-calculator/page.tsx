import { Metadata } from 'next';
import CalculatorHero from '@/components/market-research/CalculatorHero';
import ROICalculator from '@/components/market-research/ROICalculator';
import AppreciationTracker from '@/components/market-research/AppreciationTracker';
import InvestmentInsights from '@/components/market-research/InvestmentInsights';
import ToolPageShell from '@/components/seo/ToolPageShell';
import { TOOL_PAGES } from '@/config/toolPages';

const page = TOOL_PAGES['investment-calculator'];

export const metadata: Metadata = {
  alternates: { canonical: page.path },
  title: page.title,
  description: page.description,
};

export default function InvestmentCalculatorPage() {
  return (
    <ToolPageShell {...page}>
      <CalculatorHero />
      <ROICalculator />
      <AppreciationTracker />
      <InvestmentInsights />
    </ToolPageShell>
  );
}
