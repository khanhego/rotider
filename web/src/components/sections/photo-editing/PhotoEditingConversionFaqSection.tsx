import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Container } from '@/components/layout/Container';

const faqItems = [
  {
    id: 'faq1',
    question: 'How long will it take to get my photos back?',
    answer:
      'Standard photo edits are delivered within 24–48 hours. Rush delivery is available for urgent listings.',
  },
  {
    id: 'faq2',
    question: 'What file formats do you accept?',
    answer:
      'We accept RAW (CR2, NEF, ARW), JPEG, TIFF, and DNG. Upload via our portal, email, or cloud link.',
  },
  {
    id: 'faq3',
    question: 'Do you offer unlimited revisions?',
    answer:
      'Yes. We revise until you are 100% satisfied with every image in your order.',
  },
  {
    id: 'faq4',
    question: 'Can I set editing preferences for my brand?',
    answer:
      'Absolutely. We save your style profile — color temperature, sky preference, cropping — for consistent results.',
  },
  {
    id: 'faq5',
    question: 'Is my data secure?',
    answer:
      'All files are encrypted in transit and at rest. We never share your images with third parties.',
  },
] as const;

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'hdr', label: 'HDR Blending' },
  { value: 'dusk', label: 'Day-to-Dusk' },
  { value: 'remove', label: 'Item Removal' },
  { value: 'sky', label: 'Sky Replacement' },
  { value: 'other', label: 'Other' },
];

const photoCountOptions = [
  { value: '', label: 'Number of photos' },
  { value: '1-10', label: '1–10 photos' },
  { value: '11-25', label: '11–25 photos' },
  { value: '26-50', label: '26–50 photos' },
  { value: '50+', label: '50+ photos' },
];

export function PhotoEditingConversionFaqSection() {
  return (
    <section className="bg-surface py-16 md:py-20 lg:py-24" data-section="photo-conversion-faq">
      <Container as="section">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to elevate your listings?
            </h2>
            <form className="mt-8 space-y-4 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
              <Input label="Full Name" name="fullName" placeholder="John Smith" required />
              <Input label="Email" name="email" type="email" placeholder="you@email.com" required />
              <Select label="Service Needed" name="service" options={serviceOptions} defaultValue="" required />
              <Select label="Number of Photos" name="photoCount" options={photoCountOptions} defaultValue="" required />
              <Textarea label="Project Details" name="details" placeholder="Tell us about your project..." />
              <Button type="submit" className="w-full">
                Get My Free Quote
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">FAQ</h2>
            <div className="mt-8">
              <Accordion items={[...faqItems]} />
            </div>
            <div className="mt-6 rounded-xl border border-border bg-white p-5">
              <p className="font-semibold">Have more questions?</p>
              <p className="mt-1 text-sm text-muted">Our team is here to help you get started.</p>
              <Button href="/contact" variant="outline" size="sm" className="mt-4">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
