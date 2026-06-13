export const siteConfig = {
  name: 'ROTIDER MEDIA',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rotider.com',
  defaultDescription:
    'Professional real estate photo, video, and 3D editing services for agents and photographers nationwide.',
} as const;

export const mainNav = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Photo Editing', href: '/services/photo-editing' },
      { label: 'Video Editing', href: '/services/video-editing' },
      { label: 'Virtual Staging', href: '/services/virtual-staging' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Company', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
] as const;

export const footerNav = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Career', href: '/career' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  services: [
    { label: 'Photo Editing', href: '/services/photo-editing' },
    { label: 'Video Editing', href: '/services/video-editing' },
    { label: 'Virtual Staging', href: '/services/virtual-staging' },
    { label: 'Day to Dusk', href: '/services/day-to-dusk' },
  ],
  portfolio: [
    { label: 'Photo Gallery', href: '/portfolio/photo' },
    { label: 'Video Gallery', href: '/portfolio/video' },
    { label: 'Virtual Staging', href: '/portfolio/staging' },
  ],
  pricing: [
    { label: 'Photo Pricing', href: '/pricing/photo' },
    { label: 'Video Pricing', href: '/pricing/video' },
    { label: 'Staging Pricing', href: '/pricing/staging' },
  ],
} as const;
