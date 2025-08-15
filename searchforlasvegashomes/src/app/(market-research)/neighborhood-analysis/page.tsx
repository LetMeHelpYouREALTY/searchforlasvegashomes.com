import { Metadata } from 'next';
import NeighborhoodHero from '@/components/market-research/NeighborhoodHero';
import NeighborhoodMap from '@/components/market-research/NeighborhoodMap';
import NeighborhoodGuides from '@/components/market-research/NeighborhoodGuides';
import MarketInsights from '@/components/market-research/MarketInsights';

export const metadata: Metadata = {
  title: "Las Vegas Neighborhood Analysis & Market Insights | Dr. Jan Duffy",
  description: "Comprehensive neighborhood analysis with demographic data, school ratings, appreciation history, and market insights for Las Vegas communities.",
  keywords: "Las Vegas neighborhoods, neighborhood analysis, market insights, demographic data, school ratings, appreciation history",
};

export default function NeighborhoodAnalysisPage() {
  return (
    <main className="min-h-screen">
      <NeighborhoodHero />
      <NeighborhoodMap />
      <NeighborhoodGuides />
      <MarketInsights />
    </main>
  );
}
