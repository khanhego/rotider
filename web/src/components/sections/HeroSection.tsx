import { Button } from '@/components/ui/Button';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Container } from '@/components/layout/Container';

const trustBadges = [
  { icon: '⏱', label: '24–48h Turnaround' },
  { icon: '↻', label: 'Unlimited Revisions' },
  { icon: '🇺🇸', label: 'U.S.-Based Service' },
  { icon: '👥', label: 'Scalable Team' },
] as const;

const HERO_BEFORE =
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=900&fit=crop';
const HERO_AFTER =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=900&fit=crop';

export function HeroSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20" data-section="hero">
      <Container as="section">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div>
            <SectionLabel>Real Estate Photo, Video &amp; 3D Editing</SectionLabel>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Make Every Listing Look{' '}
              <span className="text-primary">Market-Ready.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Fast, high-quality photo and video editing for real estate professionals.
              Upload your files and get polished, MLS-ready media delivered on time — every time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact">Order a Free Quote</Button>
              <Button href="/contact" variant="outline">
                Request a Sample Edit
              </Button>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
              {trustBadges.map((badge) => (
                <li key={badge.label} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-base">
                    {badge.icon}
                  </span>
                  <span className="text-xs font-medium text-muted leading-snug">{badge.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <BeforeAfterSlider
            beforeSrc={HERO_BEFORE}
            afterSrc={HERO_AFTER}
            alt="Luxury home exterior before and after editing"
          />
        </div>
      </Container>
    </section>
  );
}
