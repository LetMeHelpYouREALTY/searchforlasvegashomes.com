import { Metadata } from 'next';
import AppreciationHero from '@/components/data-tools/AppreciationHero';
import HistoricalData from '@/components/data-tools/HistoricalData';
import AppreciationCharts from '@/components/data-tools/AppreciationCharts';
import FutureProjections from '@/components/data-tools/FutureProjections';
import ToolPageShell from '@/components/seo/ToolPageShell';
import { TOOL_PAGES } from '@/config/toolPages';

const page = TOOL_PAGES['appreciation-tracker'];

export const metadata: Metadata = {
  alternates: { canonical: page.path },
  title: page.title,
  description: page.description,
};

export default function AppreciationTrackerPage() {
  return (
    <ToolPageShell {...page}>
      <AppreciationHero />
      <HistoricalData />
      <AppreciationCharts />
      <FutureProjections />
    </ToolPageShell>
  );
}
