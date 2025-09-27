export type TrendDirection = 'up' | 'down' | 'steady';

export interface TrendPoint {
  timestamp: string;
  value: number;
}

export interface KpiMetric {
  id: string;
  label: string;
  value: number;
  unit?: string;
  delta: number;
  trend: TrendDirection;
  target?: number;
  sparkline: TrendPoint[];
  comparisonLabel?: string;
}

export interface SalesTrendPoint {
  month: string;
  actual: number;
  forecast: number;
  confidenceLow: number;
  confidenceHigh: number;
  anomaly?: boolean;
}

export interface InvoiceStatusSlice {
  id: string;
  label: string;
  value: number;
  fill: string;
  status: 'paid' | 'pending' | 'overdue' | 'draft';
}

export interface HeatmapCell {
  id: string;
  day: string;
  hour: string;
  intensity: number;
  label: string;
}

export interface AiInsight {
  id: string;
  title: string;
  summary: string;
  impact: 'positive' | 'negative' | 'neutral';
  confidence: number;
  action: string;
}

export interface ActivityEvent {
  id: string;
  actor: string;
  action: string;
  impact: string;
  timestamp: string;
  status: 'completed' | 'in-progress' | 'flagged';
}

export interface PresenceUser {
  id: string;
  name: string;
  role: string;
  status: 'online' | 'offline' | 'presenting';
  avatarSeed: string;
  focus: string;
}

export interface PerformanceMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  target: number;
  trend: TrendDirection;
}
