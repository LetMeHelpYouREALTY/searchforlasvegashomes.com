import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import ResearchMethodology from '@/components/about/ResearchMethodology';
import AcademicBackground from '@/components/about/AcademicBackground';
import ProfessionalJourney from '@/components/about/ProfessionalJourney';

export const metadata: Metadata = {
  title: "Meet Dr. Jan: Market Research Expert | SearchForLasVegasHomes.com",
  description: "Discover how Dr. Jan Duffy combines academic research with real estate expertise to deliver data-driven market insights in Las Vegas.",
  keywords: "Dr. Jan Duffy, real estate market research, Las Vegas real estate expert, data-driven analysis, academic background",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <ResearchMethodology />
      <AcademicBackground />
      <ProfessionalJourney />
    </main>
  );
}
