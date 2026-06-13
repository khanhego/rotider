import { Container } from '@/components/layout/Container';
import { StarRating } from '@/components/ui/StarRating';

const testimonials = [
  {
    id: 't1',
    quote:
      'Rotider transformed our listing photos. We close deals faster and sellers are thrilled with the results every single time.',
    name: 'Sarah Mitchell',
    role: 'Real Estate Photographer',
    location: 'Austin, TX',
    rating: 5,
    initials: 'SM',
  },
  {
    id: 't2',
    quote:
      'Reliable partner for high-volume editing. Quality never drops even when we send 200+ images per week.',
    name: 'James Chen',
    role: 'Brokerage Marketing Director',
    location: 'Seattle, WA',
    rating: 5,
    initials: 'JC',
  },
  {
    id: 't3',
    quote:
      'The best investment we made for brand consistency. Our listings look premium across every market we serve.',
    name: 'Emma Rodriguez',
    role: 'Real Estate Agent',
    location: 'Miami, FL',
    rating: 5,
    initials: 'ER',
  },
] as const;

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-16 md:py-20 lg:py-24" data-section="testimonials">
      <Container as="section">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight md:text-4xl">
          Trusted by Agents and Photographers Nationwide
        </h2>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((item) => (
            <li
              key={item.id}
              className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <svg className="h-8 w-8 text-primary/40" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <StarRating rating={item.rating} className="mt-4" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary">
                  {item.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted">
                    {item.role} · {item.location}
                  </p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
