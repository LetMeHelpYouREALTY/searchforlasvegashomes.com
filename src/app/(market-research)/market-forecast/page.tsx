import { Metadata } from 'next';
import ForecastHero from '@/components/market-research/ForecastHero';
import Q3Forecast from '@/components/market-research/Q3Forecast';
import Q4Forecast from '@/components/market-research/Q4Forecast';
import ForecastMethodology from '@/components/market-research/ForecastMethodology';
import ToolPageShell from '@/components/seo/ToolPageShell';
import { TOOL_PAGES } from '@/config/toolPages';

const page = TOOL_PAGES['market-forecast'];

export const metadata: Metadata = {
  alternates: { canonical: page.path },
  title: page.title,
  description: page.description,
};

export default function MarketForecastPage() {
  return (
    <ToolPageShell {...page}>
      <ForecastHero />
      <Q3Forecast />
      <Q4Forecast />
      <ForecastMethodology />
    </ToolPageShell>
  );
}
