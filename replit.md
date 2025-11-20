# NATURMEGA Consulting Proposal Website

## Overview

This is a single-page web application designed to present a professional consulting proposal for NATURMEGA, a company requiring Talent Management consulting services. The website functions as an elegant, corporate presentation deck with a one-page scroll experience, featuring sections for situation analysis, identified findings, action plans, and service proposals. The application is built with a modern React + Express stack, utilizing shadcn/ui components for a polished, professional aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, configured for fast hot module replacement
- Wouter for lightweight client-side routing (single-page application with not-found handling)

**UI Component System**
- shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives as the foundation for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom color palette defined for NATURMEGA brand (deep blue #082053, beige/cream tones, pastel blues)
- Parkinsans font family (Google Fonts) used exclusively across all typography

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management
- Custom query client configured with specific error handling and refetch behavior
- No authentication required (public proposal document)

**Design System**
- Custom Tailwind configuration extending base theme with brand colors
- CSS variables for theme consistency (HSL color format)
- Spacing system using Tailwind units (8, 12, 16, 20, 24, 32) for vertical rhythm
- Component variants using class-variance-authority for consistent styling patterns

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- ESM module system throughout the codebase
- Custom middleware for request logging and JSON body parsing with raw body capture

**Development Environment**
- Vite middleware integration for development with HMR
- Conditional Replit-specific plugins (cartographer, dev banner) for cloud IDE integration
- Separate build process using esbuild for production server bundling

**API Structure**
- Routes prefixed with `/api` (currently placeholder implementation)
- Centralized route registration pattern in `server/routes.ts`
- Storage abstraction layer with in-memory implementation (MemStorage class)

### Data Storage Solutions

**Current Implementation**
- In-memory storage using Map data structures (MemStorage class)
- User entity with username/password fields
- UUID generation for entity IDs using Node's crypto module

**Prepared for Database Migration**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Schema definition using Drizzle's pgTable API
- Migration system configured to output to `./migrations` directory
- Connection string expected via `DATABASE_URL` environment variable
- Note: The application is architected to support Postgres through Drizzle, but may not currently use it until explicitly added

**Data Models**
- User table with id (UUID primary key), username (unique), and password fields
- Zod schema validation using drizzle-zod for type-safe inserts

### External Dependencies

**UI Component Libraries**
- @radix-ui/* packages (20+ component primitives): accordion, dialog, dropdown, select, toast, etc.
- embla-carousel-react for carousel/slider functionality
- lucide-react for consistent icon system
- cmdk for command palette functionality
- react-day-picker for calendar/date selection
- recharts for data visualization (chart components)

**Form Handling**
- react-hook-form for form state management
- @hookform/resolvers for validation schema integration
- zod for runtime type validation

**Database & ORM**
- drizzle-orm for type-safe database queries
- drizzle-kit for schema management and migrations
- @neondatabase/serverless for PostgreSQL connections
- connect-pg-simple for session storage (configured but not actively used)

**Build & Development Tools**
- TypeScript for static type checking
- Vite with @vitejs/plugin-react for frontend development
- esbuild for backend bundling
- Tailwind CSS with PostCSS for styling
- @replit/vite-plugin-* for Replit IDE integration

**Utilities**
- date-fns for date manipulation
- clsx and tailwind-merge (via cn utility) for conditional class names
- class-variance-authority for component variant management
- nanoid for generating unique identifiers

**Session Management**
- Express sessions configured with PostgreSQL store (via connect-pg-simple)
- Session persistence prepared but not actively implemented in current routes