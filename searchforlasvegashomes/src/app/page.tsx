import HeroSection from '@/components/HeroSection';
import CredentialsSection from '@/components/CredentialsSection';
import ResearchSpecializations from '@/components/ResearchSpecializations';
import MarketAnalysisTools from '@/components/MarketAnalysisTools';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CredentialsSection />
      <ResearchSpecializations />
      <MarketAnalysisTools />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
