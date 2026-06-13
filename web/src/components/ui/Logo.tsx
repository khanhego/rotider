import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils/cn';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  return (
    <Link href="/" className={cn('inline-flex items-center gap-2', className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.08 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z" />
        </svg>
      </span>
      <span
        className={cn(
          'text-sm font-bold tracking-wide',
          variant === 'light' ? 'text-white' : 'text-foreground',
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
