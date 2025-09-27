'use client';

import { motion } from 'framer-motion';
import { Area, AreaChart, CartesianGrid, Legend, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { SalesTrendPoint } from '@/lib/dashboard/types';

interface SalesTrendPanelProps {
  data: SalesTrendPoint[];
}

const tooltipFormatter = (value: number) => `$${value.toFixed(2)}M`;

/**
 * Holographic area chart blending actual performance with predictive confidence bands.
 */
export function SalesTrendPanel({ data }: SalesTrendPanelProps) {
  const anomaly = data.find((point) => point.anomaly);

  return (
    <motion.section
      className="glass-panel relative overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/10" aria-hidden />
      <div className="relative flex flex-col gap-4 p-8">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Sales intelligence</p>
            <h2 className="text-lg font-semibold text-white">Predictive revenue stream</h2>
          </div>
          <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            AI forecast accuracy 93%
          </span>
        </header>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: 16, right: 24, top: 8, bottom: 0 }}>
              <defs>
                <linearGradient id="actual" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#00ff88" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#00ff88" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="forecast" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.55} />
                  <stop offset="95%" stopColor="#00d4ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
              <YAxis
                stroke="rgba(255,255,255,0.45)"
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}M`}
                width={80}
              />
              <Tooltip
                cursor={{ stroke: 'rgba(0, 255, 136, 0.35)', strokeWidth: 1 }}
                contentStyle={{ background: 'rgba(7, 12, 18, 0.9)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: 16 }}
                formatter={tooltipFormatter}
              />
              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                wrapperStyle={{ paddingBottom: 16, color: 'rgba(255,255,255,0.7)' }}
              />
              <Area
                type="monotone"
                dataKey="confidenceHigh"
                stroke="transparent"
                fill="#00d4ff0D"
                activeDot={false}
              />
              <Area
                type="monotone"
                dataKey="confidenceLow"
                stroke="transparent"
                fill="#00ff880D"
                activeDot={false}
              />
              <Area type="monotone" dataKey="actual" stroke="#00ff88" strokeWidth={3} fill="url(#actual)" name="Actual" />
              <Area type="monotone" dataKey="forecast" stroke="#00d4ff" strokeWidth={2} fill="url(#forecast)" name="Forecast" />
              {anomaly ? (
                <ReferenceArea x1={anomaly.month} x2={anomaly.month} label={{ value: 'Anomaly', fill: '#ff3366' }} />
              ) : null}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.section>
  );
}
