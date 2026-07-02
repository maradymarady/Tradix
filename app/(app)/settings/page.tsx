import { Topbar } from '@/components/layout/topbar';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <>
      <Topbar title="Settings" />
      <div className="mx-auto flex max-w-[640px] flex-col gap-4 px-8 py-7">
        <Card>
          <CardHeader title="Security" />
          <Row label="Password" sub="Last changed 3 months ago" action={<Button variant="outline">Change</Button>} />
          <Row label="Two-factor authentication" sub="Add an extra layer of security" action={<Badge tone="warning">Not enabled</Badge>} />
        </Card>
        <Card>
          <CardHeader title="Connected brokers" />
          <Row label="Interactive Brokers" sub="Connected · syncing fills automatically" action={<Badge tone="success">Connected</Badge>} />
          <Row label="MetaTrader 5" sub="Not connected" action={<Button variant="outline">Connect</Button>} />
        </Card>
        <Card>
          <CardHeader title="API keys" />
          <Row label="Personal API key" sub="For custom integrations" action={<Button variant="outline">Generate</Button>} />
        </Card>
        <Card>
          <CardHeader title="Notifications" />
          <Row label="Guardrail alerts" sub="Email + push" action={<input type="checkbox" defaultChecked className="h-4 w-4 accent-[#625DF5]" />} />
          <Row label="Daily coach summary" sub="Email at 6am local time" action={<input type="checkbox" defaultChecked className="h-4 w-4 accent-[#625DF5]" />} />
        </Card>
      </div>
    </>
  );
}

function Row({ label, sub, action }: { label: string; sub: string; action: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-t border-border py-3.5 first:border-t-0 first:pt-0">
      <div>
        <div className="text-sm font-bold text-headline">{label}</div>
        <div className="mt-0.5 text-xs text-body/50">{sub}</div>
      </div>
      {action}
    </div>
  );
}
