import { MetadataRoute } from 'next';

// Canonical host: the apex domain 308-redirects to www, so every sitemap URL
// must be on www. List only real, indexable pages (no API routes, no
// redirecting URLs, no pages that do not exist).
const baseUrl = 'https://www.searchforlasvegashomes.com';

type Entry = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
};

const pages: Entry[] = [
  { path: '', priority: 1.0, changeFrequency: 'daily' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/search', priority: 0.9, changeFrequency: 'daily' },
  // Market research
  { path: '/market-reports', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/neighborhood-analysis', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/investment-calculator', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/price-trends', priority: 0.8, changeFrequency: 'daily' },
  { path: '/market-forecast', priority: 0.8, changeFrequency: 'weekly' },
  // Data tools
  { path: '/home-value-analyzer', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/california-comparison', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/school-ratings-map', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/appreciation-tracker', priority: 0.7, changeFrequency: 'monthly' },
  // Content
  { path: '/blog/weekly-market-insights', priority: 0.7, changeFrequency: 'weekly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
