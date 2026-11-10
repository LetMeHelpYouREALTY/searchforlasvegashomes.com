import HeroSection from '@/components/HeroSection';
import FeaturedListing from '@/components/sections/FeaturedListing';
import NeighborhoodGuides from '@/components/sections/NeighborhoodGuides';
import BuyerPath from '@/components/sections/BuyerPath';
import LuxuryListings from '@/components/sections/LuxuryListings';
import BuyerFaq from '@/components/sections/BuyerFaq';
import ContactSection from '@/components/ContactSection';
import { PHONE_DISPLAY, PHONE_HREF, SITE_HOST } from '@/config/site';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedListing
        phone={PHONE_DISPLAY}
        phoneHref={PHONE_HREF}
        siteHost={SITE_HOST}
      />
      <NeighborhoodGuides />
      <LuxuryListings />
      <BuyerPath />
      <BuyerFaq />
      <ContactSection />
    </main>
  );
}
