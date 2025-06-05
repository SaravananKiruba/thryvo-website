// Add structured data (JSON-LD) for SEO
import { getOrganizationSchema, getWebsiteSchema, SchemaScript } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={getOrganizationSchema()} />
      <SchemaScript schema={getWebsiteSchema()} />
      {/* ...existing homepage content... */}
    </>
  );
}
