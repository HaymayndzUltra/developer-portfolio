'use client';

import { HeatmapDayDatum } from '@/lib/dashboard-data';

export interface QuantumHeatmapProps {
  data: HeatmapDayDatum[];
}

/**
 * Lightweight heatmap grid built with CSS grids to represent momentum without
 * introducing a heavy charting dependency.
 */
export function QuantumHeatmap({ data }: QuantumHeatmapProps) {
  const max = Math.max(...data.map((item) => item.score));
  return (
    <div className="grid grid-cols-7 gap-2">
      {data.map((item) => {
        const intensity = item.score / max;
        const background = `linear-gradient(135deg, rgba(0, 244, 140, ${0.25 + intensity * 0.45}), rgba(139, 92, 246, ${0.15 + intensity * 0.35}))`;
        const dateLabel = new Intl.DateTimeFormat('en-US', {
          month: 'short',
          day: 'numeric',
        }).format(new Date(item.date));
        return (
          <div
            key={item.date}
            title={`${dateLabel}: ${item.score.toFixed(0)} momentum`}
            className="aspect-square rounded-quantum-sm border border-white/10"
            style={{ background }}
          />
        );
      })}
    </div>
  );
}
