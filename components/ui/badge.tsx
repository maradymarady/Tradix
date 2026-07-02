import { cn } from '@/lib/utils';

export function Badge({
  children,
  tone = 'default',
}: {
  children: React.ReactNode;
  tone?: 'default' | 'success' | 'warning' | 'danger';
}) {
  const tones = {
    default: 'bg-surface text-body border border-border',
    success: 'bg-success/10 text-green-700',
    warning: 'bg-warning/10 text-amber-700',
    danger: 'bg-danger/10 text-red-700',
  };
  return (
    <span className={cn('rounded-full px-2.5 py-1 text-[11px] font-bold', tones[tone])}>
      {children}
    </span>
  );
}
