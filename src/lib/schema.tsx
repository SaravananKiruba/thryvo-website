// filepath: d:\BOOLA\Thryvo\SourceCode\thryvo-website\src\lib\schema.tsx
import { Organization, WebSite, WithContext } from 'schema-dts';
import React from 'react';

// Organization Schema
export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Thryvo',
    url: 'https://www.thryvo.com',
    logo: 'https://www.thryvo.com/logo.png',
    sameAs: [
      'https://www.facebook.com/thryvo',
      'https://www.twitter.com/thryvo',
      'https://www.linkedin.com/company/thryvo',
      'https://www.instagram.com/thryvo'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'customer service',
      email: 'info@thryvo.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English']
    }
  };
}

// Website Schema
export function getWebsiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Thryvo',
    url: 'https://www.thryvo.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.thryvo.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

// Generic schema renderer component
export function SchemaScript({ schema }: { schema: WithContext<any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
