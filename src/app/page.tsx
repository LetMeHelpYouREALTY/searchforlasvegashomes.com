import HeroSection from '@/components/HeroSection';
import FeaturedListing from '@/components/sections/FeaturedListing';
import CredentialsSection from '@/components/CredentialsSection';
import ResearchSpecializations from '@/components/ResearchSpecializations';
import MarketAnalysisTools from '@/components/MarketAnalysisTools';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <FeaturedListing
        phone={"(702) 500-1955"}
        phoneHref={"tel:+17025001955"}
        siteHost="searchforlasvegashomes.com"
      />
      <CredentialsSection />
      <ResearchSpecializations />
      <MarketAnalysisTools />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
