'use client';

import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import type { AiInsight } from '@/lib/dashboard/types';

interface AiSpotlightProps {
  insights: AiInsight[];
}

const impactBadge = {
  positive: 'bg-emerald-500/15 text-emerald-300',
  negative: 'bg-rose-500/15 text-rose-300',
  neutral: 'bg-cyan-500/15 text-cyan-300',
} as const;

/**
 * AI spotlight stream summarizing the most important insights for revenue leaders.
 */
export function AiSpotlight({ insights }: AiSpotlightProps) {
  return (
    <motion.section
      className="glass-panel relative flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" aria-hidden />
      <div className="relative flex flex-col gap-6 p-8">
        <header className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">AI spotlight</p>
            <h2 className="mt-2 flex items-center gap-2 text-lg font-semibold text-white">
              <Sparkles className="h-5 w-5 text-emerald-300" /> Predictive insights
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Bot className="h-4 w-4 text-cyan-300" />
            Copilot live
          </span>
        </header>
        <ul className="space-y-4">
          {insights.map((insight) => (
            <motion.li
              key={insight.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:shadow-[0_20px_40px_rgba(0,255,136,0.15)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-white/90">{insight.title}</h3>
                <span className={`rounded-full px-3 py-1 text-xs ${impactBadge[insight.impact]}`}>
                  Confidence {(insight.confidence * 100).toFixed(0)}%
                </span>
              </div>
              <p className="mt-3 text-sm text-white/70">{insight.summary}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.35em] text-emerald-200/70">Next action</p>
              <p className="mt-1 text-sm text-white">{insight.action}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
