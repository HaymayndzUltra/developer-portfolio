'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Globe2, Search, Sparkles, Waves } from 'lucide-react';
import { AiSpotlight } from './components/ai-spotlight';
import { ActivityHeatmap } from './components/activity-heatmap';
import { ActivityTimeline } from './components/activity-timeline';
import { CollaborationPanel } from './components/collaboration-panel';
import { InvoiceStatusCard } from './components/invoice-status-card';
import { KpiCard } from './components/kpi-card';
import { PerformanceMonitor } from './components/performance-monitor';
import { SalesTrendPanel } from './components/sales-trend-panel';
import {
  activityTimeline,
  aiInsights,
  baseKpiMetrics,
  heatmapCells,
  invoiceStatusSlices,
  performanceSnapshot,
  presenceUsers,
  salesTrendData,
} from '@/lib/dashboard/mock-data';
import { useLiveKpiMetrics } from '@/hooks/use-live-kpi-metrics';

const tenants = ['Global enterprise', 'North America', 'EMEA', 'APAC'];
const timeframes = ['Q4 2025', 'Q3 2025', 'FY 2025', 'Last 90 days'];

/**
 * Enterprise-grade dashboard demo layering real-time KPIs, AI insights, and immersive analytics.
 */
export default function DashboardPage() {
  const [selectedTenant, setSelectedTenant] = useState<string>(tenants[0]);
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>(timeframes[0]);
  const kpiMetrics = useLiveKpiMetrics({ baseMetrics: baseKpiMetrics });
  const predictiveTrajectory = useMemo(() => salesTrendData, []);

  return (
    <div className="relative mx-auto flex w-full max-w-[1420px] flex-col gap-8 px-6 py-10 text-white">
      <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" aria-hidden />
      <motion.section
        className="glass-panel relative overflow-hidden px-8 py-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-purple-600/20" aria-hidden />
        <div className="relative flex flex-col gap-6">
          <header className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Command cockpit</p>
              <h1 className="mt-2 text-2xl font-semibold text-white">Revenue intelligence control center</h1>
              <p className="mt-2 max-w-xl text-sm text-white/70">
                Monitor live KPIs, predictive pipelines, and AI-augmented workflows engineered for the next generation of
                sales leadership.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                <Globe2 className="h-4 w-4 text-cyan-300" />
                <span className="hidden sm:inline">Tenant</span>
                <select
                  className="bg-transparent text-sm text-white focus:outline-none"
                  value={selectedTenant}
                  onChange={(event) => setSelectedTenant(event.target.value)}
                >
                  {tenants.map((tenant) => (
                    <option key={tenant} className="bg-slate-900 text-white" value={tenant}>
                      {tenant}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                <Waves className="h-4 w-4 text-emerald-300" />
                <span className="hidden sm:inline">Timeframe</span>
                <select
                  className="bg-transparent text-sm text-white focus:outline-none"
                  value={selectedTimeframe}
                  onChange={(event) => setSelectedTimeframe(event.target.value)}
                >
                  {timeframes.map((frame) => (
                    <option key={frame} className="bg-slate-900 text-white" value={frame}>
                      {frame}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </header>

          <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Search className="h-4 w-4 text-emerald-300" />
              Neural query ready
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              AI copilots engaged
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Filter className="h-4 w-4 text-purple-300" />
              Context synced to {selectedTenant}
            </span>
          </div>
        </div>
      </motion.section>

      <div className="grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
        <div className="flex flex-col gap-6">
          <CollaborationPanel users={presenceUsers} />
          <AiSpotlight insights={aiInsights} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {kpiMetrics.map((metric) => (
              <KpiCard key={metric.id} metric={metric} />
            ))}
          </div>

          <SalesTrendPanel data={predictiveTrajectory} />

          <div className="grid gap-6 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
            <InvoiceStatusCard slices={invoiceStatusSlices} />
            <ActivityHeatmap cells={heatmapCells} />
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <ActivityTimeline events={activityTimeline} />
            <PerformanceMonitor metrics={performanceSnapshot} />
          </div>
        </div>
      </div>
    </div>
  );
}
