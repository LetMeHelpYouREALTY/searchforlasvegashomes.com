import { Metadata } from 'next';
import PriceTrendsHero from '@/components/market-research/PriceTrendsHero';
import PriceCharts from '@/components/market-research/PriceCharts';
import MarketMetrics from '@/components/market-research/MarketMetrics';
import TrendAnalysis from '@/components/market-research/TrendAnalysis';

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Price Trends & Market Data | Dr. Jan Duffy",
  description: "Real-time pricing data, market trends, and price analysis for Las Vegas real estate with interactive charts and market metrics.",
  keywords: "Las Vegas price trends, real estate pricing, market data, price analysis, market trends, interactive charts",
};

export default function PriceTrendsPage() {
  return (
    <main className="min-h-screen">
      <PriceTrendsHero />
      <PriceCharts />
      <MarketMetrics />
      <TrendAnalysis />
    </main>
  );
}
