export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://searchforlasvegashomes.com/#dr-jan-duffy",
    "name": "Dr. Jan Duffy",
    "honorificPrefix": "Dr.",
    "jobTitle": ["Real Estate Market Researcher", "REALTOR®"],
    "description": "Las Vegas's leading real estate market researcher specializing in data-driven property analysis and market forecasting",
    "worksFor": {
      "@type": "RealEstateAgent",
      "name": "Berkshire Hathaway HomeServices Nevada Properties"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Columbia Pacific University"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Doctoral Degree",
        "educationalLevel": "Doctorate",
        "competencyRequired": "Advanced Research & Data Analysis"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Real Estate License",
        "identifier": "S.0197614.LLC"
      }
    ],
    "knowsAbout": [
      "Real Estate Market Analysis",
      "Property Valuation Models",
      "Investment ROI Calculation",
      "Market Trend Forecasting",
      "Comparative Market Analysis",
      "Real Estate Data Analytics",
      "Las Vegas Housing Market",
      "California to Nevada Migration Patterns"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Market Research Analyst",
      "occupationalCategory": "13-1161.00",
      "responsibilities": "Analyzing Las Vegas real estate trends, forecasting market movements, providing data-driven insights"
    }
  };
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://searchforlasvegashomes.com",
    "name": "SearchForLasVegasHomes.com",
    "description": "Las Vegas's premier real estate market research and data analysis platform, powered by Dr. Jan Duffy's proprietary research methodology",
    "url": "https://searchforlasvegashomes.com",
    "publisher": {
      "@type": "Person",
      "name": "Dr. Jan Duffy"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://searchforlasvegashomes.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": "Berkshire Hathaway HomeServices Nevada Properties",
      "employee": {
        "@type": "Person",
        "name": "Dr. Jan Duffy"
      }
    }
  };
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Berkshire Hathaway HomeServices Nevada Properties",
    "description": "Premier real estate brokerage in Nevada, specializing in data-driven market analysis and research",
    "url": "https://www.berkshirehathawayhs.com",
            "address": {
          "@type": "PostalAddress",
          "streetAddress": "1980 Festival Plaza Drive, Suite 300",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89135",
          "addressCountry": "US"
        },
    "employee": {
      "@type": "Person",
      "name": "Dr. Jan Duffy",
      "jobTitle": "Real Estate Market Researcher",
      "description": "Las Vegas's leading real estate market researcher specializing in data-driven property analysis and market forecasting"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Las Vegas Real Estate Market Research & Analysis",
    "description": "Comprehensive real estate market research and data analysis services for Las Vegas properties",
    "provider": {
      "@type": "Person",
      "name": "Dr. Jan Duffy"
    },
    "areaServed": {
      "@type": "City",
      "name": "Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate Research Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Market Trend Analysis", "description": "Comprehensive analysis of Las Vegas real estate market trends using 15+ data sources" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Comparative Market Analysis (CMA)", "description": "Expert property valuation using proprietary research methodology" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Investment ROI Forecasting", "description": "Data-driven investment analysis and return on investment projections" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Neighborhood Appreciation Studies", "description": "In-depth analysis of neighborhood growth patterns and appreciation potential" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "California vs Nevada Market Comparison", "description": "Comprehensive analysis for California residents considering Nevada relocation" } }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
