'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CartesianGrid,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import {
  Activity,
  BarChart2,
  CircleDollarSign,
  Cpu,
  FileText,
  Users2,
} from 'lucide-react';
import { useDashboardStore } from '@/hooks/use-dashboard-store';
import { KpiCard } from '@/components/dashboard/kpi-card';
import { ChartCard } from '@/components/dashboard/chart-card';
import { AiInsightCard } from '@/components/dashboard/ai-insight-card';
import { QuantumHeatmap } from '@/components/dashboard/quantum-heatmap';
import { HolographicCanvas } from '@/components/dashboard/holographic-canvas';
import { MetricKey } from '@/lib/dashboard-data';

const metricIcons: Record<MetricKey, typeof Users2> = {
  customers: Users2,
  revenue: CircleDollarSign,
  profit: Cpu,
  invoices: FileText,
  conversion: Activity,
  dealSize: BarChart2,
};

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Immersive sales intelligence command center that fuses holographic visuals,
 * predictive analytics, and AI-generated insights into a single showcase.
 */
export default function DashboardPage() {
  const { metrics, trend, invoiceStatus, heatmap, insights, initialize, refresh, lastUpdated } =
    useDashboardStore();

  useEffect(() => {
    initialize();
    const interval = window.setInterval(() => {
      refresh();
    }, 12_000);
    return () => window.clearInterval(interval);
  }, [initialize, refresh]);

  const lastUpdatedLabel = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date(lastUpdated));

  return (
    <AnimatePresence>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative min-h-screen overflow-hidden bg-quantum-sidebar"
      >
        <div className="absolute inset-0 bg-gradient-quantum opacity-70" />
        <div className="absolute inset-0 bg-grid-quantum bg-[length:140px_140px] opacity-40" />
        <HolographicCanvas className="pointer-events-none absolute inset-0 mix-blend-screen opacity-50" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1800px] flex-col gap-10 px-6 pb-16 pt-12 lg:px-12">
          <header className="flex flex-wrap items-center justify-between gap-6 text-white">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/60">Enterprise Quantum Suite</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight lg:text-5xl">
                Sales Intelligence Command Center
              </h1>
            </div>
            <div className="flex flex-col items-end gap-2 text-right text-xs uppercase tracking-[0.28em] text-white/60">
              <span>Real-time simulation active</span>
              <span>Last sync {lastUpdatedLabel}</span>
            </div>
          </header>

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {metrics.map((metric) => (
              <KpiCard key={metric.key} metric={metric} icon={metricIcons[metric.key]} />
            ))}
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
            <ChartCard
              title="Revenue Performance"
              description="Quantum predictive model with anomaly detection and confidence forecasting."
              actionSlot={
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.28em] text-white/70">
                  Predictive mode
                </div>
              }
            >
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trend} margin={{ top: 12, left: 0, right: 12, bottom: 0 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="4 12" />
                    <XAxis
                      dataKey="timestamp"
                      tickFormatter={(value: string) =>
                        new Intl.DateTimeFormat('en-US', {
                          month: 'short',
                          day: 'numeric',
                        }).format(new Date(value))
                      }
                      stroke="rgba(255,255,255,0.4)"
                      tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        background: 'rgba(14,14,14,0.9)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      formatter={(value: number, name: string) => [
                        name === 'forecast'
                          ? `$${value.toLocaleString('en-US')}`
                          : `$${value.toLocaleString('en-US')}`,
                        name === 'forecast' ? 'Forecast' : 'Revenue',
                      ]}
                    />
                    <Line
                      type="monotone"
                      dataKey="forecast"
                      stroke="#8b5cf6"
                      strokeDasharray="6 10"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#00ff88"
                      strokeWidth={3}
                      dot={{ stroke: '#00ff88', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>

            <ChartCard
              title="Invoice Orbit"
              description="3D-inspired radial segmentation of invoice lifecycle."
              actionSlot={
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.28em] text-white/70">
                  Drill-down ready
                </div>
              }
            >
              <div className="mx-auto h-[320px] w-full max-w-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    innerRadius="20%"
                    outerRadius="100%"
                    data={invoiceStatus}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      tick={false}
                    />
                    <RadialBar background dataKey="value" cornerRadius={18} />
                    <Tooltip
                      contentStyle={{
                        background: 'rgba(14,14,14,0.9)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#fff',
                      }}
                      formatter={(value: number, name: string) => [`${value}%`, name]}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
            <ChartCard
              title="Engagement Heatmap"
              description="Daily activation intensity powering predictive churn mitigation."
            >
              <QuantumHeatmap data={heatmap} />
            </ChartCard>

            <ChartCard
              title="Signal Intelligence"
              description="Autonomous AI agents translating telemetry into action-ready narratives."
            >
              <div className="flex flex-col gap-4">
                {insights.map((insight) => (
                  <AiInsightCard key={insight.id} insight={insight} />
                ))}
              </div>
            </ChartCard>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}