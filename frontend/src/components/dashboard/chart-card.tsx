'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface ChartCardProps {
  title: string;
  description?: string;
  actionSlot?: ReactNode;
  children: ReactNode;
}

const containerVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Generic container for animated chart visualisations featuring glass morphism
 * styling and consistent header layout.
 */
export function ChartCard({ title, description, actionSlot, children }: ChartCardProps) {
  return (
    <motion.section
      variants={containerVariants}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="quantum-glass-panel relative flex flex-col gap-6 rounded-quantum-lg p-6"
    >
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {description ? (
            <p className="mt-1 max-w-xl text-sm text-white/60">{description}</p>
          ) : null}
        </div>
        {actionSlot}
      </header>
      <div className="h-full w-full">{children}</div>
    </motion.section>
  );
}
