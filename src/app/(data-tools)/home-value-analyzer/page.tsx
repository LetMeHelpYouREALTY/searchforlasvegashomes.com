import { Metadata } from 'next';
import ValueAnalyzerHero from '@/components/data-tools/ValueAnalyzerHero';
import AIValuationTool from '@/components/data-tools/AIValuationTool';
import ValuationFactors from '@/components/data-tools/ValuationFactors';
import AccuracyMetrics from '@/components/data-tools/AccuracyMetrics';
import ToolPageShell from '@/components/seo/ToolPageShell';
import { TOOL_PAGES } from '@/config/toolPages';

const page = TOOL_PAGES['home-value-analyzer'];

export const metadata: Metadata = {
  alternates: { canonical: page.path },
  title: page.title,
  description: page.description,
};

export default function HomeValueAnalyzerPage() {
  return (
    <ToolPageShell {...page}>
      <ValueAnalyzerHero />
      <AIValuationTool />
      <ValuationFactors />
      <AccuracyMetrics />
    </ToolPageShell>
  );
}
