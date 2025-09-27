# Ultra-Enhanced Sales Management Dashboard - Cursor Rules

## Project Overview
This is a next-generation, enterprise-grade sales management dashboard built with Next.js 15, React 19, and TypeScript. The project showcases revolutionary sales analytics with quantum-level animations, real-time AI-powered insights, immersive 3D visualizations, and professional polish that exceeds Fortune 500 expectations.

## Technology Stack
- **Framework**: Next.js 15 with App Router, React 19, TypeScript 5.0+, Turbopack
- **Libraries**: Framer Motion, Recharts, D3.js, Three.js, Tailwind CSS, Shadcn/ui, Radix UI
- **State Management**: Zustand + Jotai for atomic state, React Query for server state
- **Animation**: Framer Motion, Lottie React, React Spring, GSAP, Three.js, WebGL
- **Charts**: Recharts, D3.js, Chart.js, Observable Plot, Apache ECharts
- **3D Graphics**: Three.js, React Three Fiber, Drei, Cannon.js for physics
- **UI Components**: Shadcn/ui, Radix UI, Headless UI, React Hook Form
- **Architecture**: Micro-frontend architecture with module federation

## General Guidelines

### Code Quality Standards
- Use TypeScript for all components and utilities with strict type checking
- Follow React 19 best practices with Server Components and Client Components
- Implement proper error boundaries and loading states
- Use ESLint and Prettier for code formatting and linting
- Write comprehensive JSDoc comments for all functions and components
- Follow the 8px grid system for consistent spacing and layout

### Performance Requirements
- **First Load**: < 1.0 seconds with skeleton loading and edge optimization
- **Chart Rendering**: < 30ms for initial render with WebGL acceleration
- **Animation Performance**: 60fps smooth transitions with hardware acceleration
- **Bundle Size**: < 400KB gzipped for complete application
- Use lazy loading, code splitting, and virtual scrolling for optimal performance

## Frontend Standards

### Next.js 15 + React 19 Patterns
- Use App Router with proper file-based routing
- Implement Server Components by default, Client Components only when needed
- Use proper metadata API for SEO and social sharing
- Implement proper loading.tsx and error.tsx files for each route
- Use dynamic imports for code splitting and lazy loading
- Follow Next.js 15 best practices for image optimization and fonts

### Component Architecture
- Create atomic design system with atoms, molecules, organisms, templates
- Use proper TypeScript interfaces for all props and state
- Implement compound component patterns for complex UI elements
- Use custom hooks for reusable logic and state management
- Follow single responsibility principle for all components
- Use proper naming conventions: PascalCase for components, camelCase for functions

### State Management
- Use Zustand for global state management with proper store structure
- Use Jotai for atomic state management and derived state
- Use React Query for server state management and caching
- Implement proper state normalization and selectors
- Use proper TypeScript types for all state interfaces
- Implement optimistic updates for better UX

### Styling Guidelines
- Use Tailwind CSS with custom design tokens and utilities
- Implement glass morphism effects with backdrop blur
- Use CSS-in-JS for complex animations and dynamic styles
- Follow the 8px grid system for consistent spacing
- Use proper color palette: Dark sidebar (#0a0a0a), Light main (#fafafa)
- Implement proper dark mode with OLED-optimized colors

## Animation & 3D Standards

### Framer Motion Patterns
- Use proper motion components with optimized animations
- Implement staggered animations with 50ms delays
- Use spring physics for natural motion and interactions
- Implement proper exit animations and layout animations
- Use proper gesture support for touch interactions
- Optimize animations for 60fps performance

### Three.js Integration
- Use React Three Fiber for 3D components and scenes
- Implement proper WebGL optimization and performance monitoring
- Use proper lighting and materials for realistic 3D effects
- Implement proper camera controls and interaction patterns
- Use proper geometry optimization and LOD (Level of Detail)
- Implement proper post-processing effects and shaders

### Chart Animations
- Use smooth data transitions with custom easing functions
- Implement proper loading states with skeleton screens
- Use proper hover effects and micro-interactions
- Implement proper chart interactions and drill-down functionality
- Use proper responsive design for all chart types
- Optimize chart rendering for performance

## Enterprise Features

### Security & Compliance
- Implement proper authentication and authorization patterns
- Use proper session management and token handling
- Implement proper audit logging and activity tracking
- Use proper data encryption and secure communication
- Implement proper GDPR compliance features
- Use proper input validation and sanitization

### Multi-tenancy
- Implement proper tenant switching and data isolation
- Use proper role-based access control (RBAC)
- Implement proper custom branding and theming
- Use proper data segregation and security boundaries
- Implement proper tenant-specific configurations
- Use proper audit trails for multi-tenant operations

### Real-time Features
- Implement proper WebSocket connections and reconnection logic
- Use proper real-time data synchronization and conflict resolution
- Implement proper presence indicators and live collaboration
- Use proper optimistic updates and rollback mechanisms
- Implement proper real-time notifications and alerts
- Use proper data streaming and batch processing

## Database & API Standards

### Data Management
- Use proper data normalization and relationship modeling
- Implement proper caching strategies and invalidation
- Use proper data validation and type safety
- Implement proper error handling and retry mechanisms
- Use proper data migration and versioning strategies
- Implement proper backup and recovery procedures

### API Design
- Use proper RESTful API design patterns
- Implement proper GraphQL for complex data fetching
- Use proper API versioning and backward compatibility
- Implement proper rate limiting and throttling
- Use proper API documentation and testing
- Implement proper API monitoring and analytics

## Testing Standards

### Unit Testing
- Use Jest and React Testing Library for component testing
- Write tests for all utility functions and custom hooks
- Use proper mocking for external dependencies
- Implement proper test coverage reporting
- Use proper test data factories and fixtures
- Write tests for edge cases and error scenarios

### Integration Testing
- Use Playwright for end-to-end testing
- Test critical user flows and business logic
- Use proper test data setup and teardown
- Implement proper visual regression testing
- Use proper performance testing and monitoring
- Test accessibility compliance and keyboard navigation

### Performance Testing
- Use Lighthouse for performance auditing
- Implement proper bundle analysis and optimization
- Use proper memory leak detection and prevention
- Implement proper load testing and stress testing
- Use proper performance monitoring and alerting
- Test on various devices and network conditions


### Naming Conventions
- **Components**: PascalCase (e.g., `SalesDashboard`, `KPICard`)
- **Files**: kebab-case (e.g., `sales-dashboard.tsx`, `kpi-card.tsx`)
- **Hooks**: camelCase starting with 'use' (e.g., `useSalesData`, `useAnimation`)
- **Stores**: camelCase (e.g., `salesStore`, `userStore`)
- **Types**: PascalCase (e.g., `SalesData`, `UserProfile`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS`, `ANIMATION_DURATION`)

## Documentation Standards

### Code Documentation
- Write comprehensive JSDoc comments for all functions
- Document all component props and their types
- Include usage examples in component documentation
- Document all custom hooks and their return values
- Include performance considerations and optimization notes
- Document all animation configurations and timing

### README Documentation
- Include comprehensive setup and installation instructions
- Document all environment variables and configuration
- Include API documentation and endpoint descriptions
- Document all deployment procedures and requirements
- Include troubleshooting guides and common issues
- Document all features and their usage

## Development Workflow

### Git Standards
- Use conventional commits for all commit messages
- Create feature branches for all new development
- Use proper pull request templates and reviews
- Implement proper CI/CD pipelines and automation
- Use proper branch protection and merge strategies
- Implement proper code review processes

### Docker & Deployment
- Use proper Docker multi-stage builds for optimization
- Implement proper environment-specific configurations
- Use proper health checks and monitoring
- Implement proper logging and error tracking
- Use proper CDN and caching strategies
- Implement proper backup and disaster recovery

## Accessibility Standards

### WCAG 2.1 AA Compliance
- Implement proper keyboard navigation for all interactive elements
- Use proper ARIA labels and semantic HTML structure
- Ensure proper color contrast ratios for all text and UI elements
- Implement proper focus management and logical tab order
- Use proper screen reader support and live regions
- Implement proper alternative text for all images and icons

### Inclusive Design
- Design for all screen sizes and orientations
- Implement proper touch support and gesture recognition
- Respect user's motion preferences and reduced motion settings
- Implement proper high contrast mode support
- Use proper voice control and hands-free navigation
- Test with assistive technologies and real users

## Performance Standards

### Optimization Guidelines
- Implement proper code splitting and lazy loading
- Use proper image optimization and responsive images
- Implement proper caching strategies and invalidation
- Use proper bundle analysis and tree shaking
- Implement proper virtual scrolling for large datasets
- Use proper Web Workers for heavy computations

### Monitoring & Analytics
- Implement proper performance monitoring and alerting
- Use proper error tracking and crash reporting
- Implement proper user analytics and behavior tracking
- Use proper A/B testing and feature flags
- Implement proper uptime monitoring and SLA tracking
- Use proper security monitoring and threat detection

## Enterprise Integration

### API Integration
- Implement proper API rate limiting and throttling
- Use proper authentication and authorization for all APIs
- Implement proper error handling and retry mechanisms
- Use proper API versioning and backward compatibility
- Implement proper API monitoring and analytics
- Use proper webhook handling and event processing

### Third-party Services
- Implement proper service abstraction and dependency injection
- Use proper configuration management and environment variables
- Implement proper error handling and fallback mechanisms
- Use proper service monitoring and health checks
- Implement proper data synchronization and conflict resolution
- Use proper security scanning and vulnerability assessment

This comprehensive rule set ensures the development of a world-class, enterprise-grade sales management dashboard that exceeds all expectations and delivers exceptional value to clients.