import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-br from-primary to-secondary text-white shadow-sm hover:shadow-md hover:-translate-y-0.5',
  outline: 'bg-white border border-border text-headline hover:border-soft-purple hover:bg-surface',
  ghost: 'bg-transparent text-headline hover:text-primary',
};

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-2.5 text-sm font-bold transition-all',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
