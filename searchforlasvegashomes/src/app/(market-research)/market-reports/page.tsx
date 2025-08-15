import { Metadata } from 'next';
import MarketReportsHero from '@/components/market-research/MarketReportsHero';
import LatestReport from '@/components/market-research/LatestReport';
import ReportArchive from '@/components/market-research/ReportArchive';
import ReportSignup from '@/components/market-research/ReportSignup';

export const metadata: Metadata = {
  title: "Monthly Las Vegas Market Analysis Reports | Dr. Jan Duffy",
  description: "Access Dr. Jan's monthly market analysis reports with comprehensive data on Las Vegas real estate trends, pricing, and investment opportunities.",
  keywords: "Las Vegas market reports, real estate analysis, monthly market data, investment insights, market trends",
};

export default function MarketReportsPage() {
  return (
    <main className="min-h-screen">
      <MarketReportsHero />
      <LatestReport />
      <ReportArchive />
      <ReportSignup />
    </main>
  );
}
