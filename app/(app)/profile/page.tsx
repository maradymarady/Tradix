import { Topbar } from '@/components/layout/topbar';
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  return (
    <>
      <Topbar title="Profile" />
      <div className="mx-auto max-w-[560px] px-8 py-7">
        <Card>
          <CardHeader title="Your profile" />
          <div className="mb-5 flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-soft-purple to-pink" />
            <Button variant="outline">Change avatar</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <LabeledInput label="Username" defaultValue="alexchen" />
            <LabeledInput label="Email" defaultValue="alex@tradix.app" />
            <LabeledInput label="Timezone" defaultValue="America/New_York" />
            <LabeledInput label="Language" defaultValue="English" />
          </div>
          <Button className="mt-5">Save changes</Button>
        </Card>
        <Card className="mt-4">
          <CardHeader title="Data" />
          <div className="flex gap-3">
            <Button variant="outline">Export my data</Button>
            <Button variant="outline" className="!border-danger !text-danger">Delete account</Button>
          </div>
        </Card>
      </div>
    </>
  );
}

function LabeledInput({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-body/50">{label}</label>
      <input defaultValue={defaultValue} className="w-full rounded-sm border border-border px-3.5 py-2.5 text-sm outline-none focus:border-primary" />
    </div>
  );
}
