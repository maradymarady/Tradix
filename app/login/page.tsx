'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else window.location.href = '/dashboard';
  }

  async function handleOAuth(provider: 'google' | 'apple') {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/onboarding` },
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6">
      <Card className="w-full max-w-[400px] shadow-md">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2">
          <svg width="26" height="26" viewBox="0 0 30 30" fill="none">
            <rect x="13.5" y="4" width="3" height="12" rx="1.5" fill="#1A1A1A" />
            <rect x="10" y="7" width="10" height="9" rx="2" fill="#625DF5" />
            <rect x="13.5" y="17" width="3" height="9" rx="1.5" fill="#1A1A1A" />
          </svg>
          <span className="font-display text-lg font-extrabold text-headline">Tradix</span>
        </Link>
        <h1 className="text-center text-xl font-bold text-headline">Welcome back</h1>
        <p className="mb-6 mt-1 text-center text-sm text-body/60">Log in to keep your streak going.</p>

        <div className="mb-4 flex flex-col gap-2.5">
          <Button variant="outline" className="w-full" onClick={() => handleOAuth('google')} type="button">
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full" onClick={() => handleOAuth('apple')} type="button">
            Continue with Apple
          </Button>
        </div>

        <div className="my-5 flex items-center gap-3 text-xs text-body/40">
          <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={handleEmailLogin} className="flex flex-col gap-3">
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-sm border border-border px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-sm border border-border px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-1.5 text-body/60">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="font-semibold text-primary">Forgot password?</a>
          </div>
          {error && <p className="text-xs text-danger">{error}</p>}
          <Button type="submit" disabled={loading} className="mt-1 w-full">
            {loading ? 'Logging in…' : 'Log in'}
          </Button>
        </form>
        <p className="mt-6 text-center text-xs text-body/50">
          New to Tradix? <Link href="/onboarding" className="font-semibold text-primary">Create an account</Link>
        </p>
      </Card>
    </main>
  );
}
