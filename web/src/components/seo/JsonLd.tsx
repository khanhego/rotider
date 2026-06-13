import { siteConfig } from '@/lib/config/site';

interface OrganizationJsonLdProps {
  name?: string;
  url?: string;
}

export function OrganizationJsonLd({
  name = siteConfig.name,
  url = siteConfig.url,
}: OrganizationJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    description: siteConfig.defaultDescription,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
