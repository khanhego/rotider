import { Container } from '@/components/layout/Container';

const guarantees = [
  {
    id: 'g1',
    title: '100% Satisfaction',
    description: 'Unlimited revisions until you love every image.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'g2',
    title: 'On-Time Delivery',
    description: '24–48 hour turnaround on standard photo edits.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'g3',
    title: 'Secure & Private',
    description: 'Your files are encrypted and never shared with third parties.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'g4',
    title: 'Dedicated Support',
    description: 'A real editor on your account — not a ticket queue.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

export function PhotoEditingGuaranteeSection() {
  return (
    <section className="border-t border-white/10 bg-dark py-16 md:py-20" data-section="photo-guarantee">
      <Container as="section">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">Our Guarantee</h2>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item) => (
            <li key={item.id} className="text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
                {item.icon}
              </span>
              <h3 className="mt-4 font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
