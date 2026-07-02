import Link from 'next/link';
import { Topbar } from '@/components/layout/topbar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const trades = [
  { id: '1', pair: 'EUR/USD', market: 'Forex', dir: 'Long', setup: 'London breakout', emotion: 'Confident', pnl: '+$412', pos: true, date: 'Jul 2' },
  { id: '2', pair: 'NAS100', market: 'Futures', dir: 'Short', setup: 'Reversal', emotion: 'Calm', pnl: '+$268', pos: true, date: 'Jul 2' },
  { id: '3', pair: 'GBP/JPY', market: 'Forex', dir: 'Long', setup: 'News fade', emotion: 'Anxious', pnl: '-$190', pos: false, date: 'Jul 1' },
  { id: '4', pair: 'XAU/USD', market: 'Futures', dir: 'Long', setup: 'London breakout', emotion: 'Confident', pnl: '+$604', pos: true, date: 'Jun 30' },
  { id: '5', pair: 'USD/CAD', market: 'Forex', dir: 'Short', setup: 'Range fade', emotion: 'Calm', pnl: '+$190', pos: true, date: 'Jun 30' },
];

export default function JournalPage() {
  return (
    <>
      <Topbar title="Journal" subtitle="Every trade, with the context that explains it" />
      <div className="px-8 py-7">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-2">
            {['All', 'Forex', 'Futures', 'Equities', 'Crypto'].map((f, i) => (
              <button key={f} className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold ${i === 0 ? 'border-primary bg-primary/5 text-primary' : 'border-border text-body'}`}>
                {f}
              </button>
            ))}
          </div>
          <Button>+ New entry</Button>
        </div>
        <Card>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wide text-body/50">
                <th className="pb-3 font-bold">Date</th>
                <th className="pb-3 font-bold">Pair</th>
                <th className="pb-3 font-bold">Market</th>
                <th className="pb-3 font-bold">Direction</th>
                <th className="pb-3 font-bold">Setup</th>
                <th className="pb-3 font-bold">Emotion</th>
                <th className="pb-3 font-bold">PnL</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((t) => (
                <tr key={t.id} className="border-t border-border text-sm">
                  <td className="py-3 text-body/60">{t.date}</td>
                  <td className="py-3">
                    <Link href={`/journal/${t.id}`} className="font-bold text-headline hover:text-primary">{t.pair}</Link>
                  </td>
                  <td className="py-3 text-body/70">{t.market}</td>
                  <td className="py-3"><Badge tone={t.dir === 'Long' ? 'success' : 'danger'}>{t.dir}</Badge></td>
                  <td className="py-3 text-body/70">{t.setup}</td>
                  <td className="py-3"><Badge>{t.emotion}</Badge></td>
                  <td className={`py-3 font-mono font-bold ${t.pos ? 'text-success' : 'text-danger'}`}>{t.pnl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
