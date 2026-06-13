import type { Metadata } from 'next';
import { PageRenderer } from '@/components/PageRenderer';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';
import { getHomepage } from '@/lib/cms/queries/homepage';
import { generatePageMetadata } from '@/lib/seo/generate-page-metadata';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomepage();
  return generatePageMetadata(page.seo, '/');
}

export default async function HomePage() {
  const page = await getHomepage();

  return (
    <>
      <OrganizationJsonLd />
      <PageRenderer sections={page.sections} />
    </>
  );
}
