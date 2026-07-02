import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const features = [
  { icon: '📓', title: 'Structured journal', body: 'Log entries, exits, risk, emotion, and setup for every trade, with screenshots and notes attached automatically.' },
  { icon: '🛡️', title: 'Guardrails', body: 'Set daily and weekly loss limits, trade caps, and cooldown timers. Tradix locks you out before revenge trading starts.' },
  { icon: '📈', title: 'Live risk tools', body: 'Position sizing, stop-loss, and reward-to-risk calculated in real time next to a live chart.' },
  { icon: '🧭', title: 'Trading plan', body: 'Codify your rules and routine once — Tradix checks every trade against the plan you actually wrote.' },
  { icon: '🧠', title: 'AI coach', body: 'A daily read on your mistakes and patterns, built from your own journal — not generic advice.' },
  { icon: '🕯️', title: 'Sanctuary', body: 'Mood tracking, breathing exercises, and a focus mode for the sessions where you are the hard part.' },
];

const plans = [
  { name: 'Starter', price: '$0', desc: 'For traders getting disciplined', feats: ['Unlimited manual journal entries', 'Core guardrails', '30-day trade history', 'Basic analytics'] },
  { name: 'Pro', price: '$29', desc: 'For traders building an edge', featured: true, feats: ['Everything in Starter', 'AI Coach & daily insights', 'Unlimited history', 'Full guardrail suite', 'Advanced analytics'] },
  { name: 'Funded', price: '$59', desc: 'For prop firm traders', feats: ['Everything in Pro', 'Multi-account tracking', 'Prop firm rule presets', 'Priority support'] },
];

export default function LandingPage() {
  return (
    <main className="bg-bg">
      <header className="sticky top-0 z-50 border-b border-border bg-white/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-4">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-headline">
            <svg width="26" height="26" viewBox="0 0 30 30" fill="none">
              <rect x="13.5" y="4" width="3" height="12" rx="1.5" fill="#1A1A1A" />
              <rect x="10" y="7" width="10" height="9" rx="2" fill="#625DF5" />
              <rect x="13.5" y="17" width="3" height="9" rx="1.5" fill="#1A1A1A" />
            </svg>
            Tradix
          </Link>
          <div className="hidden gap-9 text-sm font-semibold text-body md:flex">
            <a href="#features" className="hover:text-headline">Features</a>
            <a href="#pricing" className="hover:text-headline">Pricing</a>
            <a href="#faq" className="hover:text-headline">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-headline hover:text-primary">Log in</Link>
            <Link href="/login"><Button>Start free trial</Button></Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden px-8 pb-16 pt-28 text-center">
        <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(98,93,245,0.14),rgba(240,210,238,0.10)_55%,transparent_75%)] blur-md" />
        <div className="relative mx-auto max-w-[760px]">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(98,93,245,0.14)]" />
            Now with AI Coach
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] text-headline sm:text-6xl">
            Master your discipline.<br />
            <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">Master your edge.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[540px] text-lg leading-relaxed text-body">
            Tradix is the trading journal built for the part of trading that actually decides outcomes — your process, your psychology, your rules.
          </p>
          <div className="mt-8 flex justify-center gap-3.5">
            <Link href="/login"><Button>Start free trial</Button></Link>
            <Button variant="outline">Watch a 90s demo</Button>
          </div>
          <p className="mt-3 text-xs text-body/50">No credit card required · Cancel anytime</p>
        </div>
      </section>

      <section className="px-8 pb-28">
        <Card className="mx-auto max-w-[1020px] overflow-hidden !p-0 shadow-lg">
          <div className="flex items-center gap-2 border-b border-border bg-surface px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <div className="grid gap-6 p-6 sm:grid-cols-4">
            {[
              { l: "Today's PnL", v: '+$1,284', pos: true },
              { l: 'Win Rate', v: '64%' },
              { l: 'Discipline Score', v: '91' },
              { l: 'Avg RR', v: '2.4' },
            ].map((s) => (
              <div key={s.l} className="rounded-sm border border-border bg-surface p-4">
                <div className="text-[11px] font-bold uppercase tracking-wide text-body/50">{s.l}</div>
                <div className={`mt-1.5 font-display text-xl font-extrabold ${s.pos ? 'text-success' : 'text-headline'}`}>{s.v}</div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section id="features" className="px-8 py-24">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <span className="text-xs font-bold uppercase tracking-wide text-primary">Platform</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-headline">Everything a serious trader tracks</h2>
          <p className="mt-3.5 text-body">From execution to psychology, Tradix replaces the spreadsheet, the screenshots, and the rules you keep breaking.</p>
        </div>
        <div className="mx-auto grid max-w-[1180px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="transition-all hover:-translate-y-1 hover:border-lavender hover:shadow-md">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] bg-gradient-to-br from-lavender to-pink text-lg">{f.icon}</div>
              <h3 className="mb-2 text-lg font-bold text-headline">{f.title}</h3>
              <p className="text-sm leading-relaxed text-body">{f.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="px-8 py-24">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <span className="text-xs font-bold uppercase tracking-wide text-primary">Pricing</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-headline">Plans that scale with your trading</h2>
        </div>
        <div className="mx-auto grid max-w-[1020px] gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className={p.featured ? '!border-primary shadow-lg lg:-translate-y-2.5' : ''}>
              <h3 className="text-[17px] font-bold text-headline">{p.name}</h3>
              <p className="mb-5 mt-1 text-[13.5px] text-body/50">{p.desc}</p>
              <div className="font-display text-4xl font-extrabold text-headline">
                {p.price}
                <span className="text-base font-semibold text-body/50">/mo</span>
              </div>
              <ul className="my-6 flex flex-col gap-3">
                {p.feats.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-body">
                    <span className="font-bold text-primary">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/login">
                <Button variant={p.featured ? 'primary' : 'outline'} className="w-full">
                  {p.featured ? 'Start free trial' : 'Get started'}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto max-w-[1020px] rounded-card bg-gradient-to-br from-primary to-secondary px-10 py-16 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Start trading like the process matters.</h2>
          <p className="mt-3 text-white/85">Because it's the only part you actually control.</p>
          <Link href="/login">
            <Button variant="outline" className="mt-7 !border-none !bg-white !text-primary">Start your free trial</Button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-border px-8 py-12">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-6 text-sm text-body/50 sm:flex-row">
          <span>© 2026 Tradix. All rights reserved.</span>
          <span>Built for disciplined traders.</span>
        </div>
      </footer>
    </main>
  );
}
