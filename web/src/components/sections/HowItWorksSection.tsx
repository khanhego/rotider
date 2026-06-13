import { Container } from '@/components/layout/Container';
import type { ContentBlock, HowItWorksBlock } from '@/types/cms';

interface SectionProps {
  data: ContentBlock;
}

export function HowItWorksSection({ data }: SectionProps) {
  const block = data as HowItWorksBlock;

  return (
    <section className="py-16 md:py-24" data-section="how-it-works">
      <Container as="section">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{block.heading}</h2>
          {block.subheading && (
            <p className="mt-4 text-lg text-muted">{block.subheading}</p>
          )}
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {block.steps.map((step) => (
            <li key={step.id} className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {step.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
