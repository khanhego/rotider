import { cn } from '@/lib/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section';
}

export function Container({
  children,
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn('mx-auto w-full max-w-[--container-max] px-4 md:px-6 lg:px-8', className)}
    >
      {children}
    </Component>
  );
}
