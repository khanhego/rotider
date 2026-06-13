import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

interface BeforeAfterPairProps {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  className?: string;
}

export function BeforeAfterPair({ beforeSrc, afterSrc, alt, className }: BeforeAfterPairProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-3', className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image src={beforeSrc} alt={`${alt} before`} fill className="object-cover" sizes="(max-width: 768px) 45vw, 300px" />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
          Before
        </span>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image src={afterSrc} alt={`${alt} after`} fill className="object-cover" sizes="(max-width: 768px) 45vw, 300px" />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-white">
          After
        </span>
      </div>
    </div>
  );
}
