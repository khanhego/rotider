import { Container } from '@/components/layout/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';

const steps = [
  {
    id: 'h1',
    step: 1,
    title: 'Upload Your Files',
    description: 'Send raw photos or video via our portal, email, or cloud link.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'h2',
    step: 2,
    title: 'We Edit with Care',
    description: 'Our editors apply your style preferences with dedicated QA checks.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'h3',
    step: 3,
    title: 'Review & Request Changes',
    description: 'Preview edits and request unlimited revisions until you are satisfied.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'h4',
    step: 4,
    title: 'Download Final Files',
    description: 'Receive MLS-ready assets within your agreed turnaround time.',
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24" data-section="how-it-works">
      <Container as="section">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel centered>How It Works</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Simple Process. Stunning Results.
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.id} className="relative text-center">
              {index < steps.length - 1 && (
                <span
                  className="absolute left-[calc(50%+2rem)] top-8 hidden h-px w-[calc(100%-4rem)] border-t-2 border-dashed border-primary/30 lg:block"
                  aria-hidden
                />
              )}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary-light text-primary">
                {step.icon}
              </div>
              <span className="mt-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {step.step}
              </span>
              <h3 className="mt-3 text-base font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
