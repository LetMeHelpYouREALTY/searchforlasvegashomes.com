import { Metadata } from 'next';
import MarketReportsHero from '@/components/market-research/MarketReportsHero';
import LatestReport from '@/components/market-research/LatestReport';
import ReportArchive from '@/components/market-research/ReportArchive';
import ReportSignup from '@/components/market-research/ReportSignup';
import ToolPageShell from '@/components/seo/ToolPageShell';
import { TOOL_PAGES } from '@/config/toolPages';

const page = TOOL_PAGES['market-reports'];

export const metadata: Metadata = {
  alternates: { canonical: page.path },
  title: page.title,
  description: page.description,
};

export default function MarketReportsPage() {
  return (
    <ToolPageShell {...page}>
      <MarketReportsHero />
      <LatestReport />
      <ReportArchive />
      <ReportSignup />
    </ToolPageShell>
  );
}
