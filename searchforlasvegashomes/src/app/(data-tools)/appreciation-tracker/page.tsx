import { Metadata } from 'next';
import AppreciationHero from '@/components/data-tools/AppreciationHero';
import HistoricalData from '@/components/data-tools/HistoricalData';
import AppreciationCharts from '@/components/data-tools/AppreciationCharts';
import FutureProjections from '@/components/data-tools/FutureProjections';

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Appreciation Tracker | Dr. Jan Duffy",
  description: "Track historical appreciation data and future projections for Las Vegas real estate with interactive charts and neighborhood analysis.",
  keywords: "Las Vegas appreciation, real estate appreciation, historical data, appreciation tracker, future projections, neighborhood analysis",
};

export default function AppreciationTrackerPage() {
  return (
    <main className="min-h-screen">
      <AppreciationHero />
      <HistoricalData />
      <AppreciationCharts />
      <FutureProjections />
    </main>
  );
}
