# Unique Management Associates Website - replit.md

## Overview

This is a professional website for Unique Management Associates (U) Ltd, an accounting and tax consultancy firm based in Uganda. The application is a full-stack web solution built with React frontend and Express.js backend, providing company information, services showcase, and contact functionality with email integration.

## System Architecture

The application follows a full-stack TypeScript architecture with the following components:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **Email Service**: Resend API for handling contact form submissions
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **Deployment**: Configured for Replit with autoscale deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for Replit integration
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful endpoints under `/api` prefix
- **Middleware**: CORS enabled, JSON parsing, request logging
- **Development**: Hot reload with tsx for TypeScript execution

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Tables**:
  - `users`: Basic user authentication (id, username, password)
  - `contact_inquiries`: Contact form submissions (id, firstName, lastName, email, phone, service, message, createdAt)
- **Validation**: Zod schemas for type-safe data validation

### Email Integration
- **Service**: Resend API for transactional emails
- **Configuration**: Sends contact form notifications to Gmail with specific headers for inbox delivery
- **Features**: Auto-reply suppression, priority settings, custom labels

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form on frontend
   - Form data validated with Zod schema
   - POST request to `/api/contact` endpoint
   - Data stored in PostgreSQL database
   - Email notification sent via Resend API
   - Success confirmation returned to frontend

2. **Page Routing**:
   - Single-page application with smooth scrolling navigation
   - All routes serve the main home page with different sections
   - Sections: Hero, Services, About, Pricing, Benefits, Contact, Footer

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe ORM for database operations
- **resend**: Email API service
- **wouter**: Lightweight React router
- **zod**: Schema validation library

### Development Dependencies
- **typescript**: Type checking and compilation
- **vite**: Frontend build tool and dev server
- **tailwindcss**: Utility-first CSS framework
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Ports**: Frontend (5173), Backend (5000)
- **Hot Reload**: Enabled for both frontend and backend
- **Environment**: NODE_ENV=development

### Production Deployment
- **Platform**: Replit with autoscale deployment target
- **Build Process**: 
  1. `npm run build` - Vite builds frontend assets
  2. esbuild bundles backend TypeScript to JavaScript
- **Start Command**: `npm run start`
- **Environment**: NODE_ENV=production

### Environment Variables
- `RESEND_API_KEY`: Required for email functionality
- `NODE_ENV`: Environment mode (development/production)
- `DATABASE_URL`: PostgreSQL connection string (auto-provisioned on Replit)

### Database Migration
- **Tool**: Drizzle Kit for schema management
- **Command**: `npm run db:push` for schema synchronization
- **Configuration**: Located in `drizzle.config.ts`

## Changelog

```
Changelog:
- July 08, 2025. Added comprehensive SEO optimization for live website
  - Created sitemap.xml with all website sections and proper priorities
  - Added robots.txt file to guide search engine crawlers
  - Enhanced HTML meta tags with SEO keywords and descriptions
  - Added Open Graph and Twitter Card meta tags for social sharing
  - Configured Vercel routing for sitemap.xml and robots.txt files
  - Optimized for Uganda-based accounting services search visibility
- July 03, 2025. Successfully deployed UMA website to Vercel
  - Fixed TypeScript error in server/vite.ts with type declarations
  - Created vite-env.d.ts and server-types.d.ts for build compatibility
  - Fixed Vercel deployment redirect issue by correcting distDir path
  - Updated vercel.json to serve from dist/public instead of dist
  - Fixed JavaScript loading issue by configuring relative paths (base: './')
  - Added proper asset routing in vercel.json for JS/CSS files
  - Website successfully building and deploying to production
- July 03, 2025. Added PostgreSQL database integration
  - Created database connection with Drizzle ORM
  - Replaced MemStorage with DatabaseStorage
  - Contact form submissions now persist in database
  - Added db.ts for database configuration
- June 26, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```