'use client';

import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile' | 'book' | 'product';
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string;
  noindex?: boolean;
  nofollow?: boolean;
  // Real estate specific
  propertyType?: 'residential' | 'commercial' | 'land' | 'investment';
  propertyAddress?: string;
  propertyPrice?: string;
  propertyBedrooms?: number;
  propertyBathrooms?: number;
  propertySquareFootage?: number;
  propertyYearBuilt?: number;
  // Local business
  businessName?: string;
  businessType?: string;
  businessAddress?: string;
  businessPhone?: string;
  businessHours?: string;
  // Schema markup
  schemaType?: 'Article' | 'Product' | 'LocalBusiness' | 'RealEstateAgent' | 'WebPage';
  schemaData?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/api/og-image',
  ogType = 'website',
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  articleTags = [],
  twitterCard = 'summary_large_image',
  twitterCreator = '@DrJanDuffy',
  twitterSite = '@SearchForLasVegasHomes',
  noindex = false,
  nofollow = false,
  propertyType,
  propertyAddress,
  propertyPrice,
  propertyBedrooms,
  propertyBathrooms,
  propertySquareFootage,
  propertyYearBuilt,
  businessName = 'Dr. Jan Duffy - SearchForLasVegasHomes.com',
  businessType = 'Real Estate Agent',
  businessAddress = '1980 Festival Plaza Drive, Suite 300, Las Vegas, NV 89135 (Downtown Summerlin)',
  businessPhone = '+1-702-XXX-XXXX',
  businessHours = 'Monday-Friday 9:00 AM - 6:00 PM',
  schemaType = 'WebPage',
  schemaData = {},
}: SEOProps) {
  const router = useRouter();
  const baseUrl = 'https://searchforlasvegashomes.com';
  const currentUrl = canonical || `${baseUrl}${router.asPath}`;
  
  // Default keywords for real estate
  const defaultKeywords = [
    'Las Vegas real estate',
    'real estate market research',
    'Dr. Jan Duffy',
    'property valuation',
    'market analysis',
    'investment calculator',
    'neighborhood analysis',
    'Las Vegas homes',
    'real estate data',
    'market forecasting',
    'Berkshire Hathaway',
    'Nevada properties',
  ];
  
  const allKeywords = [...defaultKeywords, ...keywords];
  
  // Generate schema markup
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      '@id': currentUrl,
      'url': currentUrl,
      'name': title,
      'description': description,
      'inLanguage': 'en-US',
      'isPartOf': {
        '@type': 'WebSite',
        '@id': baseUrl,
        'name': 'SearchForLasVegasHomes.com',
        'url': baseUrl,
        'publisher': {
          '@type': 'Person',
          'name': 'Dr. Jan Duffy',
          'jobTitle': 'Real Estate Market Researcher',
          'worksFor': {
            '@type': 'RealEstateAgent',
            'name': 'Berkshire Hathaway HomeServices Nevada Properties',
          },
        },
      },
      'mainEntity': {
        '@type': 'RealEstateAgent',
        'name': 'Dr. Jan Duffy',
        'description': 'Las Vegas\'s leading real estate market researcher specializing in data-driven property analysis and market forecasting',
        'url': baseUrl,
        'telephone': businessPhone,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '1980 Festival Plaza Drive, Suite 300',
          'addressLocality': 'Las Vegas',
          'addressRegion': 'NV',
          'postalCode': '89135',
          'addressCountry': 'US',
        },
        'areaServed': {
          '@type': 'City',
          'name': 'Las Vegas',
          'containedInPlace': {
            '@type': 'State',
            'name': 'Nevada',
          },
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Real Estate Research Services',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Market Trend Analysis',
                'description': 'Comprehensive analysis of Las Vegas real estate market trends using 15+ data sources',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Comparative Market Analysis (CMA)',
                'description': 'Expert property valuation using proprietary research methodology',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Investment ROI Forecasting',
                'description': 'Data-driven investment analysis and return on investment projections',
              },
            },
          ],
        },
      },
      ...schemaData,
    };

    // Add property-specific schema if available
    if (propertyType && propertyAddress) {
      baseSchema.mainEntity = {
        ...baseSchema.mainEntity,
        'hasOccupation': {
          '@type': 'Occupation',
          'name': 'Real Estate Market Researcher',
          'occupationalCategory': '13-1161.00',
          'responsibilities': 'Analyzing Las Vegas real estate trends, forecasting market movements, providing data-driven insights',
        },
        'knowsAbout': [
          'Real Estate Market Analysis',
          'Property Valuation Models',
          'Investment ROI Calculation',
          'Market Trend Forecasting',
          'Comparative Market Analysis',
          'Real Estate Data Analytics',
          'Las Vegas Housing Market',
          'California to Nevada Migration Patterns',
        ],
      };
    }

    return baseSchema;
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content="Dr. Jan Duffy" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="SearchForLasVegasHomes.com" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/avif" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Real Estate Specific Meta Tags */}
      <meta name="property-listing-schema" content="enabled" />
      <meta name="real-estate-market" content="Las Vegas, NV" />
      <meta name="property-type" content={propertyType || 'residential, commercial, investment'} />
      {propertyAddress && <meta name="property-address" content={propertyAddress} />}
      {propertyPrice && <meta name="property-price" content={propertyPrice} />}
      {propertyBedrooms && <meta name="property-bedrooms" content={propertyBedrooms.toString()} />}
      {propertyBathrooms && <meta name="property-bathrooms" content={propertyBathrooms.toString()} />}
      {propertySquareFootage && <meta name="property-square-footage" content={propertySquareFootage.toString()} />}
      {propertyYearBuilt && <meta name="property-year-built" content={propertyYearBuilt.toString()} />}
      
      {/* Local Business Meta Tags */}
      <meta name="business-name" content={businessName} />
      <meta name="business-type" content={businessType} />
      <meta name="business-address" content={businessAddress} />
      <meta name="business-phone" content={businessPhone} />
      <meta name="business-hours" content={businessHours} />
      
      {/* Article Meta Tags (for blog posts) */}
      {ogType === 'article' && (
        <>
          {articleAuthor && <meta property="article:author" content={articleAuthor} />}
          {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
          {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
          {articleSection && <meta property="article:section" content={articleSection} />}
          {articleTags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Google's 2025 Requirements */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="inp-optimized" content="true" />
      <meta name="core-web-vitals" content="compliant" />
      <meta name="mobile-first" content="true" />
      <meta name="avif-support" content="enabled" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="color-scheme" content="light dark" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//vercel.live" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchema()),
        }}
      />
      
      {/* Additional Structured Data for Real Estate */}
      {propertyType && propertyAddress && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateListing',
              'name': title,
              'description': description,
              'url': currentUrl,
              'image': `${baseUrl}${ogImage}`,
              'provider': {
                '@type': 'RealEstateAgent',
                'name': 'Dr. Jan Duffy',
                'worksFor': {
                  '@type': 'RealEstateAgent',
                  'name': 'Berkshire Hathaway HomeServices Nevada Properties',
                },
              },
              'areaServed': {
                '@type': 'City',
                'name': 'Las Vegas',
                'containedInPlace': {
                  '@type': 'State',
                  'name': 'Nevada',
                },
              },
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': propertyAddress,
                'addressLocality': 'Las Vegas',
                'addressRegion': 'NV',
                'addressCountry': 'US',
              },
              ...(propertyPrice && { 'price': propertyPrice }),
              ...(propertyBedrooms && { 'numberOfBedrooms': propertyBedrooms }),
              ...(propertyBathrooms && { 'numberOfBathrooms': propertyBathrooms }),
              ...(propertySquareFootage && { 'floorSize': { '@type': 'QuantitativeValue', 'value': propertySquareFootage, 'unitCode': 'FTK' } }),
              ...(propertyYearBuilt && { 'yearBuilt': propertyYearBuilt }),
            }),
          }}
        />
      )}
    </Head>
  );
}
