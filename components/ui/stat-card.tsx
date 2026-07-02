import { Card } from './card';
import { cn } from '@/lib/utils';

export function StatCard({
  label,
  value,
  sub,
  trend,
  positive,
}: {
  label: string;
  value: string;
  sub?: string;
  trend?: string;
  positive?: boolean;
}) {
  return (
    <Card className="p-4 transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <span className="text-[11px] font-bold uppercase tracking-wide text-body/50">
          {label}
        </span>
        {trend && (
          <span
            className={cn(
              'rounded-full px-2 py-0.5 text-[11px] font-bold',
              positive ? 'bg-success/10 text-green-700' : 'bg-danger/10 text-red-700'
            )}
          >
            {trend}
          </span>
        )}
      </div>
      <div
        className={cn(
          'mt-2.5 font-display text-2xl font-extrabold text-headline',
          positive === true && 'text-success',
          positive === false && 'text-danger'
        )}
      >
        {value}
      </div>
      {sub && <div className="mt-1 text-xs text-body/50">{sub}</div>}
    </Card>
  );
}
