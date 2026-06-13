import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import type { ContentBlock, HeroBlock } from '@/types/cms';

interface SectionProps {
  data: ContentBlock;
}

export function HeroSection({ data }: SectionProps) {
  const block = data as HeroBlock;

  return (
    <section className="bg-slate-900 text-white" data-section="hero">
      <Container as="section" className="py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {block.heading}
          </h1>
          <p className="mt-6 text-lg text-slate-300 md:text-xl">{block.subheading}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={block.ctaPrimary.href} variant="secondary">
              {block.ctaPrimary.label}
            </Button>
            {block.ctaSecondary && (
              <Button href={block.ctaSecondary.href} variant="outline" className="border-slate-500 text-white hover:border-white hover:text-white">
                {block.ctaSecondary.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
