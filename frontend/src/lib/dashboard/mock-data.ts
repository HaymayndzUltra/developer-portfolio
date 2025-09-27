import type {
  ActivityEvent,
  AiInsight,
  HeatmapCell,
  InvoiceStatusSlice,
  KpiMetric,
  PerformanceMetric,
  PresenceUser,
  SalesTrendPoint,
  TrendPoint,
} from './types';

const createSparkline = (values: number[]): TrendPoint[] => {
  return values.map((value, index) => ({
    timestamp: new Date(Date.now() - (values.length - index) * 60 * 60 * 1000).toISOString(),
    value,
  }));
};

export const baseKpiMetrics: KpiMetric[] = [
  {
    id: 'customers',
    label: 'Active Customers',
    value: 12840,
    unit: '',
    delta: 12.6,
    trend: 'up',
    target: 15000,
    comparisonLabel: 'vs last quarter',
    sparkline: createSparkline([9800, 10240, 10780, 11250, 11830, 12340, 12840]),
  },
  {
    id: 'revenue',
    label: 'Quarterly Revenue',
    value: 48.6,
    unit: 'M',
    delta: 8.2,
    trend: 'up',
    target: 55,
    comparisonLabel: 'YoY growth',
    sparkline: createSparkline([32.1, 34.2, 36.4, 38.9, 42.5, 45.7, 48.6]),
  },
  {
    id: 'profit',
    label: 'Net Profit Margin',
    value: 24.3,
    unit: '%',
    delta: 2.1,
    trend: 'steady',
    target: 26,
    comparisonLabel: 'vs target',
    sparkline: createSparkline([18.8, 19.6, 20.4, 21.9, 22.7, 23.6, 24.3]),
  },
  {
    id: 'invoices',
    label: 'Invoices Processed',
    value: 1842,
    unit: '',
    delta: -3.4,
    trend: 'down',
    target: 2100,
    comparisonLabel: 'week over week',
    sparkline: createSparkline([1620, 1724, 1812, 1940, 2028, 1916, 1842]),
  },
];

export const salesTrendData: SalesTrendPoint[] = [
  { month: 'Jan', actual: 6.2, forecast: 6.1, confidenceLow: 5.8, confidenceHigh: 6.6 },
  { month: 'Feb', actual: 6.8, forecast: 6.5, confidenceLow: 6.1, confidenceHigh: 7.1 },
  { month: 'Mar', actual: 7.5, forecast: 7.1, confidenceLow: 6.7, confidenceHigh: 7.8 },
  { month: 'Apr', actual: 7.9, forecast: 7.6, confidenceLow: 7.1, confidenceHigh: 8.3 },
  { month: 'May', actual: 8.4, forecast: 8.1, confidenceLow: 7.6, confidenceHigh: 8.8 },
  { month: 'Jun', actual: 8.7, forecast: 8.4, confidenceLow: 7.9, confidenceHigh: 9.2 },
  { month: 'Jul', actual: 9.2, forecast: 8.9, confidenceLow: 8.3, confidenceHigh: 9.6, anomaly: true },
  { month: 'Aug', actual: 9.6, forecast: 9.3, confidenceLow: 8.7, confidenceHigh: 10.1 },
  { month: 'Sep', actual: 10.2, forecast: 9.8, confidenceLow: 9.1, confidenceHigh: 10.6 },
  { month: 'Oct', actual: 10.8, forecast: 10.5, confidenceLow: 9.6, confidenceHigh: 11.2 },
  { month: 'Nov', actual: 11.5, forecast: 11.2, confidenceLow: 10.4, confidenceHigh: 11.9 },
  { month: 'Dec', actual: 12.3, forecast: 12.1, confidenceLow: 11.3, confidenceHigh: 12.8 },
];

export const invoiceStatusSlices: InvoiceStatusSlice[] = [
  { id: 'paid', label: 'Paid', value: 62, fill: '#00ff88', status: 'paid' },
  { id: 'pending', label: 'Pending', value: 21, fill: '#00d4ff', status: 'pending' },
  { id: 'overdue', label: 'Overdue', value: 11, fill: '#ff3366', status: 'overdue' },
  { id: 'draft', label: 'Draft', value: 6, fill: '#8b5cf6', status: 'draft' },
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const hours = ['06h', '09h', '12h', '15h', '18h', '21h'];

export const heatmapCells: HeatmapCell[] = days
  .map((day) =>
    hours.map((hour, index) => ({
      id: `${day}-${hour}`,
      day,
      hour,
      intensity: Math.max(0.18, Math.random() * (day === 'Thu' || day === 'Fri' ? 0.95 : 0.75)),
      label: `${hour} ${day}`,
    })),
  )
  .flat();

export const aiInsights: AiInsight[] = [
  {
    id: 'insight-1',
    title: 'North America enterprise renewals trending 14% above plan',
    summary: 'AI predicts $4.2M upside if expansion playbooks roll out to Tier 1 accounts before Q4 week 6.',
    impact: 'positive',
    confidence: 0.87,
    action: 'Activate proactive expansion workflow for premium accounts.',
  },
  {
    id: 'insight-2',
    title: 'Logistics vertical showing anomaly in payment delays',
    summary: 'Average invoice age increased by 6.4 days in the past two sprints. Root cause: contract revisions pending legal review.',
    impact: 'negative',
    confidence: 0.78,
    action: 'Trigger red status workflow and coordinate finance escalation.',
  },
  {
    id: 'insight-3',
    title: 'APAC product-led growth funnel accelerating',
    summary: 'Conversion from trial to paid improved by 9.3%. Forecasting 1.8K net-new seats with proper onboarding coverage.',
    impact: 'positive',
    confidence: 0.81,
    action: 'Deploy guided onboarding tour and enablement sequence for APAC teams.',
  },
];

export const activityTimeline: ActivityEvent[] = [
  {
    id: 'activity-1',
    actor: 'Maya Chen',
    action: 'closed a $1.2M renewal with Delta Logistics',
    impact: '+18% ARR',
    timestamp: '2m ago',
    status: 'completed',
  },
  {
    id: 'activity-2',
    actor: 'AI Guardian',
    action: 'flagged anomaly in LATAM churn signals',
    impact: '7 accounts at risk',
    timestamp: '12m ago',
    status: 'flagged',
  },
  {
    id: 'activity-3',
    actor: 'Noah Patel',
    action: 'launched predictive playbook for EMEA channel partners',
    impact: 'Rollout in progress',
    timestamp: '27m ago',
    status: 'in-progress',
  },
  {
    id: 'activity-4',
    actor: 'AI Copilot',
    action: 'generated Q4 revenue projection and risk assessment',
    impact: 'Shared with leadership',
    timestamp: '1h ago',
    status: 'completed',
  },
];

export const presenceUsers: PresenceUser[] = [
  {
    id: 'user-1',
    name: 'Amelia Ray',
    role: 'Chief Revenue Officer',
    status: 'presenting',
    avatarSeed: 'amelia',
    focus: 'Reviewing executive pulse report',
  },
  {
    id: 'user-2',
    name: 'Kai Nakamura',
    role: 'AI Strategist',
    status: 'online',
    avatarSeed: 'kai',
    focus: 'Optimizing anomaly detection thresholds',
  },
  {
    id: 'user-3',
    name: 'Sasha Ibrahim',
    role: 'Enterprise AE',
    status: 'online',
    avatarSeed: 'sasha',
    focus: 'Preparing APAC expansion pitch',
  },
  {
    id: 'user-4',
    name: 'Diego Martinez',
    role: 'Finance Ops',
    status: 'offline',
    avatarSeed: 'diego',
    focus: 'Syncing treasury model',
  },
];

export const performanceSnapshot: PerformanceMetric[] = [
  { id: 'latency', label: 'Streaming Latency', value: 42, unit: 'ms', target: 50, trend: 'up' },
  { id: 'uptime', label: 'Platform Uptime', value: 99.98, unit: '%', target: 99.9, trend: 'steady' },
  { id: 'load', label: 'Processing Headroom', value: 68, unit: '%', target: 80, trend: 'up' },
  { id: 'alerts', label: 'AI Alerts Resolved', value: 94, unit: '%', target: 90, trend: 'up' },
];
