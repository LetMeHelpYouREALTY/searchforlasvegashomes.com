import { Metadata } from 'next';
import ForecastHero from '@/components/market-research/ForecastHero';
import Q3Forecast from '@/components/market-research/Q3Forecast';
import Q4Forecast from '@/components/market-research/Q4Forecast';
import ForecastMethodology from '@/components/market-research/ForecastMethodology';

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Market Forecast Q3/Q4 2025 | Dr. Jan Duffy",
  description: "Expert market forecasts for Las Vegas real estate with Q3 and Q4 2025 predictions based on comprehensive data analysis and market trends.",
  keywords: "Las Vegas market forecast, 2025 predictions, real estate forecast, market predictions, Q3 Q4 forecast",
};

export default function MarketForecastPage() {
  return (
    <main className="min-h-screen">
      <ForecastHero />
      <Q3Forecast />
      <Q4Forecast />
      <ForecastMethodology />
    </main>
  );
}
