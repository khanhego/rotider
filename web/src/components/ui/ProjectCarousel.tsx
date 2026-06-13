'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface ProjectCard {
  id: string;
  image: string;
  address: string;
  location: string;
}

interface ProjectCarouselProps {
  projects: ProjectCard[];
  className?: string;
}

export function ProjectCarousel({ projects, className }: ProjectCarouselProps) {
  const [active, setActive] = useState(0);
  const perPage = 4;
  const maxIndex = Math.max(0, projects.length - perPage);

  const visible = projects.slice(active, active + perPage);

  return (
    <div className={cn('relative', className)}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={project.image}
                alt={project.address}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 280px"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-white">{project.address}</p>
              <p className="mt-1 text-xs text-dark-muted">{project.location}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setActive((i) => Math.max(0, i - 1))}
          disabled={active === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
          aria-label="Previous projects"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                active === i ? 'bg-primary' : 'bg-white/30',
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActive((i) => Math.min(maxIndex, i + 1))}
          disabled={active >= maxIndex}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
          aria-label="Next projects"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
