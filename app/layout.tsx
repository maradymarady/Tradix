import type { Metadata } from 'next';
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight', weight: ['600', '700', '800'] });
const jbMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jbmono', weight: ['500', '600'] });

export const metadata: Metadata = {
  title: 'Tradix — Master Your Discipline. Master Your Edge.',
  description:
    'Tradix is the trading journal built for the part of trading that actually decides outcomes — your process, your psychology, your rules.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${jbMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
