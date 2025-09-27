'use client';

import { motion } from 'framer-motion';
import { Activity, Mic, Users } from 'lucide-react';
import type { PresenceUser } from '@/lib/dashboard/types';

interface CollaborationPanelProps {
  users: PresenceUser[];
}

const statusColor = {
  online: 'text-emerald-300',
  offline: 'text-white/40',
  presenting: 'text-cyan-300',
} as const;

/**
 * Live presence board showcasing collaborative activity.
 */
export function CollaborationPanel({ users }: CollaborationPanelProps) {
  return (
    <motion.section
      className="glass-panel relative flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-emerald-500/5" aria-hidden />
      <div className="relative flex flex-col gap-6 p-8">
        <header className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Collaboration</p>
            <h2 className="mt-2 flex items-center gap-2 text-lg font-semibold text-white">
              <Users className="h-5 w-5 text-cyan-300" /> Team presence
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Activity className="h-4 w-4 text-emerald-300" />
            Live
          </span>
        </header>
        <ul className="space-y-4">
          {users.map((user) => (
            <motion.li
              key={user.id}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                {user.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
                <span className={`absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border border-slate-900 ${user.status === 'offline' ? 'bg-slate-600' : 'bg-emerald-400'}`} />
              </span>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-white">{user.name}</p>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] uppercase tracking-[0.35em] text-white/60">
                    {user.role}
                  </span>
                </div>
                <p className="text-xs text-white/70">{user.focus}</p>
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
