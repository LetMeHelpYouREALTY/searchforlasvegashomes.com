import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import RealtorSkills from '@/components/about/RealtorSkills';
import HowSheWorks from '@/components/about/HowSheWorks';
import PracticeCredentials from '@/components/about/PracticeCredentials';
import ContactSection from '@/components/ContactSection';
import { AGENT_NAME, PHONE_DISPLAY, SITE_NAME } from '@/config/site';

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: `About ${AGENT_NAME} — Las Vegas REALTOR® Skills`,
  description: `Meet ${AGENT_NAME}, Las Vegas REALTOR®. Buyer representation, pricing, negotiation, and closing skills for home search. Call ${PHONE_DISPLAY}.`,
  keywords: [
    'Dr. Jan Duffy REALTOR',
    'Las Vegas real estate agent',
    'buyer representation Las Vegas',
    'home negotiation Las Vegas',
    SITE_NAME,
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <RealtorSkills />
      <HowSheWorks />
      <PracticeCredentials />
      <ContactSection />
    </main>
  );
}
