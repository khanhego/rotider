export const siteConfig = {
  name: 'Rotider',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rotider.com',
  defaultDescription:
    'Professional photo editing, video editing, and property visualization for real estate.',
} as const;

export const mainNav = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Photo Editing', href: '/services/photo-editing' },
      { label: 'Video Editing', href: '/services/video-editing' },
      { label: 'Property Visualization', href: '/services/property-visualization' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerNav = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Career', href: '/career' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Photo Editing', href: '/services/photo-editing' },
    { label: 'Video Editing', href: '/services/video-editing' },
    { label: 'Property Visualization', href: '/services/property-visualization' },
  ],
  resources: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
  ],
} as const;
