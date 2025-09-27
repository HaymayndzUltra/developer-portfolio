'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';
import { useId, useMemo } from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import type { KpiMetric } from '@/lib/dashboard/types';

interface KpiCardProps {
  metric: KpiMetric;
}

const trendIcon = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  steady: Minus,
} as const;

const impactColor = {
  up: 'text-emerald-400',
  down: 'text-rose-400',
  steady: 'text-cyan-300',
} as const;

const impactBg = {
  up: 'bg-emerald-500/15',
  down: 'bg-rose-500/15',
  steady: 'bg-cyan-500/15',
} as const;

const gradientFill = {
  up: '#00ff88',
  down: '#ff3366',
  steady: '#00d4ff',
} as const;

const formatMetricValue = (value: number, unit?: string) => {
  if (unit === 'M') {
    return `$${value.toFixed(1)}M`;
  }
  if (unit === '%') {
    return `${value.toFixed(1)}%`;
  }
  if (value > 1000) {
    return `${Math.round(value / 100) / 10}k`;
  }
  return value.toLocaleString();
};

/**
 * Displays an animated KPI card with sparkline trends, deltas, and target progress.
 */
export function KpiCard({ metric }: KpiCardProps) {
  const Icon = trendIcon[metric.trend];
  const gradientId = useId();
  const progress = useMemo(() => {
    if (!metric.target) return 0;
    return Math.min((metric.value / metric.target) * 100, 120);
  }, [metric.target, metric.value]);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      className="glass-panel relative overflow-hidden p-6"
    >
      <div className="absolute inset-px rounded-[1.4rem] border border-white/10" aria-hidden />
      <div className="relative flex flex-col gap-6">
        <header className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{metric.comparisonLabel}</p>
            <h3 className="mt-2 text-sm font-medium text-white/80">{metric.label}</h3>
          </div>
          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${impactBg[metric.trend]} ${impactColor[metric.trend]}`}>
            <Icon className="h-3.5 w-3.5" />
            {metric.delta > 0 ? '+' : ''}
            {metric.delta.toFixed(1)}%
          </span>
        </header>

        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-3xl font-semibold text-white">{formatMetricValue(metric.value, metric.unit)}</p>
            {metric.target ? (
              <p className="mt-1 text-xs text-white/50">
                Target {formatMetricValue(metric.target, metric.unit)}
              </p>
            ) : null}
          </div>
          <div className="h-20 w-32">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metric.sparkline}>
                <defs>
                  <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor={gradientFill[metric.trend]} stopOpacity={0.7} />
                    <stop offset="95%" stopColor={gradientFill[metric.trend]} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={gradientFill[metric.trend]}
                  strokeWidth={2.4}
                  fill={`url(#${gradientId})`}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {metric.target ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-white/50">
              <span>Progress</span>
              <span>{progress.toFixed(0)}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500"
                animate={{ width: `${progress}%` }}
                transition={{ type: 'spring', stiffness: 140, damping: 22 }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.min(progress, 100)}
              />
            </div>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
