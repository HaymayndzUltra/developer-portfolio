'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, Clock3 } from 'lucide-react';
import type { ActivityEvent } from '@/lib/dashboard/types';

interface ActivityTimelineProps {
  events: ActivityEvent[];
}

const statusIcon = {
  completed: CheckCircle2,
  'in-progress': Clock3,
  flagged: AlertTriangle,
} as const;

const statusColor = {
  completed: 'text-emerald-300',
  'in-progress': 'text-cyan-300',
  flagged: 'text-rose-300',
} as const;

/**
 * Animated timeline capturing real-time collaboration events.
 */
export function ActivityTimeline({ events }: ActivityTimelineProps) {
  return (
    <motion.section
      className="glass-panel relative flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" aria-hidden />
      <div className="relative flex flex-col gap-6 p-8">
        <header>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Activity stream</p>
          <h2 className="mt-2 text-lg font-semibold text-white">Live revenue operations</h2>
        </header>
        <ul className="space-y-4">
          {events.map((event) => {
            const Icon = statusIcon[event.status];
            return (
              <motion.li
                key={event.id}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <span className={`mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ${statusColor[event.status]}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-white">
                    <span className="font-semibold">{event.actor}</span>
                    <span className="text-white/60">{event.action}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
                    <span>{event.impact}</span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5">{event.timestamp}</span>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}
