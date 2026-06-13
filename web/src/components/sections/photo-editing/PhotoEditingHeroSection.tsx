import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Container } from '@/components/layout/Container';

const trustItems = [
  { label: '24–48 Hour Turnaround', icon: '⏱' },
  { label: '100% Satisfaction Guarantee', icon: '✓' },
  { label: 'Secure & Private Delivery', icon: '🔒' },
] as const;

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=900&fit=crop';

export function PhotoEditingHeroSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20" data-section="photo-hero">
      <Container as="section">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionLabel>Real Estate Photo Editing</SectionLabel>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[3.25rem]">
              Stunning Photos. Stronger Listings.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Professional real estate photo editing that helps you win more listings,
              sell faster, and stand out in a competitive market.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Get a Free Trial</Button>
              <Button href="/pricing/photo" variant="outline">
                View Pricing
              </Button>
            </div>
            <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
              {trustItems.map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={HERO_IMAGE}
              alt="Bright modern living room after professional photo editing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 640px"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
