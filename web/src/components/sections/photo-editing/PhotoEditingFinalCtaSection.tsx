import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';

export function PhotoEditingFinalCtaSection() {
  return (
    <section
      className="bg-gradient-to-br from-dark via-[#1e1b4b] to-[#312e81] py-16 text-center md:py-20 lg:py-24"
      data-section="photo-final-cta"
    >
      <Container as="section">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Ready to work with us?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-dark-muted md:text-lg">
          Join thousands of agents and photographers who trust Rotider Media
          for fast, flawless real estate photo editing.
        </p>
        <div className="mt-8">
          <Button href="/contact" size="lg" className="rounded-full px-10">
            Talk to an expert
          </Button>
        </div>
      </Container>
    </section>
  );
}
