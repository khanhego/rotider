import { Container } from '@/components/layout/Container';
import type { ContentBlock, TestimonialsBlock } from '@/types/cms';

interface SectionProps {
  data: ContentBlock;
}

export function TestimonialsSection({ data }: SectionProps) {
  const block = data as TestimonialsBlock;

  return (
    <section className="bg-slate-50 py-16 md:py-24" data-section="testimonials">
      <Container as="section">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{block.heading}</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {block.items.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {item.rating && (
                <p className="text-sm text-amber-500" aria-label={`${item.rating} out of 5 stars`}>
                  {'★'.repeat(item.rating)}
                </p>
              )}
              <blockquote className="mt-4 text-muted">&ldquo;{item.quote}&rdquo;</blockquote>
              <footer className="mt-4">
                <p className="font-semibold">{item.name}</p>
                {item.role && <p className="text-sm text-muted">{item.role}</p>}
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
