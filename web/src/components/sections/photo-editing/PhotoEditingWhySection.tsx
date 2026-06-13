import { BeforeAfterPair } from '@/components/ui/BeforeAfterPair';
import { Container } from '@/components/layout/Container';

const reasons = [
  'Showcase a home\'s full potential with balanced lighting and true-to-life colors',
  'Stand out in crowded MLS feeds with polished, magazine-quality imagery',
  'Build buyer trust before the first showing with crisp, professional photos',
  'Save time editing yourself — focus on listings while we handle the pixels',
] as const;

const BEFORE =
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=450&fit=crop';
const AFTER =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=450&fit=crop';

export function PhotoEditingWhySection() {
  return (
    <section className="bg-dark py-16 md:py-20 lg:py-24" data-section="photo-why">
      <Container as="section">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Why your listing photos need professional editing
            </h2>
            <ul className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3 text-sm leading-relaxed text-dark-muted md:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    ✓
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <BeforeAfterPair beforeSrc={BEFORE} afterSrc={AFTER} alt="Living room editing comparison 1" />
            <BeforeAfterPair
              beforeSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop"
              afterSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop"
              alt="Living room editing comparison 2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
