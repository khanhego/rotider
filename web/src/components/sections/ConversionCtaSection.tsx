import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Container } from '@/components/layout/Container';

const steps = [
  {
    id: 'c1',
    title: 'Fill the form',
    description: 'Tell us about your project and service needs.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'c2',
    title: 'Upload or paste your files link',
    description: 'Drag & drop files or share a Google Drive / Dropbox link.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'c3',
    title: 'Get your quote',
    description: 'We respond within 2 hours with a custom quote.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'photo', label: 'Photo Editing' },
  { value: 'video', label: 'Video Editing' },
  { value: 'staging', label: 'Virtual Staging' },
  { value: 'other', label: 'Other' },
];

export function ConversionCtaSection() {
  return (
    <section className="bg-surface py-16 md:py-20 lg:py-24" data-section="conversion">
      <Container as="section">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s Make Your Listings Stand Out.
            </h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <li key={step.id} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">{step.icon}</span>
                      <p className="font-semibold">{step.title}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/services"
              className="mt-8 inline-flex text-sm font-semibold text-primary hover:underline"
            >
              Explore Our Services →
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Name" name="name" placeholder="Your name" required />
                <Input label="Email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <Input label="Phone number" name="phone" type="tel" placeholder="(555) 000-0000" />
              <Select
                label="Service for quotation"
                name="service"
                options={serviceOptions}
                defaultValue=""
                required
              />
              <Textarea label="Message" name="message" placeholder="Tell us about your project..." />

              <div className="rounded-xl border-2 border-dashed border-border bg-surface px-4 py-8 text-center">
                <svg className="mx-auto h-8 w-8 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="mt-2 text-sm font-medium text-foreground">
                  Drag &amp; drop files here
                </p>
                <p className="text-xs text-muted">or click to upload</p>
              </div>

              <Input
                label="Or paste a file link"
                name="fileLink"
                placeholder="Google Drive, Dropbox, WeTransfer..."
              />

              <Button type="submit" className="w-full">
                Request a Quote
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
