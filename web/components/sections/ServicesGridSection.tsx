import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import type { ContentBlock, ServicesGridBlock } from '@/types/cms';

interface SectionProps {
  data: ContentBlock;
}

export function ServicesGridSection({ data }: SectionProps) {
  const block = data as ServicesGridBlock;

  return (
    <section className="bg-slate-50 py-16 md:py-24" data-section="services">
      <Container as="section">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{block.heading}</h2>
          {block.subheading && (
            <p className="mt-4 text-lg text-muted">{block.subheading}</p>
          )}
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {block.items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="block h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
