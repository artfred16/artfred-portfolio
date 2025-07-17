# Artfred Dela Cruz - Laravel Developer Portfolio

## Overview

This is a personal portfolio website for Artfred Dela Cruz, a Laravel developer. The application is built as a single-page application (SPA) with a React frontend optimized for static deployment, featuring a Material Ocean high-contrast theme and portfolio showcase.

## User Preferences

Preferred communication style: Simple, everyday language.
Theme: Material Ocean theme with high contrast
Deployment: Static page compilation (no server-side required)
Design: Simple code elements (not terminal-style)
Contact: Grid gallery for projects, navigation menu included

## System Architecture

### Overall Architecture
- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Optimized for static deployment (no server-side required)
- **Database**: Static contact form using mailto links (no database required)
- **UI Framework**: Tailwind CSS with Material Ocean theme
- **State Management**: React hooks for client-side state
- **Form Handling**: Native HTML forms with mailto integration
- **Routing**: Single-page application with smooth scrolling navigation

### Technology Stack
- **Runtime**: Node.js with ESM modules (development only)
- **Frontend Build**: Vite with React plugin optimized for static compilation
- **Backend Build**: Removed server dependencies for static deployment
- **Database**: Not required - using mailto for contact form
- **ORM**: Removed - not needed for static deployment
- **CSS**: Tailwind CSS with Material Ocean high-contrast theme
- **Icons**: Font Awesome 6
- **Fonts**: Inter and JetBrains Mono

## Key Components

### Frontend Structure
- **App.tsx**: Main application component with routing and providers
- **Pages**: Home, Experience, Projects, Contact, and 404 pages
- **Components**: Reusable UI components including navigation, hero, contact form, project cards, and timeline items
- **UI Components**: Complete shadcn/ui component library for consistent design
- **Hooks**: Custom hooks for mobile detection and toast notifications

### Backend Structure
- **Server**: Express.js application with middleware for logging and error handling
- **Routes**: RESTful API endpoints for contact form submission
- **Storage**: Abstracted storage layer with in-memory implementation for development
- **Vite Integration**: Development server integration with HMR support

### Database Schema
- **Contact Messages**: Table storing user inquiries with fields for name, email, subject, message, and timestamps
- **Schema Management**: Drizzle ORM with TypeScript schema definitions and Zod validation

## Data Flow

### Contact Form Flow
1. User fills out contact form with validation
2. Form data is validated using Zod schemas
3. POST request sent to `/api/contact` endpoint
4. Server validates and stores message in database
5. Success/error response sent back to client
6. Toast notification shown to user

### Portfolio Display
- Static data for experience, projects, and skills
- Single-page application with smooth scrolling navigation
- Responsive design for mobile and desktop

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Tailwind CSS, shadcn/ui
- **State Management**: TanStack Query for server state
- **Validation**: Zod for schema validation
- **Utilities**: clsx, tailwind-merge, date-fns

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Development**: Replit-specific plugins for development environment
- **Code Quality**: ESLint integration through Replit

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Build Process**: `npm run build` creates production builds
- **Database Management**: `npm run db:push` for schema migrations

### Production Deployment
- **Build Output**: Frontend builds to `dist/public`, backend to `dist/index.js`
- **Server Start**: `npm start` runs the production server
- **Environment**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Database Configuration
- **Development**: Uses Neon Database with connection string
- **Schema**: Managed through Drizzle migrations in `./migrations` directory
- **Connection**: Configured through `drizzle.config.ts` with PostgreSQL dialect

### Asset Management
- **Static Files**: Served from `dist/public` in production
- **Images**: Placeholder images from Unsplash for project showcase
- **Fonts**: Google Fonts (Inter, JetBrains Mono) loaded via CDN
- **Icons**: Font Awesome 6 loaded via CDN

The application follows modern web development practices with TypeScript throughout, proper error handling, responsive design, and a clean separation of concerns between frontend and backend responsibilities.