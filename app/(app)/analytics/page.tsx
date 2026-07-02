import { Topbar } from '@/components/layout/topbar';
import { Card, CardHeader } from '@/components/ui/card';

export default function AnalyticsPage() {
  return (
    <>
      <Topbar title="Analytics" subtitle="The shape of your trading, not just the total" />
      <div className="grid gap-4 px-8 py-7 lg:grid-cols-2">
        <Card>
          <CardHeader title="Consistency heatmap" subtitle="Last 8 weeks" />
          <div className="mt-3.5 grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1">
            {Array.from({ length: 91 }).map((_, i) => {
              const r = Math.random();
              const bg = r > 0.82 ? 'bg-success' : r > 0.65 ? 'bg-soft-purple' : r > 0.5 ? 'bg-lavender' : r > 0.4 ? 'bg-danger' : 'bg-border';
              return <div key={i} className={`aspect-square rounded-[4px] ${bg}`} />;
            })}
          </div>
        </Card>
        <Card>
          <CardHeader title="Setup analysis" />
          <div className="flex flex-col gap-3">
            {[
              { setup: 'London breakout', wr: 74, trades: 23 },
              { setup: 'Range fade', wr: 61, trades: 14 },
              { setup: 'News fade', wr: 38, trades: 8 },
              { setup: 'Reversal', wr: 55, trades: 11 },
            ].map((s) => (
              <div key={s.setup}>
                <div className="mb-1 flex justify-between text-xs font-bold text-headline">
                  <span>{s.setup} <span className="font-normal text-body/40">· {s.trades} trades</span></span>
                  <span>{s.wr}% WR</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${s.wr}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader title="Mistake breakdown" />
          <div className="flex flex-col gap-2.5">
            {[
              { label: 'Sizing errors', pct: 42, color: 'bg-primary' },
              { label: 'Early exit', pct: 26, color: 'bg-pink' },
              { label: 'Chased entry', pct: 18, color: 'bg-warning' },
              { label: 'Other', pct: 14, color: 'bg-border' },
            ].map((m) => (
              <div key={m.label} className="flex items-center gap-2.5 text-sm font-semibold text-headline">
                <span className={`h-2.5 w-2.5 rounded-full ${m.color}`} />
                {m.label} — {m.pct}%
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader title="Time analysis" />
          <p className="text-sm leading-relaxed text-body">
            Your win rate peaks between 8:00–10:30am (London open) at 71%, and drops to 34% after 1:00pm. Consider
            restricting entries to your highest-expectancy window.
          </p>
        </Card>
      </div>
    </>
  );
}
