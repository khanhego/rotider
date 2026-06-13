import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config/site';
import type { PageSeo } from '@/types/cms';

export function generatePageMetadata(seo: PageSeo, path: string): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: seo.title,
    description: seo.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      title: seo.opengraphTitle ?? seo.title,
      description: seo.opengraphDescription ?? seo.metaDesc,
      url,
      siteName: siteConfig.name,
      images: seo.opengraphImage ? [{ url: seo.opengraphImage }] : [],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.opengraphTitle ?? seo.title,
      description: seo.opengraphDescription ?? seo.metaDesc,
      images: seo.opengraphImage ? [seo.opengraphImage] : [],
    },
  };
}
