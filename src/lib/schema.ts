import { Organization, WebSite, WithContext } from 'schema-dts';

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
    url: 'https://www.thryvo.com',    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.thryvo.com/search?q={search_term_string}'
      },
      // Use 'query' instead of 'query-input' to conform to schema-dts types
      query: 'required name=search_term_string'
    }
  };
}

// Schema script generator function that returns HTML string
export function generateSchemaScriptString(schema: WithContext<any>): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

// Create a React component
export interface SchemaScriptProps {
  schema: WithContext<any>;
}

// Note: Due to JSX limitations in .ts files, we're using a non-JSX implementation
// that is functionally equivalent to the JSX version
import React from 'react';

export function SchemaScript({ schema }: SchemaScriptProps) {
  // Create a script element using React.createElement instead of JSX
  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
  });
}
