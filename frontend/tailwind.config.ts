import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'quantum-surface': '#fafafa',
        'quantum-glass': 'rgba(255, 255, 255, 0.08)',
        'quantum-border': 'rgba(255, 255, 255, 0.22)',
        'quantum-sidebar': '#0a0a0a',
        'quantum-green': '#00ff88',
        'quantum-red': '#ff3366',
        'quantum-blue': '#00d4ff',
        'quantum-purple': '#8b5cf6',
        'quantum-amber': '#f59e0b',
        'quantum-slate': '#111827',
        'quantum-carbon': '#050505',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'JetBrainsMonoVariable', 'monospace'],
      },
      backgroundImage: {
        'grid-quantum':
          'linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        'gradient-quantum':
          'radial-gradient(120% 120% at 10% 20%, rgba(139, 92, 246, 0.35), transparent), radial-gradient(140% 140% at 85% 15%, rgba(0, 212, 255, 0.45), transparent)',
      },
      boxShadow: {
        'quantum-soft': '0 20px 40px -24px rgba(15, 118, 110, 0.45)',
        'quantum-glow': '0 0 0 1px rgba(255, 255, 255, 0.12), 0 10px 30px rgba(0, 244, 140, 0.35)',
      },
      borderRadius: {
        'quantum-sm': '0.25rem',
        'quantum-md': '0.75rem',
        'quantum-lg': '1.5rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      animation: {
        'pulse-soft': 'pulse-soft 6s ease-in-out infinite',
        'slow-spin': 'slow-spin 18s linear infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: 0.35, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        'slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;