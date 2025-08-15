import { Metadata } from 'next';
import CalculatorHero from '@/components/market-research/CalculatorHero';
import ROICalculator from '@/components/market-research/ROICalculator';
import AppreciationTracker from '@/components/market-research/AppreciationTracker';
import InvestmentInsights from '@/components/market-research/InvestmentInsights';

export const metadata: Metadata = {
  title: "Real Estate Investment Calculator & ROI Analysis | Dr. Jan Duffy",
  description: "Advanced investment calculator with ROI projections, appreciation modeling, and cash flow analysis for Las Vegas real estate investments.",
  keywords: "real estate investment calculator, ROI analysis, appreciation modeling, cash flow analysis, Las Vegas investments",
};

export default function InvestmentCalculatorPage() {
  return (
    <main className="min-h-screen">
      <CalculatorHero />
      <ROICalculator />
      <AppreciationTracker />
      <InvestmentInsights />
    </main>
  );
}
