import { Container } from '@/components/layout/Container';
import type { ContentBlock, WhyChooseUsBlock } from '@/types/cms';

interface SectionProps {
  data: ContentBlock;
}

export function WhyChooseUsSection({ data }: SectionProps) {
  const block = data as WhyChooseUsBlock;

  return (
    <section className="py-16 md:py-24" data-section="why-choose-us">
      <Container as="section">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{block.heading}</h2>
          {block.subheading && (
            <p className="mt-4 text-lg text-muted">{block.subheading}</p>
          )}
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {block.items.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
