'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className={cn('relative overflow-hidden rounded-2xl', className)}>
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={afterSrc}
          alt={`${alt} — after`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 640px"
          priority
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={`${alt} — before`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 640px"
            priority
          />
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          After
        </span>

        <div
          className="absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-lg"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary shadow-md">
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M8 7l-4 5 4 5M16 7l4 5-4 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={5}
          max={95}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Drag to compare before and after"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-white/95 p-1 shadow-lg backdrop-blur">
        {['Photo', 'Video', 'Virtual'].map((tab) => (
          <button
            key={tab}
            type="button"
            className={cn(
              'rounded-full px-4 py-1.5 text-xs font-semibold transition-colors',
              tab === 'Photo' ? 'bg-primary text-white' : 'text-muted hover:text-foreground',
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
