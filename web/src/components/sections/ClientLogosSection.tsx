import { Container } from '@/components/layout/Container';
import type { ClientLogosBlock, ContentBlock } from '@/types/cms';

interface SectionProps {
  data: ContentBlock;
}

export function ClientLogosSection({ data }: SectionProps) {
  const block = data as ClientLogosBlock;

  return (
    <section className="py-12 md:py-16" data-section="client-logos">
      <Container as="section">
        {block.heading && (
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted">
            {block.heading}
          </p>
        )}
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {block.items.map((item) => (
            <li
              key={item.id}
              className="flex h-12 min-w-[120px] items-center justify-center rounded-lg border border-dashed border-slate-300 px-6 text-sm font-medium text-muted"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
