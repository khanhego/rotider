import type { Homepage } from '@/types/cms';

export const mockHomepage: Homepage = {
  slug: 'homepage',
  seo: {
    title: 'Rotider — Real Estate Photo & Video Editing',
    metaDesc:
      'Professional photo editing, video editing, and property visualization services for real estate professionals worldwide.',
  },
  sections: [
    {
      __typename: 'HeroBlock',
      id: 'hero-1',
      heading: 'Elevate Your Real Estate Listings',
      subheading:
        'Professional photo editing, video production, and property visualization trusted by agents worldwide.',
      ctaPrimary: { label: 'Get a Quote', href: '/contact' },
      ctaSecondary: { label: 'View Portfolio', href: '/portfolio' },
    },
    {
      __typename: 'WhyChooseUsBlock',
      id: 'why-1',
      heading: 'Why Choose Rotider',
      subheading: 'Built for high-volume real estate media workflows.',
      items: [
        {
          id: 'w1',
          title: 'Fast Turnaround',
          description: '24-hour delivery for standard edits. Scale with your listing volume.',
        },
        {
          id: 'w2',
          title: 'Consistent Quality',
          description: 'Dedicated QA on every image. Before/after results you can trust.',
        },
        {
          id: 'w3',
          title: 'Real Estate Specialists',
          description: 'HDR, day-to-dusk, item removal, and virtual staging expertise.',
        },
        {
          id: 'w4',
          title: 'Global Support',
          description: 'Serving agents and photographers across multiple time zones.',
        },
      ],
    },
    {
      __typename: 'ServicesGridBlock',
      id: 'services-1',
      heading: 'Our Services',
      subheading: 'Everything you need to make listings stand out.',
      items: [
        {
          id: 's1',
          title: 'Photo Editing',
          description: 'HDR blending, sky replacement, item removal, and color correction.',
          href: '/services/photo-editing',
        },
        {
          id: 's2',
          title: 'Video Editing',
          description: 'Cinematic property tours, branding, and social-ready clips.',
          href: '/services/video-editing',
        },
        {
          id: 's3',
          title: 'Property Visualization',
          description: 'Virtual staging, 3D renders, and architectural visualization.',
          href: '/services/property-visualization',
        },
      ],
    },
    {
      __typename: 'HowItWorksBlock',
      id: 'how-1',
      heading: 'How It Works',
      subheading: 'Simple workflow from upload to delivery.',
      steps: [
        {
          id: 'h1',
          step: 1,
          title: 'Upload Your Media',
          description: 'Send raw photos or video via our portal or email.',
        },
        {
          id: 'h2',
          step: 2,
          title: 'We Edit & Review',
          description: 'Our editors apply your style preferences with QA checks.',
        },
        {
          id: 'h3',
          step: 3,
          title: 'Receive Finished Files',
          description: 'Download MLS-ready assets within your agreed turnaround.',
        },
      ],
    },
    {
      __typename: 'TestimonialsBlock',
      id: 'testimonials-1',
      heading: 'What Our Clients Say',
      items: [
        {
          id: 't1',
          name: 'Sarah Mitchell',
          role: 'Real Estate Agent',
          quote:
            'Rotider transformed our listing photos. Faster sales and happier sellers.',
          rating: 5,
        },
        {
          id: 't2',
          name: 'James Chen',
          role: 'Photography Studio Owner',
          quote:
            'Reliable partner for high-volume editing. Quality never drops.',
          rating: 5,
        },
        {
          id: 't3',
          name: 'Emma Rodriguez',
          role: 'Brokerage Marketing Director',
          quote: 'The best investment we made for our brand consistency.',
          rating: 5,
        },
      ],
    },
    {
      __typename: 'ClientLogosBlock',
      id: 'logos-1',
      heading: 'Trusted by Industry Leaders',
      items: [
        { id: 'l1', name: 'Client A' },
        { id: 'l2', name: 'Client B' },
        { id: 'l3', name: 'Client C' },
        { id: 'l4', name: 'Client D' },
        { id: 'l5', name: 'Client E' },
      ],
    },
    {
      __typename: 'ConversionCtaBlock',
      id: 'cta-1',
      heading: 'Ready to Transform Your Listings?',
      subheading: 'Get a free quote or speak with our team today.',
      cta: { label: 'Contact Us', href: '/contact' },
    },
  ],
};
