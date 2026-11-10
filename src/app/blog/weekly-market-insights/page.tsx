import { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import LatestInsights from '@/components/blog/LatestInsights';
import InsightArchive from '@/components/blog/InsightArchive';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import ToolPageShell from '@/components/seo/ToolPageShell';
import { TOOL_PAGES } from '@/config/toolPages';

const page = TOOL_PAGES['weekly-market-insights'];

export const metadata: Metadata = {
  alternates: { canonical: page.path },
  title: page.title,
  description: page.description,
};

export default function WeeklyMarketInsightsPage() {
  return (
    <ToolPageShell {...page}>
      <BlogHero />
      <LatestInsights />
      <InsightArchive />
      <NewsletterSignup />
    </ToolPageShell>
  );
}
