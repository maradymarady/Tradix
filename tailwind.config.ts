import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#FAFAFC',
        card: '#FFFFFF',
        border: '#ECECEC',
        primary: { DEFAULT: '#625DF5', foreground: '#FFFFFF' },
        secondary: '#7A82F7',
        'soft-purple': '#B7AFE8',
        lavender: '#D8CCF7',
        pink: '#F0D2EE',
        headline: '#1A1A1A',
        body: '#666666',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-inter-tight)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '20px',
        card: '20px',
        sm: '14px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(26,26,26,0.04), 0 1px 1px rgba(26,26,26,0.03)',
        md: '0 8px 24px rgba(98,93,245,0.08), 0 2px 8px rgba(26,26,26,0.04)',
        lg: '0 24px 64px rgba(98,93,245,0.14), 0 8px 24px rgba(26,26,26,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
