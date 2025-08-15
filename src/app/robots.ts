import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://searchforlasvegashomes.com';
  const businessAddress = '1980 Festival Plaza Drive, Suite 300, Las Vegas, NV 89135 (Downtown Summerlin)';
  
  return {
    rules: [
      // Allow all crawlers
      {
        userAgent: '*',
        allow: '/',
      },
      
      // Disallow admin and private areas
      {
        userAgent: '*',
        disallow: [
          '/admin/',
          '/private/',
          '/api/analytics', // Analytics endpoint
          '/api/core-web-vitals', // Performance monitoring
          '/_next/',
          '/node_modules/',
          '/.env',
          '/.git/',
        ],
      },
      
      // Specific rules for different user agents
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/api/analytics',
          '/api/core-web-vitals',
        ],
        crawlDelay: 1, // 1 second delay between requests
      },
      
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/api/analytics',
          '/api/core-web-vitals',
        ],
        crawlDelay: 1,
      },
      
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/api/analytics',
          '/api/core-web-vitals',
        ],
        crawlDelay: 1,
      },
      
      // Block bad bots
      {
        userAgent: [
          'AhrefsBot',
          'MJ12bot',
          'DotBot',
          'SemrushBot',
          'Baiduspider',
          'YandexBot',
        ],
        disallow: '/',
      },
    ],
    
    // Sitemap locations
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-images.xml`,
      `${baseUrl}/sitemap-blog.xml`,
    ],
    
    // Host directive for canonical domain
    host: baseUrl,
  };
}
