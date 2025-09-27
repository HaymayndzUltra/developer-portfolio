import type { Metadata } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'developer-portfolio';
const APP_DESC = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Generated Next.js app';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESC,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          'relative min-h-screen font-sans text-foreground',
          inter.variable,
          jetbrains.variable,
        )}
      >
        <Providers>
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 quantum-grid opacity-40" aria-hidden />
            <div className="absolute -left-32 top-24 h-[420px] w-[420px] animate-pulse rounded-full bg-cyan-500/20 blur-[160px]" aria-hidden />
            <div className="absolute -right-24 bottom-0 h-[460px] w-[460px] animate-pulse rounded-full bg-emerald-500/20 blur-[180px]" aria-hidden />
          </div>

          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
              <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Quantum Sales Studio</p>
                  <h1 className="text-lg font-semibold text-white">{APP_NAME}</h1>
                </div>
                <nav className="flex items-center gap-6 text-sm font-medium text-white/70">
                  <Link className="transition hover:text-white" href="/">
                    Home
                  </Link>
                  <Link className="transition hover:text-white" href="/dashboard">
                    Dashboard
                  </Link>
                  <Link className="transition hover:text-white" href="/docs">
                    Docs
                  </Link>
                </nav>
              </div>
            </header>

            <main className="relative z-10 flex-1 pb-16">{children}</main>

            <footer className="border-t border-white/10 bg-black/40 py-6 backdrop-blur-xl">
              <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-6 text-center text-xs text-white/60 sm:flex-row sm:justify-between sm:text-left">
                <span>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</span>
                <span>Built for enterprise-grade experiences.</span>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
