import { Metadata } from 'next';
import SchoolMapHero from '@/components/data-tools/SchoolMapHero';
import InteractiveMap from '@/components/data-tools/InteractiveMap';
import SchoolData from '@/components/data-tools/SchoolData';
import EducationInsights from '@/components/data-tools/EducationInsights';
import ToolPageShell from '@/components/seo/ToolPageShell';
import { TOOL_PAGES } from '@/config/toolPages';

const page = TOOL_PAGES['school-ratings-map'];

export const metadata: Metadata = {
  alternates: { canonical: page.path },
  title: page.title,
  description: page.description,
};

export default function SchoolRatingsMapPage() {
  return (
    <ToolPageShell {...page}>
      <SchoolMapHero />
      <InteractiveMap />
      <SchoolData />
      <EducationInsights />
    </ToolPageShell>
  );
}
