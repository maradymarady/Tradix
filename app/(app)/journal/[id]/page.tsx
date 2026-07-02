import { Topbar } from '@/components/layout/topbar';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function TradeDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Topbar title={`Trade #${params.id}`} subtitle="EUR/USD · Long · Jul 2, 2026" />
      <div className="grid gap-4 px-8 py-7 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader title="Execution" />
            <div className="grid grid-cols-3 gap-4 text-sm">
              <Field label="Entry" value="1.0842" />
              <Field label="Exit" value="1.0891" />
              <Field label="Stop loss" value="1.0818" />
              <Field label="Take profit" value="1.0895" />
              <Field label="Risk" value="$150" />
              <Field label="Reward" value="$412" />
              <Field label="RR" value="2.8" />
              <Field label="Hold time" value="34m" />
              <Field label="PnL" value="+$412" positive />
            </div>
          </Card>
          <Card>
            <CardHeader title="Before-trade notes" />
            <p className="text-sm leading-relaxed text-body">
              London breakout setup confirmed on the 15m — price swept the Asia low and reclaimed the range. Waiting for a
              retest of the level before entry, sized at 1% risk per plan.
            </p>
          </Card>
          <Card>
            <CardHeader title="After-trade notes & lessons" />
            <p className="text-sm leading-relaxed text-body">
              Followed the plan exactly — entered on retest, held through the first pullback instead of exiting early.
              Lesson: the setups that work are the ones I don't second-guess mid-trade.
            </p>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader title="Context" />
            <div className="flex flex-col gap-3 text-sm">
              <Field label="Setup" value="London breakout" />
              <Field label="Emotion" value="Confident" />
              <Field label="Confidence" value="8 / 10" />
              <div>
                <div className="mb-1.5 text-xs font-semibold text-body/50">Tags</div>
                <div className="flex flex-wrap gap-1.5">
                  <Badge>breakout</Badge>
                  <Badge>london</Badge>
                  <Badge>plan-followed</Badge>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <CardHeader title="AI analysis" />
            <p className="text-sm leading-relaxed text-body">
              This trade matches your highest-expectancy setup this month. Entry timing was within your usual variance —
              no signs of hesitation or early trigger.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

function Field({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div>
      <div className="text-xs font-semibold text-body/50">{label}</div>
      <div className={`mt-1 font-mono font-bold ${positive ? 'text-success' : 'text-headline'}`}>{value}</div>
    </div>
  );
}
