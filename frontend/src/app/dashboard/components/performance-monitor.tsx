'use client';

import { motion } from 'framer-motion';
import { Gauge } from 'lucide-react';
import type { PerformanceMetric } from '@/lib/dashboard/types';

interface PerformanceMonitorProps {
  metrics: PerformanceMetric[];
}

const trendCopy = {
  up: 'Accelerating',
  down: 'Declining',
  steady: 'Stable',
} as const;

/**
 * Performance health view tracking platform level telemetry.
 */
export function PerformanceMonitor({ metrics }: PerformanceMonitorProps) {
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
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Platform telemetry</p>
            <h2 className="mt-2 flex items-center gap-2 text-lg font-semibold text-white">
              <Gauge className="h-5 w-5 text-emerald-300" /> Performance monitor
            </h2>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Edge optimized</span>
        </header>
        <ul className="grid gap-4 md:grid-cols-2">
          {metrics.map((metric) => {
            const progress = Math.min((metric.value / metric.target) * 100, 130);
            return (
              <motion.li
                key={metric.id}
                layout
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-between text-sm text-white">
                  <span className="font-medium">{metric.label}</span>
                  <span className="text-white/70">
                    {metric.value}
                    {metric.unit}
                  </span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500"
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', stiffness: 140, damping: 22 }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                  <span>{trendCopy[metric.trend]}</span>
                  <span>Target {metric.target}</span>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}
