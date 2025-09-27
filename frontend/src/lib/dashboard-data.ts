/**
 * Mock data generation utilities for the futuristic dashboard demo.
 * The data is intentionally dynamic to showcase live updates, predictive
 * trends, and AI-ready insights without requiring a backend.
 */
export type MetricKey =
  | 'customers'
  | 'revenue'
  | 'profit'
  | 'invoices'
  | 'conversion'
  | 'dealSize';

export interface MetricDatum {
  /** Unique key used to map icons and color accents */
  key: MetricKey;
  /** Display label for the metric */
  label: string;
  /** Current value */
  value: number;
  /** Percentage change relative to the previous comparable period */
  change: number;
  /** Optional goal percentage completion */
  goalProgress?: number;
}

export interface SalesTrendPoint {
  timestamp: string;
  revenue: number;
  forecast: number;
  anomaly?: boolean;
}

export interface InvoiceStatusDatum {
  name: string;
  value: number;
  fill: string;
}

export interface HeatmapDayDatum {
  date: string;
  score: number;
}

export interface AiInsight {
  id: string;
  title: string;
  detail: string;
  confidence: number;
}

const metricBlueprint: Record<MetricKey, Omit<MetricDatum, 'value' | 'change'>> = {
  customers: { key: 'customers', label: 'Active Customers' },
  revenue: { key: 'revenue', label: 'Monthly Revenue ($)' },
  profit: { key: 'profit', label: 'Profit Margin (%)' },
  invoices: { key: 'invoices', label: 'Invoices Processed' },
  conversion: { key: 'conversion', label: 'Conversion Rate (%)' },
  dealSize: { key: 'dealSize', label: 'Avg. Deal Size ($)' },
};

const accents: Record<MetricKey, string> = {
  customers: 'text-quantum-blue',
  revenue: 'text-quantum-green',
  profit: 'text-quantum-purple',
  invoices: 'text-quantum-amber',
  conversion: 'text-quantum-blue',
  dealSize: 'text-quantum-green',
};

/**
 * Generates KPI metrics with slight randomisation to emulate real-time updates.
 */
export const generateMetrics = (): MetricDatum[] => {
  const base: Record<MetricKey, { value: number; change: number; goal?: number }> = {
    customers: { value: 1842, change: 3.8, goal: 74 },
    revenue: { value: 928_420, change: 8.2, goal: 68 },
    profit: { value: 34.2, change: 2.4, goal: 63 },
    invoices: { value: 412, change: -1.1, goal: 56 },
    conversion: { value: 27.5, change: 1.7, goal: 81 },
    dealSize: { value: 12_400, change: 4.5, goal: 72 },
  };

  return (Object.keys(base) as MetricKey[]).map((key) => {
    const datum = base[key];
    const noise = 1 + (Math.random() - 0.5) * 0.06;
    const value = Math.round(datum.value * noise);
    const changeNoise = datum.change + (Math.random() - 0.5) * 1.8;

    return {
      ...metricBlueprint[key],
      value,
      change: Number(changeNoise.toFixed(2)),
      goalProgress: datum.goal,
    } satisfies MetricDatum;
  });
};

/**
 * Produces daily revenue trend data for the last 14 days including a simple
 * forecast line and anomaly marker.
 */
export const generateSalesTrend = (): SalesTrendPoint[] => {
  const now = new Date();
  return Array.from({ length: 14 }, (_, index) => {
    const day = new Date(now);
    day.setDate(now.getDate() - (13 - index));
    const baseRevenue = 550_000 + index * 20_000 + Math.sin(index / 3) * 40_000;
    const forecast = baseRevenue * 1.05;
    const revenue = baseRevenue * (0.95 + Math.random() * 0.1);
    const anomaly = Math.random() > 0.92;

    return {
      timestamp: day.toISOString(),
      revenue: Math.round(revenue),
      forecast: Math.round(forecast),
      anomaly,
    } satisfies SalesTrendPoint;
  });
};

/**
 * Generates invoice status distribution values for the radial analytics card.
 */
export const generateInvoiceStatus = (): InvoiceStatusDatum[] => [
  { name: 'Paid', value: 68, fill: '#00ff88' },
  { name: 'Pending', value: 22, fill: '#00d4ff' },
  { name: 'Overdue', value: 10, fill: '#ff3366' },
];

/**
 * Generates a heatmap-ready series for the past 28 days of sales momentum.
 */
export const generateHeatmap = (): HeatmapDayDatum[] => {
  const now = new Date();
  return Array.from({ length: 28 }, (_, index) => {
    const day = new Date(now);
    day.setDate(now.getDate() - (27 - index));
    const score = Math.random() * 100;
    return { date: day.toISOString(), score } satisfies HeatmapDayDatum;
  });
};

/**
 * Returns curated AI-driven insights. In a real deployment these would be
 * produced by a large language model and analytics pipeline.
 */
export const generateAiInsights = (): AiInsight[] => [
  {
    id: 'insight-1',
    title: 'Forecasted revenue is on track to exceed target by 8.6%',
    detail: 'Quantum model confidence strengthened after incorporating Q4 macroeconomic signals.',
    confidence: 0.92,
  },
  {
    id: 'insight-2',
    title: 'Anomaly detected in LATAM invoice approvals',
    detail: 'Approval latency increased by 34 minutes due to compliance re-check loop.',
    confidence: 0.78,
  },
  {
    id: 'insight-3',
    title: 'Customer retention program reducing churn risk',
    detail: 'Early churn signals decreased by 12% after activating holographic outreach.',
    confidence: 0.88,
  },
];

export const metricAccents = accents;
