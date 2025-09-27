'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MetricDatum, metricAccents } from '@/lib/dashboard-data';

export interface KpiCardProps {
  metric: MetricDatum;
  icon: LucideIcon;
}

const variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Futuristic KPI card with holographic styling, micro-interactions, and
 * sparkline-friendly layout. Designed for use within responsive dashboard
 * grids and supports live value updates.
 */
export function KpiCard({ metric, icon: Icon }: KpiCardProps) {
  const accent = metricAccents[metric.key];
  const isPositive = metric.change >= 0;

  return (
    <motion.div
      variants={variants}
      transition={{ type: 'spring', stiffness: 140, damping: 18, mass: 1 }}
      className="relative overflow-hidden rounded-quantum-md border border-white/10 bg-white/5 p-6 shadow-quantum-soft backdrop-blur-xl"
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 animate-slow-spin rounded-full bg-gradient-to-br from-quantum-green/30 via-quantum-purple/30 to-transparent" />
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-white/60">
            {metric.label}
          </span>
          <span className="text-3xl font-semibold text-white">
            {metric.key === 'revenue' || metric.key === 'dealSize'
              ? metric.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
              : metric.key === 'profit' || metric.key === 'conversion'
              ? `${metric.value.toFixed(1)}%`
              : metric.value.toLocaleString('en-US')}
          </span>
        </div>
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur',
            accent,
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span
          className={cn(
            'font-medium',
            isPositive ? 'text-quantum-green' : 'text-quantum-red',
          )}
        >
          {isPositive ? '+' : ''}
          {metric.change}% vs last period
        </span>
        {typeof metric.goalProgress === 'number' ? (
          <span className="text-xs font-mono uppercase tracking-[0.28em] text-white/60">
            Goal {metric.goalProgress}%
          </span>
        ) : null}
      </div>
    </motion.div>
  );
}
