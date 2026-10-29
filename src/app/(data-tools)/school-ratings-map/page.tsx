import { Metadata } from 'next';
import SchoolMapHero from '@/components/data-tools/SchoolMapHero';
import InteractiveMap from '@/components/data-tools/InteractiveMap';
import SchoolData from '@/components/data-tools/SchoolData';
import EducationInsights from '@/components/data-tools/EducationInsights';

export const metadata: Metadata = {
  title: "Las Vegas School Ratings Map & Education Data | Dr. Jan Duffy",
  description: "Interactive map showing Las Vegas school ratings, test scores, and education data to help buyers compare school attendance zones.",
  keywords: "Las Vegas schools, school ratings, education data, school districts, test scores, interactive map",
};

export default function SchoolRatingsMapPage() {
  return (
    <main className="min-h-screen">
      <SchoolMapHero />
      <InteractiveMap />
      <SchoolData />
      <EducationInsights />
    </main>
  );
}
