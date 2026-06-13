import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';

export function PhotoEditingCrossSellSection() {
  return (
    <section className="py-12 md:py-16" data-section="photo-cross-sell">
      <Container as="section">
        <div className="relative overflow-hidden rounded-2xl border-2 border-primary/50 bg-gradient-to-r from-dark via-[#1e1b4b] to-dark p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="absolute inset-0 bg-primary/5" aria-hidden />
          <div className="relative flex items-start gap-5 lg:max-w-2xl">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h2 className="text-xl font-bold text-white md:text-2xl">Try more our service</h2>
              <p className="mt-2 text-sm leading-relaxed text-dark-muted md:text-base">
                Explore virtual staging, floor plans, video editing, and 3D visualization
                to deliver a complete media package for every listing.
              </p>
            </div>
          </div>
          <div className="relative mt-6 shrink-0 lg:mt-0">
            <Button href="/services">Explore All Services</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
