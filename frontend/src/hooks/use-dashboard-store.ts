import { create } from 'zustand';
import {
  AiInsight,
  HeatmapDayDatum,
  InvoiceStatusDatum,
  MetricDatum,
  SalesTrendPoint,
  generateAiInsights,
  generateHeatmap,
  generateInvoiceStatus,
  generateMetrics,
  generateSalesTrend,
} from '@/lib/dashboard-data';

interface DashboardState {
  metrics: MetricDatum[];
  trend: SalesTrendPoint[];
  invoiceStatus: InvoiceStatusDatum[];
  heatmap: HeatmapDayDatum[];
  insights: AiInsight[];
  lastUpdated: number;
  initialize: () => void;
  refresh: () => void;
}

/**
 * Zustand store that simulates real-time analytics updates for the dashboard.
 * The store can be expanded to connect with WebSocket streams or React Query
 * in a production environment.
 */
export const useDashboardStore = create<DashboardState>((set) => ({
  metrics: [],
  trend: [],
  invoiceStatus: [],
  heatmap: [],
  insights: [],
  lastUpdated: Date.now(),
  initialize: () =>
    set({
      metrics: generateMetrics(),
      trend: generateSalesTrend(),
      invoiceStatus: generateInvoiceStatus(),
      heatmap: generateHeatmap(),
      insights: generateAiInsights(),
      lastUpdated: Date.now(),
    }),
  refresh: () =>
    set((state) => ({
      metrics: generateMetrics(),
      trend: generateSalesTrend(),
      invoiceStatus: state.invoiceStatus.map((entry) => ({
        ...entry,
        value: Math.round(entry.value * (0.9 + Math.random() * 0.2)),
      })),
      heatmap: generateHeatmap(),
      insights: generateAiInsights(),
      lastUpdated: Date.now(),
    })),
}));
