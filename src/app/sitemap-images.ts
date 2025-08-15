import { MetadataRoute } from 'next';

// Image sitemap configuration for real estate SEO
const IMAGE_CONFIG = {
  baseUrl: 'https://searchforlasvegashomes.com',
  imageTypes: ['jpg', 'jpeg', 'png', 'webp', 'avif'],
  maxImagesPerSitemap: 1000,
};

// Generate image sitemap for Google's image optimization requirements
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = IMAGE_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();

  // Core website images
  const coreImages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/og-image`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      // Image metadata for Google
      alternates: {
        languages: {
          'en-US': `${baseUrl}/og-image`,
          'es-ES': `${baseUrl}/es/og-image`,
        },
      },
    },
    {
      url: `${baseUrl}/favicon.ico`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/icon-16x16.png`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/icon-32x32.png`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/apple-touch-icon.png`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Hero and marketing images
  const marketingImages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/images/hero-las-vegas-skyline.jpg`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/hero-las-vegas-skyline.jpg`,
          'es-ES': `${baseUrl}/es/images/hero-las-vegas-skyline.jpg`,
        },
      },
    },
    {
      url: `${baseUrl}/images/dr-jan-duffy-professional.jpg`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/dr-jan-duffy-professional.jpg`,
          'es-ES': `${baseUrl}/es/images/dr-jan-duffy-professional.jpg`,
        },
      },
    },
    {
      url: `${baseUrl}/images/berkshire-hathaway-logo.png`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Market research and data visualization images
  const researchImages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/images/market-trends-chart.png`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/market-trends-chart.png`,
          'es-ES': `${baseUrl}/es/images/market-trends-chart.png`,
        },
      },
    },
    {
      url: `${baseUrl}/images/neighborhood-map.png`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/neighborhood-map.png`,
          'es-ES': `${baseUrl}/es/images/neighborhood-map.png`,
        },
      },
    },
    {
      url: `${baseUrl}/images/investment-calculator-screenshot.png`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/investment-calculator-screenshot.png`,
          'es-ES': `${baseUrl}/es/images/investment-calculator-screenshot.png`,
        },
      },
    },
    {
      url: `${baseUrl}/images/price-trends-graph.png`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/price-trends-graph.png`,
          'es-ES': `${baseUrl}/es/images/price-trends-graph.png`,
        },
      },
    },
  ];

  // Neighborhood and location images
  const neighborhoodImages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/images/neighborhoods/summerlin-aerial.jpg`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/neighborhoods/summerlin-aerial.jpg`,
          'es-ES': `${baseUrl}/es/images/neighborhoods/summerlin-aerial.jpg`,
        },
      },
    },
    {
      url: `${baseUrl}/images/neighborhoods/henderson-suburbs.jpg`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/neighborhoods/henderson-suburbs.jpg`,
          'es-ES': `${baseUrl}/es/images/neighborhoods/henderson-suburbs.jpg`,
        },
      },
    },
    {
      url: `${baseUrl}/images/neighborhoods/downtown-las-vegas.jpg`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/neighborhoods/downtown-las-vegas.jpg`,
          'es-ES': `${baseUrl}/es/images/neighborhoods/downtown-las-vegas.jpg`,
        },
      },
    },
    {
      url: `${baseUrl}/images/neighborhoods/centennial-hills.jpg`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/neighborhoods/centennial-hills.jpg`,
          'es-ES': `${baseUrl}/es/images/neighborhoods/centennial-hills.jpg`,
        },
      },
    },
  ];

  // School and education images
  const educationImages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/images/schools/rankings-chart.png`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/schools/rankings-chart.png`,
          'es-ES': `${baseUrl}/es/images/schools/rankings-chart.png`,
        },
      },
    },
    {
      url: `${baseUrl}/images/schools/district-map.png`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/schools/district-map.png`,
          'es-ES': `${baseUrl}/es/images/schools/district-map.png`,
        },
      },
    },
  ];

  // Tool and calculator interface images
  const toolImages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/images/tools/home-value-analyzer.png`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/tools/home-value-analyzer.png`,
          'es-ES': `${baseUrl}/es/images/tools/home-value-analyzer.png`,
        },
      },
    },
    {
      url: `${baseUrl}/images/tools/california-comparison-calculator.png`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/tools/california-comparison-calculator.png`,
          'es-ES': `${baseUrl}/es/images/tools/california-comparison-calculator.png`,
        },
      },
    },
    {
      url: `${baseUrl}/images/tools/appreciation-tracker-dashboard.png`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/tools/appreciation-tracker-dashboard.png`,
          'es-ES': `${baseUrl}/es/images/tools/appreciation-tracker-dashboard.png`,
        },
      },
    },
  ];

  // Blog and content images
  const blogImages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/images/blog/weekly-insights-header.jpg`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/blog/weekly-insights-header.jpg`,
          'es-ES': `${baseUrl}/es/images/blog/weekly-insights-header.jpg`,
        },
      },
    },
    {
      url: `${baseUrl}/images/blog/market-forecast-chart.png`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/blog/market-forecast-chart.png`,
          'es-ES': `${baseUrl}/es/images/blog/market-forecast-chart.png`,
        },
      },
    },
  ];

  // Combine all image categories
  const allImages = [
    ...coreImages,
    ...marketingImages,
    ...researchImages,
    ...neighborhoodImages,
    ...educationImages,
    ...toolImages,
    ...blogImages,
  ];

  // Check if we need to split into multiple image sitemaps
  if (allImages.length > IMAGE_CONFIG.maxImagesPerSitemap) {
    console.warn(`Image sitemap exceeds ${IMAGE_CONFIG.maxImagesPerSitemap} images. Consider implementing multiple image sitemaps.`);
  }

  return allImages;
}

// Helper function to generate dynamic property images (for future MLS integration)
export async function generatePropertyImageSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = IMAGE_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();

  // This would typically fetch from your MLS or property database
  const propertyImages: Array<{
    propertyId: string;
    imageUrl: string;
    altText: string;
    lastModified: string;
    priority: number;
  }> = [
    // Example property images - replace with real data
    {
      propertyId: '12345',
      imageUrl: `${baseUrl}/images/properties/12345/main-photo.jpg`,
      altText: '123 Main St, Las Vegas, NV - Main exterior photo',
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      propertyId: '12345',
      imageUrl: `${baseUrl}/images/properties/12345/kitchen.jpg`,
      altText: '123 Main St, Las Vegas, NV - Kitchen interior',
      lastModified: currentDate,
      priority: 0.7,
    },
    {
      propertyId: '12345',
      imageUrl: `${baseUrl}/images/properties/12345/living-room.jpg`,
      altText: '123 Main St, Las Vegas, NV - Living room',
      lastModified: currentDate,
      priority: 0.7,
    },
  ];

  return propertyImages.map(image => ({
    url: image.imageUrl,
    lastModified: image.lastModified,
    changeFrequency: 'daily' as const,
    priority: image.priority,
    alternates: {
      languages: {
        'en-US': image.imageUrl,
        'es-ES': image.imageUrl.replace('/images/', '/es/images/'),
      },
    },
  }));
}

// Helper function to generate neighborhood-specific images
export async function generateNeighborhoodImageSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = IMAGE_CONFIG.baseUrl;
  const currentDate = new Date().toISOString();

  const neighborhoods = [
    'summerlin',
    'henderson',
    'downtown-las-vegas',
    'centennial-hills',
    'anthem',
    'green-valley',
    'seven-hills',
    'inspirada',
  ];

  const neighborhoodImages: MetadataRoute.Sitemap = [];

  neighborhoods.forEach(neighborhood => {
    // Add aerial photos
    neighborhoodImages.push({
      url: `${baseUrl}/images/neighborhoods/${neighborhood}/aerial-view.jpg`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/neighborhoods/${neighborhood}/aerial-view.jpg`,
          'es-ES': `${baseUrl}/es/images/neighborhoods/${neighborhood}/aerial-view.jpg`,
        },
      },
    });

    // Add community photos
    neighborhoodImages.push({
      url: `${baseUrl}/images/neighborhoods/${neighborhood}/community-center.jpg`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/neighborhoods/${neighborhood}/community-center.jpg`,
          'es-ES': `${baseUrl}/es/images/neighborhoods/${neighborhood}/community-center.jpg`,
        },
      },
    });

    // Add amenities photos
    neighborhoodImages.push({
      url: `${baseUrl}/images/neighborhoods/${neighborhood}/amenities.jpg`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/images/neighborhoods/${neighborhood}/amenities.jpg`,
          'es-ES': `${baseUrl}/es/images/neighborhoods/${neighborhood}/amenities.jpg`,
        },
      },
    });
  });

  return neighborhoodImages;
}
