export interface ImageAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface PageSeo {
  title: string;
  metaDesc: string;
  opengraphTitle?: string;
  opengraphDescription?: string;
  opengraphImage?: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroBlock {
  __typename: 'HeroBlock';
  id: string;
  heading: string;
  subheading: string;
  ctaPrimary: CtaLink;
  ctaSecondary?: CtaLink;
  backgroundImage?: ImageAsset;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface WhyChooseUsBlock {
  __typename: 'WhyChooseUsBlock';
  id: string;
  heading: string;
  subheading?: string;
  items: FeatureItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: ImageAsset;
}

export interface ServicesGridBlock {
  __typename: 'ServicesGridBlock';
  id: string;
  heading: string;
  subheading?: string;
  items: ServiceItem[];
}

export interface StepItem {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface HowItWorksBlock {
  __typename: 'HowItWorksBlock';
  id: string;
  heading: string;
  subheading?: string;
  steps: StepItem[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  quote: string;
  rating?: number;
  avatar?: ImageAsset;
}

export interface TestimonialsBlock {
  __typename: 'TestimonialsBlock';
  id: string;
  heading: string;
  items: TestimonialItem[];
}

export interface ClientLogoItem {
  id: string;
  name: string;
  logo?: ImageAsset;
}

export interface ClientLogosBlock {
  __typename: 'ClientLogosBlock';
  id: string;
  heading?: string;
  items: ClientLogoItem[];
}

export interface ConversionCtaBlock {
  __typename: 'ConversionCtaBlock';
  id: string;
  heading: string;
  subheading?: string;
  cta: CtaLink;
}

export type ContentBlock =
  | HeroBlock
  | WhyChooseUsBlock
  | ServicesGridBlock
  | HowItWorksBlock
  | TestimonialsBlock
  | ClientLogosBlock
  | ConversionCtaBlock;

export interface Homepage {
  slug: string;
  seo: PageSeo;
  sections: ContentBlock[];
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  contactEmail: string;
  address?: string;
  socialLinks: { platform: string; href: string }[];
}
