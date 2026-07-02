import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-card border border-border bg-card p-6 shadow-sm',
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h3 className="text-[15px] font-bold text-headline">{title}</h3>
        {subtitle && <p className="mt-0.5 text-xs text-body/70">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
