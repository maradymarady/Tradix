import { Topbar } from '@/components/layout/topbar';
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SanctuaryPage() {
  return (
    <>
      <Topbar title="Sanctuary" subtitle="For the sessions where you're the hard part" />
      <div className="grid gap-4 px-8 py-7 lg:grid-cols-2">
        <Card>
          <CardHeader title="How are you feeling?" />
          <div className="flex justify-between gap-2">
            {['😣', '😕', '😐', '🙂', '😄'].map((e, i) => (
              <button key={i} className="flex h-12 w-12 items-center justify-center rounded-sm border border-border text-xl hover:border-primary">
                {e}
              </button>
            ))}
          </div>
          <div className="mt-5">
            <label className="mb-1.5 block text-xs font-semibold text-body/50">Stress level</label>
            <input type="range" min={1} max={10} defaultValue={4} className="w-full accent-[#625DF5]" />
          </div>
        </Card>
        <Card>
          <CardHeader title="Quick reset" />
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline">🧘 Breathing exercise</Button>
            <Button variant="outline">🎵 Focus music</Button>
            <Button variant="outline">🕯️ Meditation</Button>
            <Button variant="outline">🎯 Focus mode</Button>
          </div>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader title="Gratitude & journal" />
          <textarea
            rows={4}
            placeholder="What's one thing that went well today, trading or otherwise?"
            className="w-full resize-none rounded-sm border border-border p-3.5 text-sm outline-none focus:border-primary"
          />
          <Button className="mt-3">Save entry</Button>
        </Card>
      </div>
    </>
  );
}
