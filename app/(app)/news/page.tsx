import { Topbar } from '@/components/layout/topbar';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const events = [
  { time: '08:30', currency: 'USD', event: 'Non-Farm Payrolls', impact: 'high' as const },
  { time: '10:00', currency: 'EUR', event: 'ECB Interest Rate Decision', impact: 'high' as const },
  { time: '12:30', currency: 'GBP', event: 'Retail Sales m/m', impact: 'medium' as const },
  { time: '14:00', currency: 'CAD', event: 'Employment Change', impact: 'medium' as const },
];

export default function NewsPage() {
  return (
    <>
      <Topbar title="News" subtitle="Economic calendar and your watchlist" />
      <div className="grid gap-4 px-8 py-7 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader title="Today's high-impact events" />
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wide text-body/50">
                <th className="pb-2.5 font-bold">Time</th>
                <th className="pb-2.5 font-bold">Currency</th>
                <th className="pb-2.5 font-bold">Event</th>
                <th className="pb-2.5 font-bold">Impact</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e) => (
                <tr key={e.event} className="border-t border-border text-sm">
                  <td className="py-3 font-mono text-body/70">{e.time}</td>
                  <td className="py-3 font-bold text-headline">{e.currency}</td>
                  <td className="py-3 text-body">{e.event}</td>
                  <td className="py-3"><Badge tone={e.impact === 'high' ? 'danger' : 'warning'}>{e.impact}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card>
          <CardHeader title="Watchlist" />
          <div className="flex flex-col gap-3">
            {['EUR/USD', 'XAU/USD', 'NAS100', 'GBP/JPY'].map((s) => (
              <div key={s} className="flex items-center justify-between border-t border-border pt-3 first:border-t-0 first:pt-0">
                <span className="text-sm font-bold text-headline">{s}</span>
                <span className="font-mono text-sm text-success">+0.34%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
