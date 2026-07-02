'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const steps = ['Experience', 'Markets', 'Risk & goals', 'Sessions', 'Psychology'];

const experienceOptions = ['Beginner', 'Intermediate', 'Advanced', 'Professional'];
const marketOptions = ['Forex', 'Futures', 'Equities', 'Options', 'Crypto'];
const sessionOptions = ['Sydney', 'Tokyo', 'London', 'New York'];
const psychOptions = ['Revenge trading', 'Overtrading', 'Fear of missing out', 'Fear of loss'];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    experience: '',
    markets: [] as string[],
    broker: '',
    riskPercent: 1,
    dailyGoal: '',
    weeklyGoal: '',
    monthlyGoal: '',
    sessions: [] as string[],
    psychChallenges: [] as string[],
  });

  function toggle(field: 'markets' | 'sessions' | 'psychChallenges', value: string) {
    setData((d) => ({
      ...d,
      [field]: d[field].includes(value) ? d[field].filter((v) => v !== value) : [...d[field], value],
    }));
  }

  const isLast = step === steps.length - 1;

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 py-12">
      <Card className="w-full max-w-[560px] shadow-md">
        <div className="mb-7 flex items-center gap-1.5">
          {steps.map((s, i) => (
            <div key={s} className={cn('h-1.5 flex-1 rounded-full', i <= step ? 'bg-primary' : 'bg-border')} />
          ))}
        </div>
        <span className="text-xs font-bold uppercase tracking-wide text-primary">
          Step {step + 1} of {steps.length}
        </span>
        <h1 className="mb-6 mt-1.5 font-display text-2xl font-extrabold text-headline">{steps[step]}</h1>

        {step === 0 && (
          <div className="grid grid-cols-2 gap-3">
            {experienceOptions.map((o) => (
              <OptionButton key={o} active={data.experience === o} onClick={() => setData({ ...data, experience: o })}>
                {o}
              </OptionButton>
            ))}
          </div>
        )}

        {step === 1 && (
          <div>
            <div className="mb-5 grid grid-cols-2 gap-3">
              {marketOptions.map((o) => (
                <OptionButton key={o} active={data.markets.includes(o)} onClick={() => toggle('markets', o)}>
                  {o}
                </OptionButton>
              ))}
            </div>
            <label className="mb-1.5 block text-xs font-semibold text-body/70">Broker (optional)</label>
            <input
              value={data.broker}
              onChange={(e) => setData({ ...data, broker: e.target.value })}
              placeholder="e.g. Interactive Brokers"
              className="w-full rounded-sm border border-border px-3.5 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-body/70">Risk per trade: {data.riskPercent}%</label>
              <input
                type="range"
                min={0.25}
                max={5}
                step={0.25}
                value={data.riskPercent}
                onChange={(e) => setData({ ...data, riskPercent: Number(e.target.value) })}
                className="w-full accent-[#625DF5]"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <GoalInput label="Daily goal" value={data.dailyGoal} onChange={(v) => setData({ ...data, dailyGoal: v })} />
              <GoalInput label="Weekly goal" value={data.weeklyGoal} onChange={(v) => setData({ ...data, weeklyGoal: v })} />
              <GoalInput label="Monthly goal" value={data.monthlyGoal} onChange={(v) => setData({ ...data, monthlyGoal: v })} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid grid-cols-2 gap-3">
            {sessionOptions.map((o) => (
              <OptionButton key={o} active={data.sessions.includes(o)} onClick={() => toggle('sessions', o)}>
                {o}
              </OptionButton>
            ))}
          </div>
        )}

        {step === 4 && (
          <div className="grid grid-cols-1 gap-3">
            {psychOptions.map((o) => (
              <OptionButton key={o} active={data.psychChallenges.includes(o)} onClick={() => toggle('psychChallenges', o)}>
                {o}
              </OptionButton>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-between">
          <Button variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
            Back
          </Button>
          {isLast ? (
            <a href="/dashboard"><Button>Build my dashboard</Button></a>
          ) : (
            <Button onClick={() => setStep((s) => s + 1)}>Continue</Button>
          )}
        </div>
      </Card>
    </main>
  );
}

function OptionButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-sm border px-4 py-3 text-left text-sm font-semibold transition-colors',
        active ? 'border-primary bg-primary/5 text-primary' : 'border-border text-body hover:border-soft-purple'
      )}
    >
      {children}
    </button>
  );
}

function GoalInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-body/70">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="$"
        className="w-full rounded-sm border border-border px-3 py-2.5 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
