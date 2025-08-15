import { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import LatestInsights from '@/components/blog/LatestInsights';
import InsightArchive from '@/components/blog/InsightArchive';
import NewsletterSignup from '@/components/blog/NewsletterSignup';

export const metadata: Metadata = {
  title: "Weekly Market Insights & Real Estate Analysis | Dr. Jan Duffy",
  description: "Stay informed with Dr. Jan's weekly market insights, data-driven analysis, and expert commentary on Las Vegas real estate trends.",
  keywords: "weekly market insights, real estate analysis, Las Vegas trends, market commentary, data-driven insights",
};

export default function WeeklyMarketInsightsPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <LatestInsights />
      <InsightArchive />
      <NewsletterSignup />
    </main>
  );
}
