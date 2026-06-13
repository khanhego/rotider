import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import type { ContentBlock, ConversionCtaBlock } from '@/types/cms';

interface SectionProps {
  data: ContentBlock;
}

export function ConversionCtaSection({ data }: SectionProps) {
  const block = data as ConversionCtaBlock;

  return (
    <section className="bg-primary py-16 text-white md:py-20" data-section="conversion-cta">
      <Container as="section" className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{block.heading}</h2>
        {block.subheading && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">{block.subheading}</p>
        )}
        <div className="mt-8">
          <Button
            href={block.cta.href}
            variant="secondary"
            className="bg-white text-primary hover:opacity-90"
          >
            {block.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
