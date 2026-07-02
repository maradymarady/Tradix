import { Topbar } from '@/components/layout/topbar';
import { Card } from '@/components/ui/card';

const lessons = [
  { title: 'Position sizing fundamentals', category: 'Risk management', progress: 100 },
  { title: 'Reading your own emotional state', category: 'Psychology', progress: 60 },
  { title: 'Building a trading plan that sticks', category: 'Strategy', progress: 30 },
  { title: 'Understanding expectancy', category: 'Risk management', progress: 0 },
  { title: 'Recovering from a losing streak', category: 'Psychology', progress: 0 },
  { title: 'Session timing and liquidity', category: 'Strategy', progress: 0 },
];

export default function AcademyPage() {
  return (
    <>
      <Topbar title="Academy" subtitle="Lessons, quizzes, and certificates for the process side of trading" />
      <div className="grid gap-4 px-8 py-7 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((l) => (
          <Card key={l.title} className="hover:-translate-y-0.5 hover:shadow-md transition-all">
            <span className="text-[11px] font-bold uppercase tracking-wide text-primary">{l.category}</span>
            <h3 className="mb-4 mt-2 text-sm font-bold text-headline">{l.title}</h3>
            <div className="h-1.5 overflow-hidden rounded-full bg-surface">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${l.progress}%` }} />
            </div>
            <div className="mt-2 text-xs text-body/40">{l.progress}% complete</div>
          </Card>
        ))}
      </div>
    </>
  );
}
