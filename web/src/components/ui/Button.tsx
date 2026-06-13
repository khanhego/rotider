import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  type?: never;
}

interface ButtonElementProps extends ButtonBaseProps {
  href?: never;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export type ButtonProps = ButtonLinkProps | ButtonElementProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  outline:
    'border-2 border-primary bg-transparent text-primary hover:bg-primary-light',
  ghost: 'bg-transparent text-foreground hover:text-primary',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = 'button', onClick } = props as ButtonElementProps;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
