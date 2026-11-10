import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import RealtorSkills from '@/components/about/RealtorSkills';
import HowSheWorks from '@/components/about/HowSheWorks';
import PracticeCredentials from '@/components/about/PracticeCredentials';
import ContactSection from '@/components/ContactSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import PageSchemas from '@/components/seo/PageSchemas';
import SectionFaq from '@/components/seo/SectionFaq';
import { AGENT_NAME, PHONE_DISPLAY, SITE_NAME } from '@/config/site';

const title = `About ${AGENT_NAME} — Las Vegas REALTOR® Skills`;
const description = `Meet ${AGENT_NAME}, Las Vegas REALTOR®. Buyer representation, pricing, negotiation, and closing skills for home search. Call ${PHONE_DISPLAY}.`;

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title,
  description,
  keywords: [
    'Dr. Jan Duffy REALTOR',
    'Las Vegas real estate agent',
    'buyer representation Las Vegas',
    'home negotiation Las Vegas',
    SITE_NAME,
  ],
};

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

const faqs = [
  {
    q: 'What realtor skills does Dr. Jan Duffy bring to a purchase?',
    a: 'Buyer representation, pricing with comps, negotiation, neighborhood fluency, transaction management, and seller strategy when you also need to list.',
  },
  {
    q: 'How long has Dr. Jan Duffy been in real estate?',
    a: 'She has been in real estate since 1983 and with Berkshire Hathaway HomeServices Nevada Properties since September 2008. License S.0197614.LLC.',
  },
  {
    q: 'How do I work with her on a Las Vegas home search?',
    a: `Call ${PHONE_DISPLAY}. Share budget, must-haves, and target areas. She opens MLS search, schedules tours, and structures offers.`,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageSchemas
        path="/about"
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service={{
          name: 'Las Vegas REALTOR® Buyer & Seller Representation',
          description,
        }}
        howTo={{
          name: 'How Dr. Jan Duffy works with homebuyers',
          description: 'Listen and brief, search and tour, offer with a plan, close without drama.',
          steps: [
            {
              name: 'Listen, then brief',
              text: 'Budget, must-haves, and timeline first.',
            },
            {
              name: 'Search and tour',
              text: 'Live MLS filters and private showings with honest condition notes.',
            },
            {
              name: 'Offer with a plan',
              text: 'Price, contingencies, and escalation language matched to listing leverage.',
            },
            {
              name: 'Close without drama',
              text: 'Inspections, repairs, appraisal, and funding tracked to keys.',
            },
          ],
        }}
        speakableSelectors={['h1', '#skills', '#faq']}
      />
      <Breadcrumbs items={breadcrumbs} />
      <AboutHero />
      <RealtorSkills />
      <HowSheWorks />
      <PracticeCredentials />
      <SectionFaq title="About Dr. Jan Duffy" faqs={faqs} />
      <ContactSection />
    </main>
  );
}
