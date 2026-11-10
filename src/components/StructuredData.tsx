import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  AGENT_LICENSE,
  AGENT_NAME,
  BROKERAGE,
  EMAIL,
  OPENING_HOURS_SPEC,
  PHONE_E164,
  POSTAL_CODE,
  SERVICE_AREAS,
  SITE_NAME,
  SITE_NAME_DOMAIN,
  SITE_URL,
  STREET_ADDRESS,
} from '@/config/site';

export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: SITE_NAME_DOMAIN,
    description:
      'Luxury Las Vegas home search with Dr. Jan Duffy, REALTOR® at Berkshire Hathaway HomeServices Nevada Properties. Live MLS search for homebuyers across the Las Vegas Valley.',
    url: SITE_URL,
    telephone: PHONE_E164,
    email: EMAIL,
    image: `${SITE_URL}/api/og-image`,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: STREET_ADDRESS,
      addressLocality: ADDRESS_LOCALITY,
      addressRegion: ADDRESS_REGION,
      postalCode: POSTAL_CODE,
      addressCountry: ADDRESS_COUNTRY,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1507,
      longitude: -115.3332,
    },
    openingHoursSpecification: OPENING_HOURS_SPEC.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: SERVICE_AREAS.map((name) => ({
      '@type': 'City',
      name,
    })),
    employee: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#dr-jan-duffy`,
      name: AGENT_NAME,
      jobTitle: 'REALTOR®',
      telephone: PHONE_E164,
      email: EMAIL,
      worksFor: {
        '@type': 'RealEstateAgent',
        name: BROKERAGE,
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Real Estate License',
        identifier: AGENT_LICENSE,
      },
    },
    parentOrganization: {
      '@type': 'RealEstateAgent',
      name: BROKERAGE,
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME_DOMAIN,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#business` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
