import { Topbar } from '@/components/layout/topbar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const entries = [
  { title: 'London breakout — refined entry rules', type: 'Strategy', updated: '2d ago' },
  { title: 'Trading in the Zone — chapter 4 notes', type: 'Book', updated: '4d ago' },
  { title: 'Why I keep exiting winners early', type: 'Mindset', updated: '1w ago' },
  { title: 'NFP week trade idea — USD/JPY', type: 'Idea', updated: '1w ago' },
];

export default function NotebookPage() {
  return (
    <>
      <Topbar title="Notebook" subtitle="Ideas, strategies, and lessons worth keeping" />
      <div className="px-8 py-7">
        <div className="mb-5 flex justify-end"><Button>+ New note</Button></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((e) => (
            <Card key={e.title} className="hover:-translate-y-0.5 hover:shadow-md transition-all">
              <Badge>{e.type}</Badge>
              <h3 className="mt-3 text-sm font-bold text-headline">{e.title}</h3>
              <p className="mt-3 text-xs text-body/40">Updated {e.updated}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
