import type { Metadata } from 'next';
import { PhotoEditingConversionFaqSection } from '@/components/sections/photo-editing/PhotoEditingConversionFaqSection';
import { PhotoEditingCrossSellSection } from '@/components/sections/photo-editing/PhotoEditingCrossSellSection';
import { PhotoEditingFinalCtaSection } from '@/components/sections/photo-editing/PhotoEditingFinalCtaSection';
import { PhotoEditingGuaranteeSection } from '@/components/sections/photo-editing/PhotoEditingGuaranteeSection';
import { PhotoEditingHeroSection } from '@/components/sections/photo-editing/PhotoEditingHeroSection';
import { PhotoEditingImpactSection } from '@/components/sections/photo-editing/PhotoEditingImpactSection';
import { PhotoEditingSampleProjectsSection } from '@/components/sections/photo-editing/PhotoEditingSampleProjectsSection';
import { PhotoEditingServicesSection } from '@/components/sections/photo-editing/PhotoEditingServicesSection';
import { PhotoEditingWhySection } from '@/components/sections/photo-editing/PhotoEditingWhySection';
import { siteConfig } from '@/lib/config/site';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Real Estate Photo Editing | ${siteConfig.name}`,
    description:
      'Professional HDR, day-to-dusk, item removal, and retouching for real estate listings. 24–48h turnaround with 100% satisfaction guarantee.',
  };
}

export default function PhotoEditingPage() {
  return (
    <>
      <PhotoEditingHeroSection />
      <PhotoEditingImpactSection />
      <PhotoEditingWhySection />
      <PhotoEditingServicesSection />
      <PhotoEditingSampleProjectsSection />
      <PhotoEditingGuaranteeSection />
      <PhotoEditingCrossSellSection />
      <PhotoEditingConversionFaqSection />
      <PhotoEditingFinalCtaSection />
    </>
  );
}
