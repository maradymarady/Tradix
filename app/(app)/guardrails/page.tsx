import { Topbar } from '@/components/layout/topbar';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const guardrails = [
  { name: 'Daily loss limit', sub: '$500 max · $210 used', status: 'On track', tone: 'success' as const },
  { name: 'Weekly loss limit', sub: '$1,500 max · $340 used', status: 'On track', tone: 'success' as const },
  { name: 'Max trades per day', sub: '3 of 4 trades taken', status: 'Near limit', tone: 'warning' as const },
  { name: 'Cooldown timer', sub: 'Active after last loss', status: '18:42 left', tone: 'warning' as const },
  { name: 'Session window', sub: 'London + New York only', status: 'Within session', tone: 'success' as const },
];

const violations = [
  { title: 'Exceeded max trade count', sub: '5 trades vs. 4 planned · Tuesday' },
  { title: 'Entered outside session window', sub: 'GBP/JPY short at 11:42pm · Monday' },
  { title: 'Skipped pre-trade checklist', sub: 'XAU/USD long · Sunday' },
];

export default function GuardrailsPage() {
  return (
    <>
      <Topbar title="Guardrails" subtitle="The limits that keep a bad day from becoming a bad month" />
      <div className="grid gap-4 px-8 py-7 lg:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardHeader title="Active guardrails" />
          {guardrails.map((g, i) => (
            <div key={g.name} className={`flex items-center justify-between py-3.5 ${i > 0 ? 'border-t border-border' : ''}`}>
              <div>
                <div className="text-sm font-bold text-headline">{g.name}</div>
                <div className="mt-0.5 text-xs text-body/50">{g.sub}</div>
              </div>
              <Badge tone={g.tone}>{g.status}</Badge>
            </div>
          ))}
        </Card>
        <Card>
          <CardHeader title="Recent rule violations" />
          {violations.map((v, i) => (
            <div key={v.title} className={`flex gap-3 py-3 ${i > 0 ? 'border-t border-border' : ''}`}>
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-danger" />
              <div>
                <div className="text-sm font-bold text-headline">{v.title}</div>
                <div className="mt-0.5 text-xs text-body/50">{v.sub}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}
