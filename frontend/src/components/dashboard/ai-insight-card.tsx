'use client';

import { motion } from 'framer-motion';
import { AiInsight } from '@/lib/dashboard-data';

export interface AiInsightCardProps {
  insight: AiInsight;
}

/**
 * Displays AI-generated insight with subtle holographic glow.
 */
export function AiInsightCard({ insight }: AiInsightCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      className="rounded-quantum-md border border-white/10 bg-white/5 p-4 text-white shadow-quantum-soft"
    >
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.28em] text-white/50">
        <span>Insight</span>
        <span>{Math.round(insight.confidence * 100)}% confidence</span>
      </div>
      <h4 className="mt-3 text-base font-semibold text-white">{insight.title}</h4>
      <p className="mt-2 text-sm text-white/70">{insight.detail}</p>
    </motion.article>
  );
}
