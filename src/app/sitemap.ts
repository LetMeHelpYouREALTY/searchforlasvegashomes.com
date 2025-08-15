import { MetadataRoute } from 'next';

// Real estate website sitemap configuration
const SITE_CONFIG = {
  baseUrl: 'https://searchforlasvegashomes.com',
  defaultLocale: 'en-US',
  supportedLocales: ['en-US', 'es-ES'], // English and Spanish support
  maxUrlsPerSitemap: 50000,
};

// Page priorities and change frequencies for real estate SEO
const PAGE_CONFIG = {
  // High priority pages (core business pages)
  home: { priority: 1.0, changefreq: 'daily' },
  about: { priority: 0.9, changefreq: 'monthly' },
  search: { priority: 0.9, changefreq: 'daily' },
  
  // Market research pages (high value content)
  marketReports: { priority: 0.9, changefreq: 'weekly' },
  neighborhoodAnalysis: { priority: 0.8, changefreq: 'weekly' },
  investmentCalculator: { priority: 0.8, changefreq: 'monthly' },
  priceTrends: { priority: 0.8, changefreq: 'daily' },
  marketForecast: { priority: 0.8, changefreq: 'weekly' },
  
  // Data tools pages (interactive content)
  homeValueAnalyzer: { priority: 0.8, changefreq: 'monthly' },
  californiaComparison: { priority: 0.7, changefreq: 'monthly' },
  schoolRatingsMap: { priority: 0.7, changefreq: 'monthly' },
  appreciationTracker: { priority: 0.7, changefreq: 'monthly' },
  
  // Blog and content pages
  blog: { priority: 0.6, changefreq: 'weekly' },
  weeklyMarketInsights: { priority: 0.7, changefreq: 'weekly' },
  
  // API endpoints (for search engines)
  api: { priority: 0.3, changefreq: 'monthly' },
};

// Generate main sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();
  
  // Core pages sitemap
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.home.changefreq,
      priority: PAGE_CONFIG.home.priority,
      alternates: {
        languages: {
          'en-US': baseUrl,
          'es-ES': `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.about.changefreq,
      priority: PAGE_CONFIG.about.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/about`,
          'es-ES': `${baseUrl}/es/about`,
        },
      },
    },
    {
      url: `${baseUrl}/search`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.search.changefreq,
      priority: PAGE_CONFIG.search.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/search`,
          'es-ES': `${baseUrl}/es/search`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/contact`,
          'es-ES': `${baseUrl}/es/contact`,
        },
      },
    },
  ];

  // Market research pages
  const marketResearchPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/market-reports`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.marketReports.changefreq,
      priority: PAGE_CONFIG.marketReports.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/market-reports`,
          'es-ES': `${baseUrl}/es/market-reports`,
        },
      },
    },
    {
      url: `${baseUrl}/neighborhood-analysis`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.neighborhoodAnalysis.changefreq,
      priority: PAGE_CONFIG.neighborhoodAnalysis.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/neighborhood-analysis`,
          'es-ES': `${baseUrl}/es/neighborhood-analysis`,
        },
      },
    },
    {
      url: `${baseUrl}/investment-calculator`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.investmentCalculator.changefreq,
      priority: PAGE_CONFIG.investmentCalculator.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/investment-calculator`,
          'es-ES': `${baseUrl}/es/investment-calculator`,
        },
      },
    },
    {
      url: `${baseUrl}/price-trends`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.priceTrends.changefreq,
      priority: PAGE_CONFIG.priceTrends.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/price-trends`,
          'es-ES': `${baseUrl}/es/price-trends`,
        },
      },
    },
    {
      url: `${baseUrl}/market-forecast`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.marketForecast.changefreq,
      priority: PAGE_CONFIG.marketForecast.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/market-forecast`,
          'es-ES': `${baseUrl}/es/market-forecast`,
        },
      },
    },
  ];

  // Data tools pages
  const dataToolsPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/home-value-analyzer`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.homeValueAnalyzer.changefreq,
      priority: PAGE_CONFIG.homeValueAnalyzer.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/home-value-analyzer`,
          'es-ES': `${baseUrl}/es/home-value-analyzer`,
        },
      },
    },
    {
      url: `${baseUrl}/california-comparison`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.californiaComparison.changefreq,
      priority: PAGE_CONFIG.californiaComparison.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/california-comparison`,
          'es-ES': `${baseUrl}/es/california-comparison`,
        },
      },
    },
    {
      url: `${baseUrl}/school-ratings-map`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.schoolRatingsMap.changefreq,
      priority: PAGE_CONFIG.schoolRatingsMap.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/school-ratings-map`,
          'es-ES': `${baseUrl}/es/school-ratings-map`,
        },
      },
    },
    {
      url: `${baseUrl}/appreciation-tracker`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.appreciationTracker.changefreq,
      priority: PAGE_CONFIG.appreciationTracker.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/appreciation-tracker`,
          'es-ES': `${baseUrl}/es/appreciation-tracker`,
        },
      },
    },
  ];

  // Blog and content pages
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.blog.changefreq,
      priority: PAGE_CONFIG.blog.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog`,
          'es-ES': `${baseUrl}/es/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/weekly-market-insights`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.weeklyMarketInsights.changefreq,
      priority: PAGE_CONFIG.weeklyMarketInsights.priority,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/weekly-market-insights`,
          'es-ES': `${baseUrl}/es/blog/weekly-market-insights`,
        },
      },
    },
  ];

  // API endpoints (for search engine discovery)
  const apiPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/api/market-data`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.api.changefreq,
      priority: PAGE_CONFIG.api.priority,
    },
    {
      url: `${baseUrl}/api/analytics`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.api.changefreq,
      priority: PAGE_CONFIG.api.priority,
    },
    {
      url: `${baseUrl}/api/core-web-vitals`,
      lastModified: currentDate,
      changeFrequency: PAGE_CONFIG.api.changefreq,
      priority: PAGE_CONFIG.api.priority,
    },
  ];

  // Combine all pages
  const allPages = [
    ...corePages,
    ...marketResearchPages,
    ...dataToolsPages,
    ...blogPages,
    ...apiPages,
  ];

  // Check if we need to split into multiple sitemaps
  if (allPages.length > SITE_CONFIG.maxUrlsPerSitemap) {
    console.warn(`Sitemap exceeds ${SITE_CONFIG.maxUrlsPerSitemap} URLs. Consider implementing sitemap index.`);
  }

  return allPages;
}

// Generate sitemap index if needed (for large sites)
export async function generateSitemapIndex(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sitemap-images.xml`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sitemap-videos.xml`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}

// Helper function to generate dynamic blog post URLs
export async function generateBlogSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();

  // This would typically fetch from your CMS or database
  const blogPosts = [
    {
      slug: 'weekly-market-insights',
      title: 'Weekly Market Insights',
      lastModified: currentDate,
      priority: 0.7,
    },
    // Add more blog posts as they're created
  ];

  return blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'weekly' as const,
    priority: post.priority,
    alternates: {
      languages: {
        'en-US': `${baseUrl}/blog/${post.slug}`,
        'es-ES': `${baseUrl}/es/blog/${post.slug}`,
      },
    },
  }));
}

// Helper function to generate property listing URLs (for future MLS integration)
export async function generatePropertySitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();

  // This would typically fetch from your MLS or property database
  const properties: Array<{
    id: string;
    address: string;
    lastModified: string;
    price: number;
    status: 'active' | 'sold' | 'pending';
  }> = [
    // Example properties - replace with real data
    {
      id: '12345',
      address: '123 Main St, Las Vegas, NV 89101',
      lastModified: currentDate,
      price: 450000,
      status: 'active',
    },
  ];

  return properties.map(property => ({
    url: `${baseUrl}/property/${property.id}`,
    lastModified: property.lastModified,
    changeFrequency: 'daily' as const,
    priority: property.status === 'active' ? 0.8 : 0.6,
    alternates: {
      languages: {
        'en-US': `${baseUrl}/property/${property.id}`,
        'es-ES': `${baseUrl}/es/property/${property.id}`,
      },
    },
  }));
}
