import { cn } from '@/lib/utils/cn';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionLabel({ children, className, centered }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'text-xs font-bold uppercase tracking-[0.2em] text-primary',
        centered && 'text-center',
        className,
      )}
    >
      {children}
    </p>
  );
}
