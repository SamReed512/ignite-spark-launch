# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a Vite-based React application built with TypeScript for the Neuron Garage franchise website. The project uses a modern tech stack optimized for fast development and production builds.

### Tech Stack
- **Build Tool**: Vite with React SWC plugin
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives
- **Notifications**: Sonner for toast notifications
- **Forms**: React Hook Form with Zod validation

### Project Structure
- `src/pages/` - Route components (Index.tsx is the main landing page)
- `src/components/ui/` - shadcn/ui component library (extensive set of pre-built components)
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `App.tsx` - Main app component with providers and routing
- Route structure: "/" (Index) and catch-all "*" (NotFound)

### Key Features
- Single-page franchise website with comprehensive sections
- Responsive design with mobile-first approach
- Complete shadcn/ui component library integration
- Tailwind CSS with custom design system
- Path alias configured (`@/` maps to `src/`)

### Development Notes
- Uses Lovable platform integration (lovable-tagger plugin in dev mode)
- Component library is fully set up - leverage existing UI components before creating new ones
- Tailwind config includes custom color scheme and animations
- All UI components follow shadcn/ui patterns and conventions