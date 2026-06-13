import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-accent text-white hover:opacity-90',
  outline:
    'border border-slate-300 bg-transparent text-foreground hover:border-primary hover:text-primary',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
