'use client';

import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import type { AiInsight } from '@/lib/dashboard/types';

interface AiSpotlightProps {
  insights: AiInsight[];
}

const impactBadge = {
  positive: 'bg-emerald-100 text-emerald-700',
  negative: 'bg-rose-100 text-rose-700',
  neutral: 'bg-cyan-100 text-cyan-700',
} as const;

/**
 * AI spotlight stream summarizing the most important insights for revenue leaders.
 */
export function AiSpotlight({ insights }: AiSpotlightProps) {
  return (
    <motion.section
      className="light-panel relative flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-transparent to-cyan-100/60"
        aria-hidden
      />
      <div className="relative flex flex-col gap-6 p-8 text-slate-900">
        <header className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">AI spotlight</p>
            <h2 className="mt-2 flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Sparkles className="h-5 w-5 text-emerald-500" /> Predictive insights
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs text-cyan-700">
            <Bot className="h-4 w-4 text-cyan-500" />
            Copilot live
          </span>
        </header>
        <ul className="space-y-4">
          {insights.map((insight) => (
            <motion.li
              key={insight.id}
              className="group rounded-2xl border border-slate-200 bg-white/70 p-5 transition hover:border-emerald-300 hover:shadow-[0_16px_30px_rgba(16,185,129,0.15)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-900">{insight.title}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs shadow-sm ${impactBadge[insight.impact]}`}
                >
                  Confidence {(insight.confidence * 100).toFixed(0)}%
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{insight.summary}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.35em] text-emerald-600/80">Next action</p>
              <p className="mt-1 text-sm text-slate-900">{insight.action}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
