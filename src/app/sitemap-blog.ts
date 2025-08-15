import { MetadataRoute } from 'next';

// Blog sitemap configuration for real estate content SEO
const BLOG_CONFIG = {
  baseUrl: 'https://searchforlasvegashomes.com',
  maxPostsPerSitemap: 1000,
  defaultPriority: 0.7,
  defaultChangeFreq: 'weekly' as const,
};

// Generate blog sitemap for Google's content discovery
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BLOG_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();
  
  // Weekly market insights blog posts
  const weeklyInsights: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/weekly-market-insights`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/weekly-market-insights`,
          'es-ES': `${baseUrl}/es/blog/weekly-market-insights`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/weekly-market-insights/2025/08`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/weekly-market-insights/2025/08`,
          'es-ES': `${baseUrl}/es/blog/weekly-market-insights/2025/08`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/weekly-market-insights/2025/07`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/weekly-market-insights/2025/07`,
          'es-ES': `${baseUrl}/es/blog/weekly-market-insights/2025/07`,
        },
      },
    },
  ];

  // Market analysis and research articles
  const marketAnalysis: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/market-analysis/las-vegas-housing-trends-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/market-analysis/las-vegas-housing-trends-2025`,
          'es-ES': `${baseUrl}/es/blog/market-analysis/las-vegas-housing-trends-2025`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/market-analysis/california-exodus-impact-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/market-analysis/california-exodus-impact-2025`,
          'es-ES': `${baseUrl}/es/blog/market-analysis/california-exodus-impact-2025`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/market-analysis/investment-opportunities-las-vegas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/market-analysis/investment-opportunities-las-vegas`,
          'es-ES': `${baseUrl}/es/blog/market-analysis/investment-opportunities-las-vegas`,
        },
      },
    },
  ];

  // Neighborhood guides and analysis
  const neighborhoodGuides: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/neighborhoods/summerlin-complete-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/neighborhoods/summerlin-complete-guide-2025`,
          'es-ES': `${baseUrl}/es/blog/neighborhoods/summerlin-complete-guide-2025`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/neighborhoods/henderson-family-friendly-areas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/neighborhoods/henderson-family-friendly-areas`,
          'es-ES': `${baseUrl}/es/blog/neighborhoods/henderson-family-friendly-areas`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/neighborhoods/downtown-las-vegas-urban-living`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/neighborhoods/downtown-las-vegas-urban-living`,
          'es-ES': `${baseUrl}/es/blog/neighborhoods/downtown-las-vegas-urban-living`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/neighborhoods/centennial-hills-growth-potential`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/neighborhoods/centennial-hills-growth-potential`,
          'es-ES': `${baseUrl}/es/blog/neighborhoods/centennial-hills-growth-potential`,
        },
      },
    },
  ];

  // Investment and financial analysis
  const investmentAnalysis: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/investment/roi-calculator-guide-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/investment/roi-calculator-guide-2025`,
          'es-ES': `${baseUrl}/es/blog/investment/roi-calculator-guide-2025`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/investment/rental-property-analysis-las-vegas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/investment/rental-property-analysis-las-vegas`,
          'es-ES': `${baseUrl}/es/blog/investment/rental-property-analysis-las-vegas`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/investment/flipping-houses-las-vegas-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/investment/flipping-houses-las-vegas-2025`,
          'es-ES': `${baseUrl}/es/blog/investment/flipping-houses-las-vegas-2025`,
        },
      },
    },
  ];

  // School and education content
  const educationContent: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/education/best-schools-las-vegas-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/education/best-schools-las-vegas-2025`,
          'es-ES': `${baseUrl}/es/blog/education/best-schools-las-vegas-2025`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/education/school-districts-property-values`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/education/school-districts-property-values`,
          'es-ES': `${baseUrl}/es/blog/education/school-districts-property-values`,
        },
      },
    },
  ];

  // Market forecasting and predictions
  const marketForecasting: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/forecasting/q3-2025-market-predictions`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/forecasting/q3-2025-market-predictions`,
          'es-ES': `${baseUrl}/es/blog/forecasting/q3-2025-market-predictions`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/forecasting/q4-2025-outlook`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/forecasting/q4-2025-outlook`,
          'es-ES': `${baseUrl}/es/blog/forecasting/q4-2025-outlook`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/forecasting/2026-market-forecast`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/forecasting/2026-market-forecast`,
          'es-ES': `${baseUrl}/es/blog/forecasting/2026-market-forecast`,
        },
      },
    },
  ];

  // Tool tutorials and guides
  const toolTutorials: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/tools/home-value-analyzer-tutorial`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/tools/home-value-analyzer-tutorial`,
          'es-ES': `${baseUrl}/es/blog/tools/home-value-analyzer-tutorial`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/tools/investment-calculator-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/tools/investment-calculator-guide`,
          'es-ES': `${baseUrl}/es/blog/tools/investment-calculator-guide`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/tools/california-comparison-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/tools/california-comparison-calculator`,
          'es-ES': `${baseUrl}/es/blog/tools/california-comparison-calculator`,
        },
      },
    },
  ];

  // Expert insights and interviews
  const expertInsights: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/expert-insights/dr-jan-duffy-interview-2025`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/expert-insights/dr-jan-duffy-interview-2025`,
          'es-ES': `${baseUrl}/es/blog/expert-insights/dr-jan-duffy-interview-2025`,
        },
      },
    },
    {
      url: `${baseUrl}/blog/expert-insights/berkshire-hathaway-partnership`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/blog/expert-insights/berkshire-hathaway-partnership`,
          'es-ES': `${baseUrl}/es/blog/expert-insights/berkshire-hathaway-partnership`,
        },
      },
    },
  ];

  // Combine all blog categories
  const allBlogPosts = [
    ...weeklyInsights,
    ...marketAnalysis,
    ...neighborhoodGuides,
    ...investmentAnalysis,
    ...educationContent,
    ...marketForecasting,
    ...toolTutorials,
    ...expertInsights,
  ];

  // Check if we need to split into multiple blog sitemaps
  if (allBlogPosts.length > BLOG_CONFIG.maxPostsPerSitemap) {
    console.warn(`Blog sitemap exceeds ${BLOG_CONFIG.maxPostsPerSitemap} posts. Consider implementing multiple blog sitemaps.`);
  }

  return allBlogPosts;
}

// Helper function to generate dynamic blog post URLs from CMS
export async function generateDynamicBlogSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BLOG_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();

  // This would typically fetch from your CMS or database
  const dynamicPosts = [
    {
      slug: 'las-vegas-market-update-august-2025',
      title: 'Las Vegas Market Update - August 2025',
      category: 'market-updates',
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      slug: 'summerlin-property-values-analysis',
      title: 'Summerlin Property Values Analysis',
      category: 'neighborhood-analysis',
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      slug: 'investment-tips-first-time-buyers',
      title: 'Investment Tips for First-Time Buyers',
      category: 'investment-guides',
      lastModified: currentDate,
      priority: 0.7,
    },
  ];

  return dynamicPosts.map(post => ({
    url: `${baseUrl}/blog/${post.category}/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: BLOG_CONFIG.defaultChangeFreq,
    priority: post.priority,
    alternates: {
      languages: {
        'en-US': `${baseUrl}/blog/${post.category}/${post.slug}`,
        'es-ES': `${baseUrl}/es/blog/${post.category}/${post.slug}`,
      },
    },
  }));
}

// Helper function to generate category archive URLs
export async function generateCategorySitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BLOG_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();

  const categories = [
    'market-updates',
    'neighborhood-analysis',
    'investment-guides',
    'education',
    'forecasting',
    'tools',
    'expert-insights',
  ];

  return categories.map(category => ({
    url: `${baseUrl}/blog/category/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
    alternates: {
      languages: {
        'en-US': `${baseUrl}/blog/category/${category}`,
        'es-ES': `${baseUrl}/es/blog/category/${category}`,
      },
    },
  }));
}

// Helper function to generate tag archive URLs
export async function generateTagSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BLOG_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();

  const tags = [
    'las-vegas',
    'real-estate',
    'market-analysis',
    'investment',
    'summerlin',
    'henderson',
    'downtown',
    'schools',
    'forecasting',
    'roi',
    'california-exodus',
    'berkshire-hathaway',
  ];

  return tags.map(tag => ({
    url: `${baseUrl}/blog/tag/${tag}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
    alternates: {
      languages: {
        'en-US': `${baseUrl}/blog/tag/${tag}`,
        'es-ES': `${baseUrl}/es/blog/tag/${tag}`,
      },
    },
  }));
}
