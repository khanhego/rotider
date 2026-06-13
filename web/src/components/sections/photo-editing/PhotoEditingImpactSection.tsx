import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';

const stats = [
  { value: '118%', label: 'More Views', icon: '👁' },
  { value: '63%', label: 'More Clicks', icon: '🖱' },
  { value: '30%', label: 'Faster Sales', icon: '⚡' },
  { value: '47%', label: 'Higher Offers', icon: '💰' },
  { value: '★', label: 'Stronger Brand', icon: '★' },
] as const;

export function PhotoEditingImpactSection() {
  return (
    <section className="bg-dark py-16 text-white md:py-20 lg:py-24" data-section="photo-impact">
      <Container as="section">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The Impact of Photo Editing in Real Estate Listings
            </h2>
            <blockquote className="mt-8 border-l-4 border-primary pl-6">
              <p className="text-lg italic leading-relaxed text-sky-300">
                &ldquo;Buyers decide in the first eight seconds of seeing a home.
                They&apos;re interested in buying it.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-dark-muted">
                — Barbara Corcoran
              </footer>
            </blockquote>
          </div>

          <div>
            <p className="text-base leading-relaxed text-dark-muted md:text-lg">
              Professional editing transforms ordinary listing photos into compelling
              visual stories. Brighter rooms, balanced exposures, and polished details
              build buyer confidence and strengthen your brand credibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/portfolio/photo" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                See Our Work
              </Button>
              <Button href="/#how-it-works" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                How It Works
              </Button>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {stats.map((stat) => (
            <li key={stat.label} className="text-center">
              <span className="text-2xl text-primary">{stat.icon}</span>
              <p className="mt-2 text-2xl font-bold text-primary md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-dark-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
