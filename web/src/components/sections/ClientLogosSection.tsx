import { Container } from '@/components/layout/Container';

const logos = [
  'SUMMIT REALTY',
  'URBAN NEST',
  'BLUE OAK',
  'PINNACLE',
  'HARBOR HOMES',
  'SKYLINE GROUP',
] as const;

export function ClientLogosSection() {
  return (
    <section className="border-y border-border bg-white py-10 md:py-12" data-section="client-logos">
      <Container as="section">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 lg:gap-x-20">
          {logos.map((name) => (
            <li
              key={name}
              className="text-sm font-bold tracking-widest text-muted/60 grayscale transition-all hover:text-muted hover:grayscale-0 md:text-base"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
