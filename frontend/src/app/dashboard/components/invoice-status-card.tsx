'use client';

import { motion } from 'framer-motion';
import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import type { InvoiceStatusSlice } from '@/lib/dashboard/types';

interface InvoiceStatusCardProps {
  slices: InvoiceStatusSlice[];
}

const statusCopy = {
  paid: 'On-time settlements',
  pending: 'Awaiting approval',
  overdue: 'Escalated',
  draft: 'In authoring',
} as const;

/**
 * Circular invoice distribution widget with animated radial bars.
 */
export function InvoiceStatusCard({ slices }: InvoiceStatusCardProps) {
  const total = slices.reduce((sum, slice) => sum + slice.value, 0);

  return (
    <motion.section
      className="glass-panel relative flex h-full flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-emerald-500/10" aria-hidden />
      <div className="relative flex flex-1 flex-col gap-6 p-8">
        <header>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Invoice health</p>
          <h2 className="mt-2 text-lg font-semibold text-white">Collection velocity</h2>
          <p className="mt-2 text-sm text-white/60">{total}% of cycle processed</p>
        </header>
        <div className="flex flex-1 flex-col gap-6 md:flex-row">
          <div className="mx-auto h-64 w-64 md:mx-0">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="100%" barSize={18} data={slices}>
                <RadialBar background dataKey="value" cornerRadius={18} />
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <Legend
                  iconType="circle"
                  layout="vertical"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ color: 'rgba(255,255,255,0.7)', paddingTop: 12 }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <ul className="flex-1 space-y-4">
            {slices.map((slice) => (
              <motion.li
                key={slice.id}
                layout
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-between text-sm text-white">
                  <span className="font-medium" style={{ color: slice.fill }}>
                    {slice.label}
                  </span>
                  <span className="text-white/70">{slice.value}%</span>
                </div>
                <p className="mt-2 text-xs text-white/60">{statusCopy[slice.status]}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
