'use client';

import { motion } from 'framer-motion';
import { Activity, Mic, Users } from 'lucide-react';
import type { PresenceUser } from '@/lib/dashboard/types';

interface CollaborationPanelProps {
  users: PresenceUser[];
}

const statusColor = {
  online: 'text-emerald-600',
  offline: 'text-slate-400',
  presenting: 'text-cyan-600',
} as const;

/**
 * Live presence board showcasing collaborative activity.
 */
export function CollaborationPanel({ users }: CollaborationPanelProps) {
  return (
    <motion.section
      className="light-panel relative flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-100/70 via-transparent to-cyan-100/60"
        aria-hidden
      />
      <div className="relative flex flex-col gap-6 p-8 text-slate-900">
        <header className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Collaboration</p>
            <h2 className="mt-2 flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Users className="h-5 w-5 text-cyan-600" /> Team presence
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
            <Activity className="h-4 w-4 text-emerald-500" />
            Live
          </span>
        </header>
        <ul className="space-y-4">
          {users.map((user) => (
            <motion.li
              key={user.id}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/5 text-lg font-semibold text-slate-900">
                {user.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
                <span
                  className={`absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border border-white ${
                    user.status === 'offline' ? 'bg-slate-300' : 'bg-emerald-400'
                  }`}
                />
              </span>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                  <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] uppercase tracking-[0.35em] text-slate-500">
                    {user.role}
                  </span>
                </div>
                <p className="text-xs text-slate-600">{user.focus}</p>
              </div>
              <span className={`flex items-center gap-2 text-xs ${statusColor[user.status]}`}>
                <Mic className="h-3.5 w-3.5" />
                {user.status === 'presenting' ? 'Presenting' : user.status === 'online' ? 'Online' : 'Offline'}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
