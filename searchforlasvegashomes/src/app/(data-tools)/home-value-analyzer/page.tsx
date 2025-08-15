import { Metadata } from 'next';
import ValueAnalyzerHero from '@/components/data-tools/ValueAnalyzerHero';
import AIValuationTool from '@/components/data-tools/AIValuationTool';
import ValuationFactors from '@/components/data-tools/ValuationFactors';
import AccuracyMetrics from '@/components/data-tools/AccuracyMetrics';

export const metadata: Metadata = {
  title: "AI-Powered Home Value Analyzer | Dr. Jan Duffy",
  description: "Get accurate home valuations using Dr. Jan's AI-powered analysis tool that combines 15+ data sources for precise property pricing.",
  keywords: "home value analyzer, AI valuation, property pricing, home appraisal, accurate valuation, data-driven pricing",
};

export default function HomeValueAnalyzerPage() {
  return (
    <main className="min-h-screen">
      <ValueAnalyzerHero />
      <AIValuationTool />
      <ValuationFactors />
      <AccuracyMetrics />
    </main>
  );
}
