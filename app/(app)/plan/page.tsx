import { Topbar } from '@/components/layout/topbar';
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const rules = [
  'Never risk more than 1% of account on a single trade',
  'No trades outside London or New York sessions',
  'Max 4 trades per day',
  'Mandatory 20-minute cooldown after 2 consecutive losses',
];

const checklist = [
  'Reviewed economic calendar',
  'Set daily loss limit',
  'Confirmed setup on higher timeframe',
  'Wrote pre-trade thesis',
];

export default function PlanPage() {
  return (
    <>
      <Topbar title="Trading Plan" subtitle="The rules you set for yourself, in writing" />
      <div className="grid gap-4 px-8 py-7 lg:grid-cols-2">
        <Card>
          <CardHeader title="Risk rules" action={<Button variant="ghost" className="!p-0 !text-xs">Edit</Button>} />
          <ul className="flex flex-col gap-3">
            {rules.map((r) => (
              <li key={r} className="flex gap-2.5 text-sm text-body">
                <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {r}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardHeader title="Pre-trade checklist" action={<Button variant="ghost" className="!p-0 !text-xs">Edit</Button>} />
          <ul className="flex flex-col gap-3">
            {checklist.map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-body">
                <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[6px] border border-border text-[10px]" />
                {c}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardHeader title="Allowed sessions" />
          <div className="flex flex-wrap gap-2">
            {['London', 'New York'].map((s) => (
              <span key={s} className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">{s}</span>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader title="Goals" />
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div><div className="text-body/50">Daily</div><div className="mt-1 font-bold text-headline">$300</div></div>
            <div><div className="text-body/50">Weekly</div><div className="mt-1 font-bold text-headline">$1,500</div></div>
            <div><div className="text-body/50">Monthly</div><div className="mt-1 font-bold text-headline">$6,000</div></div>
          </div>
        </Card>
      </div>
    </>
  );
}
