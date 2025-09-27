import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Landing page introducing the quantum sales platform experience.
 */
export default function HomePage() {
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'developer-portfolio';
  const INDUSTRY = process.env.NEXT_PUBLIC_INDUSTRY || 'enterprise';
  const PROJECT_TYPE = process.env.NEXT_PUBLIC_PROJECT_TYPE || 'web';

  return (
    <section className="relative isolate mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="flex flex-col items-center text-center"
      >
        <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.45em] text-white/60">
          Future of {INDUSTRY}
        </span>
        <h1 className="mt-8 text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          {APP_NAME}: A {PROJECT_TYPE} platform for quantum-grade sales intelligence
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-white/70">
          Experience the next generation of revenue orchestration with immersive analytics, AI-guided operations,
          and cinematic visual storytelling engineered for global enterprises.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="group relative inline-flex items-center gap-3 rounded-full bg-emerald-500/90 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            Enter live demo
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/20 text-xs text-white">
              →
            </span>
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Explore the playbook
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 1, ease: 'easeOut' }}
        className="glass-panel relative overflow-hidden px-8 py-10"
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-indigo-600/20" aria-hidden />
        <div className="relative grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">Real-time KPI fabric</h2>
            <p className="mt-3 text-sm text-white/70">
              Live holographic dashboards with anomaly detection, predictive pipelines, and immersive spatial data layers.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">AI copilots</h2>
            <p className="mt-3 text-sm text-white/70">
              Voice-led workflows, intelligent summarization, and auto-generated playbooks tailored to every revenue squad.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300/80">Immersive demos</h2>
            <p className="mt-3 text-sm text-white/70">
              Cinematic storytelling with guided tours, collaboration overlays, and export-ready enterprise reporting.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
