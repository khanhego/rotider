'use client';

import { useState } from 'react';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils/cn';

const services = [
  {
    id: 'hdr',
    title: 'HDR',
    description: 'Blend multiple exposures for perfectly balanced interior and exterior shots.',
    before: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=900&fit=crop',
    after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=900&fit=crop',
    benefits: ['Perfect exposure balance', 'True-to-life colors', 'Window view preservation', 'Natural shadow detail'],
  },
  {
    id: 'dusk',
    title: 'Day-to-dusk',
    description: 'Transform daytime exteriors into stunning twilight scenes that grab attention.',
    before: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop',
    after: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=900&fit=crop',
    benefits: ['Dramatic sky replacement', 'Warm window glow', 'Enhanced curb appeal', 'MLS-ready twilight look'],
  },
  {
    id: 'retouch',
    title: 'Retouching',
    description: 'Fine-tune colors, remove distractions, and polish every detail.',
    before: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop',
    after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=900&fit=crop',
    benefits: ['Color correction', 'Lens distortion fix', 'Clutter cleanup', 'Consistent style across sets'],
  },
  {
    id: 'remove',
    title: 'Item removal',
    description: 'Remove unwanted objects, cords, and distractions seamlessly.',
    before: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=900&fit=crop',
    after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=900&fit=crop',
    benefits: ['Object removal', 'Wire & cord cleanup', 'Reflection correction', 'Clean, move-in ready look'],
  },
  {
    id: 'sky',
    title: 'Sky replacement',
    description: 'Replace dull skies with vibrant blue or dramatic sunset backgrounds.',
    before: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=900&fit=crop',
    after: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=900&fit=crop',
    benefits: ['Blue sky enhancement', 'Natural cloud blending', 'Consistent weather look', 'Exterior wow factor'],
  },
  {
    id: 'twilight',
    title: 'Twilight',
    description: 'Create magazine-quality dusk shots without scheduling evening shoots.',
    before: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop',
    after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=900&fit=crop',
    benefits: ['Virtual twilight conversion', 'Lit window effects', 'Premium listing presentation', 'No reshoot needed'],
  },
] as const;

type ServiceId = (typeof services)[number]['id'];

export function PhotoEditingServicesSection() {
  const [activeId, setActiveId] = useState<ServiceId>(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section className="bg-dark py-16 md:py-20 lg:py-24" data-section="photo-services">
      <Container as="section">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Our Services</h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  className={cn(
                    'w-full rounded-xl px-5 py-4 text-left transition-colors',
                    activeId === service.id
                      ? 'bg-primary/20 border border-primary/40'
                      : 'border border-transparent hover:bg-white/5',
                  )}
                >
                  <p className={cn('font-semibold', activeId === service.id ? 'text-primary' : 'text-white')}>
                    {service.title}
                  </p>
                  <p className="mt-1 text-sm text-dark-muted">{service.description}</p>
                </button>
              </li>
            ))}
          </ul>

          <div>
            <BeforeAfterSlider
              beforeSrc={active.before}
              afterSrc={active.after}
              alt={`${active.title} photo editing`}
            />
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {active.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-dark-muted">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
