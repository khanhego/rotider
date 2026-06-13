import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

const services = [
  {
    id: 's1',
    title: 'Real Estate Photo Editing',
    description: 'HDR blending, sky replacement, item removal, and color correction for stunning listing photos.',
    href: '/services/photo-editing',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    hasPlay: false,
  },
  {
    id: 's2',
    title: 'Real Estate Video Editing',
    description: 'Cinematic property tours, branding overlays, and social-ready clips that captivate buyers.',
    href: '/services/video-editing',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    hasPlay: true,
  },
  {
    id: 's3',
    title: 'Virtual Staging',
    description: 'Digitally furnish empty rooms to help buyers envision the space and sell faster.',
    href: '/services/virtual-staging',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
    hasPlay: false,
  },
] as const;

export function ServicesGridSection() {
  return (
    <section className="bg-surface py-16 md:py-20 lg:py-24" data-section="services">
      <Container as="section">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel centered>Our Services</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Professional Editing Services to Elevate Every Property
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="group block h-full">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                  />
                  {item.hasPlay && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                        <svg className="ml-1 h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold group-hover:text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
