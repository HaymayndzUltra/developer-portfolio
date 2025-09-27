'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import type { HeatmapCell } from '@/lib/dashboard/types';

interface ActivityHeatmapProps {
  cells: HeatmapCell[];
}

const getCellColor = (intensity: number) => {
  if (intensity > 0.85) return 'from-emerald-400/80 to-cyan-400/80';
  if (intensity > 0.65) return 'from-emerald-400/70 to-cyan-400/50';
  if (intensity > 0.45) return 'from-emerald-400/40 to-cyan-400/30';
  if (intensity > 0.25) return 'from-emerald-400/30 to-cyan-400/20';
  return 'from-slate-500/20 to-slate-600/10';
};

/**
 * Heatmap describing deal velocity cadence across the week.
 */
export function ActivityHeatmap({ cells }: ActivityHeatmapProps) {
  const days = Array.from(new Set(cells.map((cell) => cell.day)));
  const hours = Array.from(new Set(cells.map((cell) => cell.hour)));

  return (
    <motion.section
      className="glass-panel relative flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/10" aria-hidden />
      <div className="relative flex flex-col gap-6 p-8">
        <header className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Engagement cadence</p>
            <h2 className="mt-2 text-lg font-semibold text-white">Activity intensity map</h2>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Peak window 15h Thu</span>
        </header>
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="grid grid-cols-[auto_repeat(auto-fit,minmax(52px,1fr))] gap-3">
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">&nbsp;</div>
              {hours.map((hour) => (
                <div key={hour} className="text-center text-[11px] uppercase tracking-[0.2em] text-white/40">
                  {hour}
                </div>
              ))}
              {days.map((day) => (
                <Fragment key={day}>
                  <div className="flex items-center text-xs font-medium uppercase tracking-[0.2em] text-white/60">{day}</div>
                  {hours.map((hour) => {
                    const cell = cells.find((entry) => entry.day === day && entry.hour === hour);
                    const intensity = cell?.intensity ?? 0;
                    return (
                      <motion.button
                        key={`${day}-${hour}`}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        className={`group relative h-12 rounded-xl bg-gradient-to-br ${getCellColor(intensity)} transition-shadow`}
                      >
                        <span className="pointer-events-none absolute inset-0 rounded-xl border border-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
                        <span className="pointer-events-none text-[11px] text-white/60 group-hover:text-white">
                          {(intensity * 100).toFixed(0)}%
                        </span>
                      </motion.button>
                    );
                  })}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
