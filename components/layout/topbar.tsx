import { Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white/70 px-8 py-5 backdrop-blur-md">
      <div>
        <h1 className="font-display text-xl font-extrabold text-headline">{title}</h1>
        {subtitle && <p className="mt-0.5 text-xs text-body/50">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-[10px] border border-border bg-surface px-3.5 py-2 text-sm text-body/50 md:flex w-[220px]">
          <Search size={15} />
          Search trades, setups...
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-border bg-surface">
          <Bell size={16} />
        </button>
        <Button className="text-[13.5px]">+ Log trade</Button>
      </div>
    </div>
  );
}
