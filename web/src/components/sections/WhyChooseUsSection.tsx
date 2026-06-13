import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

const features = [
  {
    id: 'f1',
    title: 'Fast Turnaround',
    description: '24–48 hour delivery on standard edits. Rush options available for tight listing deadlines.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'f2',
    title: 'Consistent Quality',
    description: 'Dedicated QA on every image. Before/after results you can trust across every listing.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'f3',
    title: 'Dedicated Support',
    description: 'A real person on your account — not a ticket queue. We know your style preferences.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'f4',
    title: 'Scalable for Agencies',
    description: 'From solo agents to 500+ listing brokerages. Volume pricing and dedicated team capacity.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24" data-section="why-choose-us">
      <Container as="section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Why Choose Rotider Media</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Your Success Is Our Priority.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              We partner with agents, photographers, and brokerages who need reliable,
              high-volume editing without sacrificing quality. Your listings deserve to shine.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <path d="M3 3v18h18M7 16l4-4 4 4 5-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-muted">Projects Delivered Across the U.S.</p>
                </div>
              </div>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {features.map((item) => (
              <li
                key={item.id}
                className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
