'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutGrid, BookOpen, Compass, ShieldAlert, BarChart3,
  GraduationCap, Sparkles, Newspaper, MessageSquareHeart,
} from 'lucide-react';

const primaryNav = [
  { href: '/dashboard', label: 'Overview', icon: LayoutGrid },
  { href: '/journal', label: 'Journal', icon: BookOpen },
  { href: '/plan', label: 'Plan', icon: Compass },
  { href: '/guardrails', label: 'Guardrails', icon: ShieldAlert },
  { href: '/analytics', label: 'Analytics', icon: BarChart3 },
];

const growNav = [
  { href: '/academy', label: 'Academy', icon: GraduationCap },
  { href: '/sanctuary', label: 'Sanctuary', icon: Sparkles },
  { href: '/news', label: 'News', icon: Newspaper },
  { href: '/ai-coach', label: 'AI Coach', icon: MessageSquareHeart },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-[236px] flex-shrink-0 flex-col border-r border-border bg-white p-3.5">
      <Link href="/dashboard" className="flex items-center gap-2 px-2.5 pb-5 pt-1.5">
        <svg width="26" height="26" viewBox="0 0 30 30" fill="none">
          <rect x="13.5" y="4" width="3" height="12" rx="1.5" fill="#1A1A1A" />
          <rect x="10" y="7" width="10" height="9" rx="2" fill="#625DF5" />
          <rect x="13.5" y="17" width="3" height="9" rx="1.5" fill="#1A1A1A" />
        </svg>
        <span className="font-display text-[17px] font-extrabold text-headline">Tradix</span>
      </Link>

      <NavGroup items={primaryNav} pathname={pathname} />
      <NavGroup items={growNav} pathname={pathname} label="Grow" />

      <div className="mt-auto border-t border-border pt-3.5">
        <div className="mb-3 rounded-[14px] bg-gradient-to-br from-primary to-secondary p-3.5 text-xs text-white">
          <b className="mb-0.5 block text-[13px]">Session locked in 18m</b>
          Daily loss limit near threshold.
        </div>
        <div className="flex items-center gap-2.5 px-2.5 py-2">
          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gradient-to-br from-soft-purple to-pink" />
          <div>
            <div className="text-[13px] font-bold text-headline">Alex Chen</div>
            <div className="text-[11px] text-body/50">Pro plan</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavGroup({
  items,
  pathname,
  label,
}: {
  items: typeof primaryNav;
  pathname: string;
  label?: string;
}) {
  return (
    <div className="mb-4">
      {label && (
        <div className="mb-1 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-body/40">
          {label}
        </div>
      )}
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname?.startsWith(href);
        return (
          <Link
            key={href}
            href={href as any}
            className={cn(
              'mb-0.5 flex items-center gap-2.5 rounded-[11px] px-3 py-2.5 text-sm font-semibold text-body transition-colors hover:bg-surface hover:text-headline',
              active && 'bg-gradient-to-br from-primary/10 to-secondary/5 text-primary hover:text-primary'
            )}
          >
            <Icon size={17} strokeWidth={2.2} />
            {label}
          </Link>
        );
      })}
    </div>
  );
}
