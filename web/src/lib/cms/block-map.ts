import type { ComponentType } from 'react';
import { ClientLogosSection } from '@/components/sections/ClientLogosSection';
import { ConversionCtaSection } from '@/components/sections/ConversionCtaSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ServicesGridSection } from '@/components/sections/ServicesGridSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import type { ContentBlock } from '@/types/cms';

export const BLOCK_COMPONENT_MAP: Record<
  ContentBlock['__typename'],
  ComponentType<{ data: ContentBlock }>
> = {
  HeroBlock: HeroSection as ComponentType<{ data: ContentBlock }>,
  WhyChooseUsBlock: WhyChooseUsSection as ComponentType<{ data: ContentBlock }>,
  ServicesGridBlock: ServicesGridSection as ComponentType<{ data: ContentBlock }>,
  HowItWorksBlock: HowItWorksSection as ComponentType<{ data: ContentBlock }>,
  TestimonialsBlock: TestimonialsSection as ComponentType<{ data: ContentBlock }>,
  ClientLogosBlock: ClientLogosSection as ComponentType<{ data: ContentBlock }>,
  ConversionCtaBlock: ConversionCtaSection as ComponentType<{ data: ContentBlock }>,
};
