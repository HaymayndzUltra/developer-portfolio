'use client';

import { useEffect, useMemo, useState } from 'react';
import type { KpiMetric, TrendDirection, TrendPoint } from '@/lib/dashboard/types';

interface UseLiveKpiMetricsOptions {
  baseMetrics: KpiMetric[];
  intervalMs?: number;
  variance?: number;
}

const determineTrend = (delta: number): TrendDirection => {
  if (delta > 0.6) return 'up';
  if (delta < -0.6) return 'down';
  return 'steady';
};

const appendSparklinePoint = (sparkline: TrendPoint[], value: number): TrendPoint[] => {
  const nextPoint: TrendPoint = {
    timestamp: new Date().toISOString(),
    value: Number(value.toFixed(2)),
  };
  const maxLength = 14;
  const updated = [...sparkline.slice(-maxLength + 1), nextPoint];
  return updated;
};

/**
 * Provides gently simulated KPI updates to mimic a real-time data stream during demos.
 */
export function useLiveKpiMetrics({
  baseMetrics,
  intervalMs = 4200,
  variance = 0.045,
}: UseLiveKpiMetricsOptions): KpiMetric[] {
  const [metrics, setMetrics] = useState<KpiMetric[]>(baseMetrics);

  useEffect(() => {
    setMetrics(baseMetrics);
  }, [baseMetrics]);

  useEffect(() => {
    if (!intervalMs) {
      return undefined;
    }

    const id = window.setInterval(() => {
      setMetrics((previous) =>
        previous.map((metric) => {
          const variation = metric.value * (Math.random() * variance * 2 - variance);
          const nextValue = Math.max(metric.value + variation, 0);
          const percentageShift = metric.value ? ((nextValue - metric.value) / metric.value) * 100 : 0;
          const nextDelta = Number((metric.delta + percentageShift / 3).toFixed(2));

          return {
            ...metric,
            value: Number(nextValue.toFixed(metric.unit === '%' ? 1 : metric.unit === 'M' ? 1 : 0)),
            delta: nextDelta,
            trend: determineTrend(nextDelta),
            sparkline: appendSparklinePoint(metric.sparkline, nextValue),
          };
        }),
      );
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, variance]);

  return useMemo(() => metrics, [metrics]);
}
