# Ray's Developer Portfolio - AI Agent Instructions

## Project Overview
Personal portfolio website for Ray - Next.js 15 (App Router) + React 19 + TypeScript + Tailwind + Framer Motion. Production-ready with 6 interactive, fullscreen demo dashboards, strict accessibility, high-motion polish, and Lighthouse performance targets.

## Key Project Details
- **Name**: Ray
- **Email**: raydevex@gmail.com
- **Phone**: +63 927 222 0196
- **Languages**: English, Tagalog
- **Status**: Freelance Available
- **Title**: Full-Stack Systems Builder

## Technology Stack Requirements

### Core Framework
- **Next.js 15** with App Router (NOT Pages Router)
- **React 19** with functional components only
- **TypeScript** in strict mode - explicit return types required
- **Tailwind CSS** only - no other CSS frameworks
- **Framer Motion** only for animations - respect prefers-reduced-motion
- **Recharts** for data visualization
- **Radix UI** and **shadcn/ui** for primitives

### Required Dependencies
```json
{
  "next": "^15.5.3",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "typescript": "^5.9.2",
  "tailwindcss": "^3.3.0",
  "framer-motion": "latest",
  "recharts": "latest"
}
```

## Brand System (Exact Values)
```css
:root {
  --navy: #0b1220;
  --panel: #0f172a;
  --ink: #eef2f7;
  --accent: #FFC62E;
  --muted: #7f8ca2;
  --glass: rgba(10,15,25,0.6);
}
```

## File Structure (Mandatory)
```
src/
├── app/
│   ├── layout.tsx       # Root layout with Inter font
│   ├── page.tsx         # Single page with all sections
│   └── globals.css      # Tailwind + brand tokens
├── components/
│   ├── Header.tsx       # Sticky glass nav + phone pill
│   ├── Hero.tsx         # Mountain background + exact copy
│   ├── About.tsx        # Portrait + description + CV
│   ├── DemoCard.tsx     # Interactive cards with layoutId
│   ├── FullscreenModal.tsx  # Portal + focus trap
│   ├── DashboardShell.tsx   # Shared dashboard layout
│   ├── Skills.tsx       # Animated accordions
│   └── ui/              # Radix UI primitives
└── lib/
    ├── dashboards.ts    # Typed mock data
    └── motion.ts        # Framer Motion tokens
```

## Coding Standards

### TypeScript Rules
- Use `interface` for object shapes, `type` for unions
- Explicit return types for all public functions
- Strict null checks enabled
- No `any` types - use `unknown` if needed

### React Patterns
- Functional components only
- Custom hooks for reusable logic
- Proper dependency arrays in useEffect/useMemo/useCallback
- Use React.memo for performance when needed

### Animation Standards
```typescript
// Required motion tokens
export const motion = {
  spring: {
    snappy: { type: "spring", stiffness: 420, damping: 34 },
    soft: { type: "spring", stiffness: 260, damping: 28 }
  },
  fadeUp: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  },
  durations: { fade: 0.24, overlay: 0.28, staggerChild: 0.06 }
};
```

### Accessibility Requirements
- Semantic HTML elements with proper roles
- Visible focus rings using accent color
- aria-labels for interactive elements
- Screen reader summaries for charts
- Modal focus trap with Esc to close
- Full keyboard navigation support

## Six Dashboard Demos (Exact Specifications)

### Demo Cards Configuration
```typescript
const DEMO_CARDS = [
  { id: 'saas', title: 'SaaS Platform', tagline: 'Multi-tenant KPIs & usage analytics' },
  { id: 'ecommerce', title: 'E-commerce Store', tagline: 'Sales funnel, AOV, cohort retention' },
  { id: 'corporate', title: 'Corporate Dashboard', tagline: 'OKRs, team throughput, risk heatmap' },
  { id: 'custom', title: 'Custom App', tagline: 'Automation runs, queue health, SLA tracker' },
  { id: 'media', title: 'Media Hub', tagline: 'Content performance, watch time, CPM' },
  { id: 'education', title: 'Education/Niche Solution', tagline: 'LMS progress, quiz stats, churn' }
];
```

### Advanced Dashboard Features (Enterprise-Grade)

#### **Visual Polish & Micro-Interactions**
- **Glassmorphism effects** - Backdrop blur, subtle borders, inset highlights
- **Particle systems** - Floating dots/particles that react to cursor movement
- **Gradient overlays** - Animated gradients that shift based on data values
- **Morphing icons** - Icons that transform during state changes
- **Liquid animations** - Smooth blob-like transitions between states
- **Parallax scrolling** - Multi-layer depth with different scroll speeds
- **Magnetic interactions** - Elements that "pull" towards cursor on hover

#### **Advanced Chart Animations**
- **Staggered data loading** - Data points appear sequentially with spring physics
- **Path morphing** - Line charts that smoothly transform between datasets
- **Elastic scaling** - Charts that "bounce" into view with overshoot
- **Wave effects** - Ripple animations that emanate from interaction points
- **3D transforms** - Charts that rotate/tilt on hover with CSS 3D
- **Particle trails** - Data points leave glowing trails during transitions
- **Breathing animations** - Subtle pulsing to indicate live data

#### **Pro-Level Data Visualizations**
- **Heatmap calendars** - GitHub-style activity grids with hover details
- **Sankey diagrams** - Flow charts showing data movement between categories
- **Treemap visualizations** - Hierarchical data in nested rectangles
- **Radar/Spider charts** - Multi-dimensional data comparison
- **Candlestick charts** - Financial-style OHLC data representation
- **Gauge/Speedometer charts** - Arc-based KPI displays with animated needles
- **Network graphs** - Node-link diagrams for relationship data

#### **Advanced Interaction Patterns**
- **Gesture controls** - Swipe, pinch-to-zoom, two-finger pan on trackpad
- **Voice commands** - "Show last quarter", "Filter by paid users"
- **Contextual menus** - Right-click reveals chart-specific actions
- **Smart tooltips** - Contextual information with related metrics
- **Collaborative cursors** - Multiple user presence indicators
- **Annotation system** - Click to add notes/comments on data points
- **Time scrubbing** - Drag to "rewind" through historical data

#### **Performance Optimizations**
- **Canvas rendering** - Use HTML5 Canvas for complex visualizations
- **WebGL acceleration** - GPU-powered animations for large datasets
- **Virtual scrolling** - Render only visible table rows (10k+ rows)
- **Web Workers** - Background processing for data calculations
- **Intersection Observer** - Lazy load charts when they come into view
- **requestAnimationFrame** - Smooth 60fps animations
- **Memory pooling** - Reuse objects to prevent garbage collection

#### **Enterprise Features**
- **Real-time updates** - WebSocket simulation with live data changes
- **Export capabilities** - SVG, PNG, PDF with vector graphics
- **Responsive breakpoints** - Perfect mobile/tablet adaptations
- **Dark/Light themes** - Seamless theme switching with persistence
- **Keyboard shortcuts** - Power user navigation (J/K for navigation)
- **Undo/Redo system** - Action history with state management
- **Drill-down capabilities** - Click metrics to reveal detailed breakdowns

## Performance Budgets (Strict)
- Main route JS ≤ 180KB gzipped
- LCP ≤ 2.0s
- CLS ≤ 0.03
- First chart render ≤ 50ms
- Filter update ≤ 80ms

## Specific Dashboard Implementations (Expert-Level)

### **1. SaaS Platform Dashboard**
```typescript
// Advanced Features
- **Revenue Waterfall Chart** - Animated flow showing MRR changes
- **Cohort Retention Heatmap** - Color-coded user retention by signup month
- **Feature Adoption Matrix** - Bubble chart with feature usage vs satisfaction
- **Churn Prediction Model** - ML-style risk scoring with confidence intervals
- **Usage Heatmap Calendar** - GitHub-style activity grid per customer
- **Funnel Conversion Flow** - Sankey diagram from trial to paid
- **Real-time User Activity** - Live dot animation showing current active users
```

### **2. E-commerce Dashboard**
```typescript
// Advanced Features
- **Sales Geography Map** - Interactive world map with purchase hotspots
- **Customer Journey Visualization** - Path analysis from first visit to purchase
- **Inventory Prediction Charts** - Time series forecasting with confidence bands
- **A/B Test Results Display** - Statistical significance indicators
- **Product Recommendation Engine** - Network graph of product relationships
- **Cart Abandonment Flow** - Step-by-step drop-off visualization
- **Seasonal Trend Analysis** - Cyclical patterns with year-over-year comparison
```

### **3. Corporate Dashboard**
```typescript
// Advanced Features
- **OKR Progress Tracker** - Animated progress bars with milestone markers
- **Team Velocity Burndown** - Sprint progress with predictive completion
- **Risk Assessment Matrix** - Bubble chart with impact vs probability
- **Resource Allocation Sunburst** - Hierarchical spending breakdown
- **Performance Distribution** - Employee performance bell curve visualization
- **Project Timeline Gantt** - Interactive timeline with dependencies
- **Meeting Efficiency Metrics** - Calendar heatmap with productivity scores
```

### **4. Custom App Dashboard**
```typescript
// Advanced Features
- **System Architecture Diagram** - Live node-link graph with health indicators
- **Queue Processing Visualization** - Real-time job flow through pipeline stages
- **Error Rate Heatmap** - Service error patterns by time and component
- **Performance Histogram** - Response time distribution with percentiles
- **API Usage Throttling** - Rate limiting visualization with burst patterns
- **Deployment Pipeline Status** - Multi-stage CI/CD progress with animations
- **Log Analysis Patterns** - Text mining results with anomaly detection
```

### **5. Media Hub Dashboard**
```typescript
// Advanced Features
- **Content Performance Matrix** - Engagement vs reach scatter plot
- **Audience Demographic Breakdown** - Animated donut charts with transitions
- **Viral Content Tracker** - Social sharing network visualization
- **Watch Time Heatmap** - Video engagement by timestamp and demographics
- **Creator Revenue Distribution** - Waterfall chart showing revenue splits
- **Trending Content Radar** - Real-time trending topics with sentiment analysis
- **Cross-Platform Analytics** - Multi-platform performance comparison
```

### **6. Education Dashboard**
```typescript
// Advanced Features
- **Learning Path Visualization** - Interactive curriculum flowchart
- **Student Progress Tracking** - Individual learning curves with predictions
- **Knowledge Gap Analysis** - Skill assessment heatmap with recommendations
- **Engagement Pattern Analysis** - Time-of-day activity patterns
- **Quiz Performance Distribution** - Statistical analysis of test results
- **Peer Collaboration Network** - Student interaction graph
- **Adaptive Learning Recommendations** - AI-suggested learning paths
```

## Main Portfolio Design Specifications

### **Header Design (Sticky Glass Navigation)**
```typescript
// Exact specifications
- **Position**: Sticky top-0, z-50
- **Background**: backdrop-blur-md with glass effect
- **Border**: 1px bottom border-[#162036]
- **Height**: 80px
- **Max Width**: 1200px centered
- **Padding**: 6px horizontal, 4px vertical

// Left Section
- **Logo**: Circular SVG (32px), minimal design
- **Brand**: "Ray" in bold white, 18px font size
- **Gap**: 12px between logo and text

// Center Navigation
- **Links**: Home, About, Resume, Portfolio, Blog, Contact
- **Typography**: 16px Inter, text-ink color
- **Hover**: Underline animation with spring transition
- **Active**: Accent color highlight
- **Spacing**: 32px gaps between links
- **Scrollspy**: Offset 80px, smooth underline indicator

// Right Section  
- **Phone Pill**: "+63 927 222 0196"
- **Style**: bg-accent, text-navy, px-4 py-2, rounded-full
- **Typography**: font-medium, 14px
- **Hover**: Scale 1.02 transform
- **Action**: tel: link with copy functionality
```

### **Hero Section Design (Mountain Landscape)**
```typescript
// Background Layer
- **Image**: /assets/hero-mountains.jpg (dusk mountain scene)
- **Overlay**: Dark navy gradient rgba(11,18,32,0.8)
- **Stars**: Subtle star specks animation
- **Parallax**: Gentle scroll effect (0.5x speed)
- **Height**: min-h-screen (100vh)
- **Layout**: Flex items-center justify-center

// Content Layout
- **Container**: max-w-4xl mx-auto, text-center
- **Z-index**: relative z-10
- **Padding**: 6 horizontal

// Typography Hierarchy
- **H1**: 
  - Text: "Hi, I am Ray"
  - Size: text-5xl md:text-7xl (80px desktop, 48px mobile)
  - Weight: font-bold
  - Color: text-ink (#eef2f7)
  - "Ray" highlight: text-accent (#FFC62E) with subtle glow
  - Margin: mb-8

- **Subtext**:
  - Max width: 680px centered
  - Size: text-lg (18px)
  - Color: text-ink/90 (90% opacity)
  - Line height: leading-relaxed
  - Margin: mb-12

// Social Icons Row
- **Layout**: Flex center, gap-4
- **Icon Style**: 48px circular buttons
- **Border**: 1px border-ink/20
- **Background**: Transparent
- **Hover**: Scale 1.05 with soft transition
- **Icons**: Facebook, Twitter, GitHub (outline style)

// Animations
- **Stagger Entry**: 0.6s duration, 0.2s delays
- **Motion**: fadeUp pattern (opacity 0→1, y 20→0)
- **Easing**: Smooth ease-out curves
```

### **About Section Layout**
```typescript
// Section Container
- **Background**: bg-panel (#0f172a)
- **Padding**: py-20 (160px vertical)
- **Max Width**: 1200px centered
- **Layout**: Grid md:grid-cols-2, gap-12, items-center

// Left Column - Portrait
- **Image Container**: Relative positioning
- **Image**: 400x500px aspect ratio
- **Border Radius**: rounded-lg (8px)
- **Filter**: grayscale (100%)
- **Hover**: Transition to color (grayscale 0%)
- **Shadow**: Subtle depth shadow
- **Border**: 1px border-[#162036]

// Right Column - Content
- **Typography Hierarchy**:
  - H2: "Hi There! I'm Ray" (text-3xl, font-bold, text-ink, mb-4)
  - H3: "Full-Stack Systems Builder" (text-xl, text-accent, mb-6)
  - Description: text-ink/90, leading-relaxed, mb-8
  
- **Details List**:
  - Layout: space-y-2, mb-8
  - Format: <Label>: <Value>
  - Labels: text-accent
  - Values: text-ink/90
  - Items: Email, Languages, Freelance status

- **CTA Button**:
  - Text: "Download CV"
  - Style: bg-accent, text-navy, px-6 py-3, rounded-lg
  - Typography: font-medium
  - Hover: bg-accent/90 with transition
  - Effect: Press ripple animation
  - Focus: Visible ring with accent color
```

### **Portfolio Section (Demo Cards Grid)**
```typescript
// Section Layout
- **Background**: bg-navy (#0b1220)
- **Padding**: py-20
- **Title**: "Interactive Demo Dashboards" (text-4xl, center, mb-16)

// Grid System
- **Layout**: Grid system responsive
- **Mobile**: grid-cols-1 (single column)
- **Tablet**: grid-cols-2 (two columns)  
- **Desktop**: grid-cols-3 (three columns)
- **Gap**: gap-8 (32px spacing)
- **Max Width**: 1200px centered

// Demo Card Design
- **Container**: bg-panel, border border-[#162036], rounded-lg
- **Padding**: p-6 (24px all sides)
- **Cursor**: cursor-pointer
- **Focus**: Keyboard focusable with visible ring

// Card Content Hierarchy
- **Title**: text-xl, font-bold, text-ink, mb-2
- **Tagline**: text-accent, text-sm, mb-4
- **Description**: text-muted, text-sm, leading-relaxed
- **Hover Indicator**: 
  - Text: "Click to explore →"
  - Style: text-accent, text-xs, mt-4
  - Opacity: 0 → 1 on group-hover

// Card Animations
- **Hover Effects**:
  - Lift: translateY(-24px)
  - Tilt: rotateX(2deg) rotateY(2deg)
  - Duration: 200ms
  - Easing: ease-out
- **Tap**: Scale 0.98
- **LayoutId**: `demo-${id}` for shared-element transitions
```

### **Skills Section (Animated Accordions)**
```typescript
// Section Design
- **Background**: bg-panel (#0f172a)
- **Padding**: py-20
- **Title**: "Technical Expertise" (center, mb-12)

// Accordion Container
- **Layout**: space-y-4
- **Max Width**: 800px centered

// Individual Skill Category
- **Header Button**:
  - Background: bg-navy, border border-[#162036]
  - Padding: px-6 py-4
  - Layout: flex justify-between items-center
  - Hover: bg-navy/80 transition
  - Focus: Accent color ring

- **Header Content**:
  - Left: Skill name (font-semibold, text-ink)
  - Right: Percentage (text-accent, tabular-nums)
  - Icon: Chevron (rotate 180° when open)

// Expanded Content
- **Animation**: Height auto with smooth transition
- **Background**: bg-navy/50
- **Padding**: p-6
- **Border**: Top border-[#162036]

// Progress Bar
- **Track**: bg-ink/10, rounded-full, h-2
- **Fill**: bg-accent, rounded-full, animated width
- **Animation**: Spring physics, 800ms duration
- **Percentage**: Right-aligned, text-accent, tabular-nums

// Skill Items List
- **Layout**: grid grid-cols-2 md:grid-cols-3, gap-3, mt-4
- **Items**: text-sm, text-ink/80
- **Animation**: Staggered fadeUp, 60ms delays
```

### **Footer Design**
```typescript
// Footer Container
- **Background**: bg-navy (#0b1220)
- **Padding**: py-12
- **Border**: Top 1px border-[#162036]

// Content Layout
- **Max Width**: 1200px centered
- **Layout**: text-center

// Social Links
- **Layout**: flex justify-center gap-6, mb-6
- **Icon Style**: 40px, text-ink/60
- **Hover**: text-accent, scale 1.1
- **Platforms**: GitHub, LinkedIn, Twitter, Email

// Copyright
- **Text**: "© 2024 Ray. All rights reserved."
- **Style**: text-muted, text-sm
- **Additional**: "Available for freelance projects"
```

### **Responsive Breakpoints**
```typescript
// Mobile (< 768px)
- **Header**: Hamburger menu with Radix Sheet
- **Hero**: text-4xl, single column social
- **About**: Single column, portrait above content
- **Portfolio**: Single column grid
- **Navigation**: Full-screen overlay menu

// Tablet (768px - 1024px) 
- **Portfolio**: 2-column grid
- **About**: Side-by-side with reduced gaps
- **Header**: Condensed navigation

// Desktop (> 1024px)
- **Portfolio**: 3-column grid
- **Full navigation**: All links visible
- **Optimal spacing**: All design tokens at full scale
```

## Content Requirements (Use Exact Copy)

### Hero Section
**Headline**: "Hi, I am Ray" (Ray highlighted in accent color with glow)
**Subtext**: "All communication will be handled in writing to give you a clear, time-saving advantage: every detail is fully documented (so nothing is ever missed), every update is accessible anytime (so you don't waste time repeating discussions), and every step is transparent (so you're always in control). This structured system isn't just more efficient—it's the safest way to protect your project and guarantee smooth delivery from start to finish."

### About Section  
**Title**: "Hi There! I'm Ray"
**Subtitle**: "Full-Stack Systems Builder"
**Description**: "I build software that doesn't stop at code. Every project I deliver comes with its own scaffolding — automated tests, deployment flows, security checks, and compliance rules — so the moment it lands, it's already running as a complete system. No extra setup, no fragile handoffs, just a foundation built to grow without breaking."

### Skills Categories (Exact Order & Percentages)
- Frontend Development (95%)
- Backend Development (90%)
- DevOps & Infrastructure (85%)
- Project Generation & Automation (92%)
- Enterprise Architecture (88%)
- Technical Leadership (92%)
- Specialized Capabilities (90%)

## Testing Requirements

### Unit Tests (Vitest)
- Test component behavior, not implementation
- Mock external dependencies
- Accessibility testing with jest-axe
- Performance testing for chart rendering

### E2E Tests (Playwright)
- Modal accessibility and keyboard navigation
- Focus management flows
- Performance budgets validation
- Cross-browser compatibility

## Lighthouse Targets (Must Pass)
- Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 90

## Advanced Technical Implementation

### **Motion Design System**
```typescript
// Advanced animation library
export const motionSystem = {
  // Easing curves
  easing: {
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275],
    expo: [0.19, 1, 0.22, 1],
    smooth: [0.25, 0.46, 0.45, 0.94]
  },
  
  // Physics-based animations
  physics: {
    friction: 0.8,
    tension: 170,
    mass: 1,
    damping: 26,
    stiffness: 100
  },
  
  // Orchestrated sequences
  sequences: {
    dashboardEntry: {
      backdrop: { duration: 0.3, ease: "expo" },
      panel: { duration: 0.4, ease: "bounce", delay: 0.1 },
      content: { duration: 0.5, ease: "smooth", delay: 0.2 },
      charts: { duration: 0.6, ease: "elastic", delay: 0.3 }
    }
  }
};
```

### **Advanced Data Processing**
```typescript
// High-performance data transformations
export class DataProcessor {
  // Web Worker for heavy calculations
  private worker: Worker;
  
  // Memory-efficient data structures
  private dataCache = new Map<string, Float32Array>();
  
  // Real-time filtering with debouncing
  async processFilters(filters: FilterState): Promise<ProcessedData> {
    return new Promise(resolve => {
      this.worker.postMessage({ 
        type: 'FILTER_DATA', 
        payload: filters,
        timestamp: performance.now()
      });
    });
  }
  
  // Streaming data updates
  subscribeToUpdates(callback: (data: DataPoint[]) => void) {
    // WebSocket simulation with realistic latency
    setInterval(() => {
      const newData = this.generateRealisticData();
      callback(newData);
    }, 2000);
  }
}
```

### **3D Visualization Engine**
```typescript
// WebGL-powered chart rendering
export class Chart3DEngine {
  private gl: WebGLRenderingContext;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  
  // Particle system for data points
  createParticleSystem(data: DataPoint[]) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(data.length * 3);
    
    data.forEach((point, i) => {
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
    });
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      color: 0xFFC62E,
      size: 2,
      transparent: true,
      opacity: 0.8
    });
    
    return new THREE.Points(geometry, material);
  }
  
  // Smooth camera transitions
  animateCamera(target: THREE.Vector3, duration: number = 1000) {
    const start = this.camera.position.clone();
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing
      const eased = 1 - Math.pow(1 - progress, 3);
      
      this.camera.position.lerpVectors(start, target, eased);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }
}
```

### **Advanced State Management**
```typescript
// Time-travel debugging with state snapshots
export class DashboardState {
  private history: StateSnapshot[] = [];
  private currentIndex = -1;
  private maxHistory = 50;
  
  // Undo/Redo functionality
  undo(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.restoreState(this.history[this.currentIndex]);
    }
  }
  
  redo(): void {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      this.restoreState(this.history[this.currentIndex]);
    }
  }
  
  // Optimistic updates with rollback
  optimisticUpdate<T>(
    mutation: () => Promise<T>,
    rollback: () => void
  ): Promise<T> {
    const snapshot = this.createSnapshot();
    
    return mutation().catch(error => {
      rollback();
      this.restoreState(snapshot);
      throw error;
    });
  }
}
```

### **Performance Monitoring**
```typescript
// Real-time performance tracking
export class PerformanceMonitor {
  private metrics = new Map<string, number[]>();
  
  // Track render times
  measureRender(componentName: string, renderFn: () => void) {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    
    this.recordMetric(`${componentName}_render`, end - start);
  }
  
  // Memory usage tracking
  trackMemoryUsage() {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };
    }
  }
  
  // FPS monitoring
  startFPSMonitoring() {
    let fps = 0;
    let lastTime = performance.now();
    
    const measure = (currentTime: number) => {
      fps = Math.round(1000 / (currentTime - lastTime));
      lastTime = currentTime;
      
      this.recordMetric('fps', fps);
      requestAnimationFrame(measure);
    };
    
    requestAnimationFrame(measure);
  }
}
```

### **Accessibility Excellence**
```typescript
// Advanced a11y implementation
export class AccessibilityManager {
  // Live region announcements
  announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = message;
    
    document.body.appendChild(liveRegion);
    
    setTimeout(() => {
      document.body.removeChild(liveRegion);
    }, 1000);
  }
  
  // Keyboard navigation manager
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'j':
          this.navigateNext();
          break;
        case 'k':
          this.navigatePrevious();
          break;
        case '/':
          this.focusSearch();
          break;
        case 'Escape':
          this.exitMode();
          break;
      }
    });
  }
  
  // Screen reader chart descriptions
  generateChartDescription(chartData: ChartData): string {
    const { type, data, trends } = chartData;
    
    return `${type} chart showing ${data.length} data points. 
            Trend: ${trends.direction} by ${trends.percentage}%. 
            Highest value: ${trends.max} at ${trends.maxDate}.
            Lowest value: ${trends.min} at ${trends.minDate}.`;
  }
}
```

## Programmatic Checks (Run After Every Change)
```bash
# Required checks - all must pass
npm run lint          # ESLint validation
npm run type-check    # TypeScript compilation
npm run test          # Vitest unit tests
npm run test:e2e      # Playwright E2E tests
npm run build         # Next.js build verification
npm run lighthouse    # Performance audit
```

## Security Headers (Next.js Config)
```typescript
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self';"
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
];
```

## Critical Implementation Notes

1. **Single Page Application** - All content on one page with smooth scroll navigation
2. **Interactive Dashboards** - Fully functional with mock data, not static screenshots
3. **Shared-Element Transitions** - Cards must morph into fullscreen modals
4. **Performance Critical** - Charts must render within 50ms budget
5. **Accessibility First** - WCAG 2.1 AA compliance is mandatory
6. **Exact Branding** - Use specified colors, fonts, and content exactly

## Deployment
- **Platform**: Vercel
- **Environment**: Node.js ≥20.10.0
- **Build Command**: `npm run build`
- **Output**: Static export compatible

---

**This is a production-ready personal portfolio showcasing Ray's technical expertise through interactive dashboard demos. Every interaction must feel smooth, professional, and demonstrate enterprise-grade development skills.**
