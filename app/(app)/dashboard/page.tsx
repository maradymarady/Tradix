import { Topbar } from '@/components/layout/topbar';
import { Card, CardHeader } from '@/components/ui/card';
import { StatCard } from '@/components/ui/stat-card';
import { Badge } from '@/components/ui/badge';

const stats = [
  { label: "Today's PnL", value: '+$1,284', sub: '3 trades closed', trend: '▲ 3.1%', positive: true },
  { label: 'Weekly PnL', value: '+$4,920', sub: '14 trades closed', trend: '▲ 8.4%', positive: true },
  { label: 'Monthly PnL', value: '+$11,430', sub: '52 trades closed', trend: '▼ 1.2%', positive: false },
  { label: 'Win Rate', value: '64%', sub: '32W / 18L' },
  { label: 'Average RR', value: '2.4', sub: 'Target 2.0+' },
  { label: 'Profit Factor', value: '2.1', sub: 'Gross win / gross loss' },
  { label: 'Expectancy', value: '+$94', sub: 'Per trade, 30d avg', positive: true },
  { label: 'Discipline Score', value: '91', sub: 'Top 12% this week' },
];

const trades = [
  { pair: 'EUR/USD', dir: 'Long', rr: '2.8', hold: '34m', pnl: '+$412', pos: true },
  { pair: 'NAS100', dir: 'Short', rr: '1.4', hold: '1h 12m', pnl: '+$268', pos: true },
  { pair: 'GBP/JPY', dir: 'Long', rr: '-1.0', hold: '18m', pnl: '-$190', pos: false },
  { pair: 'XAU/USD', dir: 'Long', rr: '3.2', hold: '52m', pnl: '+$604', pos: true },
  { pair: 'USD/CAD', dir: 'Short', rr: '2.0', hold: '29m', pnl: '+$190', pos: true },
];

const scores = [
  { label: 'Discipline', value: 91 },
  { label: 'Consistency', value: 78 },
  { label: 'Mindset', value: 84 },
];

export default function DashboardPage() {
  return (
    <>
      <Topbar title="Good morning, Alex" subtitle="Tuesday, July 2 · London session opens in 42 minutes" />
      <div className="px-8 py-7">
        <div className="mb-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        <Card className="mb-4 flex gap-4 border-lavender bg-gradient-to-br from-[#f6f5ff] to-[#fdf3fc]">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-primary to-secondary text-lg text-white">✦</div>
          <div>
            <h4 className="mb-1.5 text-sm font-bold text-headline">AI Coach summary</h4>
            <p className="text-[13.5px] leading-relaxed text-[#4a4a52]">
              Your winners this week came almost entirely from the London breakout setup — three of your four losses
              happened in trades entered after two losses in a row. Consider auto-applying the cooldown timer after a
              second consecutive loss.
            </p>
            <span className="mt-2.5 inline-block rounded-full border border-lavender bg-white px-2.5 py-1 text-[11px] font-bold text-primary">
              Based on 14 trades this week
            </span>
          </div>
        </Card>

        <div className="mb-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader title="Performance" subtitle="Daily P&L, last 14 sessions" />
            <div className="flex h-[180px] items-end gap-2.5 pt-2">
              {[40, 20, 60, 80, 30, 15, 90, 55, 70, 25, 85, 60, 95, 45].map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className="w-full rounded-t-[8px] rounded-b-[4px] bg-gradient-to-t from-primary to-secondary"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[10px] font-semibold text-body/40">D{i + 1}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader title="Behavior scores" />
            <div className="flex flex-col gap-4">
              {scores.map((s) => (
                <div key={s.label}>
                  <div className="mb-1.5 flex justify-between text-[13px] font-bold text-headline">
                    <span>{s.label}</span>
                    <span>{s.value}</span>
                  </div>
                  <div className="h-[7px] overflow-hidden rounded-full border border-border bg-surface">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${s.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between border-t border-border pt-4 text-[12.5px]">
              <div>
                <div className="text-body/50">Best setup</div>
                <div className="mt-0.5 font-bold text-headline">London breakout</div>
              </div>
              <div>
                <div className="text-body/50">Worst setup</div>
                <div className="mt-0.5 font-bold text-headline">News fade</div>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <CardHeader title="Recent trades" subtitle="Last 5 closed" action={<a href="/journal" className="text-xs font-bold text-primary">View journal →</a>} />
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wide text-body/50">
                <th className="pb-2.5 font-bold">Pair</th>
                <th className="pb-2.5 font-bold">Direction</th>
                <th className="pb-2.5 font-bold">RR</th>
                <th className="pb-2.5 font-bold">Hold</th>
                <th className="pb-2.5 font-bold">PnL</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((t) => (
                <tr key={t.pair} className="border-t border-border text-sm">
                  <td className="py-2.5 font-bold text-headline">{t.pair}</td>
                  <td className="py-2.5"><Badge tone={t.dir === 'Long' ? 'success' : 'danger'}>{t.dir}</Badge></td>
                  <td className="py-2.5">{t.rr}</td>
                  <td className="py-2.5">{t.hold}</td>
                  <td className={`py-2.5 font-mono font-bold ${t.pos ? 'text-success' : 'text-danger'}`}>{t.pnl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
