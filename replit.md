# Artfred Dela Cruz - Laravel Developer Portfolio

## Overview

This is a personal portfolio website for Artfred Dela Cruz, a Laravel developer. The application is built as a single-page application (SPA) with a React frontend for static deployment, featuring a Material Ocean high-contrast theme and portfolio showcase.

## User Preferences

Preferred communication style: Simple, everyday language.
Theme: Material Ocean theme with high contrast
Deployment: Static frontend application
Design: Simple code elements (not terminal-style)
Contact: Grid gallery for projects, navigation menu included

## System Architecture

### Overall Architecture
- **Frontend**: React 18 with TypeScript, using Vite as the build tool  
- **Contact**: Static contact form using mailto links
- **UI Framework**: Tailwind CSS with Material Ocean theme
- **State Management**: React hooks for client-side state
- **Form Handling**: Native HTML forms with mailto integration
- **Routing**: Single-page application with smooth scrolling navigation

### Technology Stack
- **Build Tool**: Vite with React plugin for static compilation
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

## Data Flow

### Contact Form Flow
1. User views contact information with direct links
2. Email links open default email client with pre-filled recipient
3. Phone links initiate direct calling
4. Social media links open profiles in new tabs
5. Static information display - no backend required

### Portfolio Display
- Static data for experience, projects, and skills updated with real information
- Skills section displays Languages/Frameworks and Tools from provided image
- Single-page application with smooth scrolling navigation
- Responsive design for mobile and desktop
- Material Ocean theme with high contrast colors

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Tailwind CSS, shadcn/ui
- **State Management**: TanStack Query for server state
- **Validation**: Zod for schema validation
- **Utilities**: clsx, tailwind-merge, date-fns

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Development**: Replit-specific plugins for development environment
- **Code Quality**: ESLint integration through Replit

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts the Vite development server
- **Build Process**: `npm run build` creates static production build
- **Preview**: `npm run preview` serves the built application locally

### Asset Management
- **Static Files**: Built to `dist` directory for static hosting
- **Images**: Placeholder images from Unsplash for project showcase
- **Fonts**: Google Fonts (Inter, JetBrains Mono) loaded via CDN
- **Icons**: Font Awesome 6 loaded via CDN

The application follows modern web development practices with TypeScript throughout, proper error handling, responsive design, and clean component architecture optimized for static deployment.