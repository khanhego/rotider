import type { Metadata } from 'next';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';
import { ClientLogosSection } from '@/components/sections/ClientLogosSection';
import { ConversionCtaSection } from '@/components/sections/ConversionCtaSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ServicesGridSection } from '@/components/sections/ServicesGridSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { siteConfig } from '@/lib/config/site';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${siteConfig.name} — Real Estate Photo & Video Editing`,
    description: siteConfig.defaultDescription,
  };
}

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesGridSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ClientLogosSection />
      <ConversionCtaSection />
    </>
  );
}
