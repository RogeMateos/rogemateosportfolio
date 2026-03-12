# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Roge Mateos Portfolio** is a modern, fully responsive portfolio website built with React, TypeScript, and Tailwind CSS. It showcases projects, skills, experience, and a learning hub with educational resources.

## Common Commands

```bash
# Start development server (runs on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## High-Level Architecture

### Technology Stack
- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4 (configured on port 8080)
- **Styling**: Tailwind CSS 3.4 + shadcn/ui components
- **Routing**: React Router v6
- **State Management**: TanStack React Query + React Context API
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Project Structure

```
src/
├── pages/
│   ├── Index.tsx          # Main landing page (assembles all sections)
│   └── NotFound.tsx       # 404 page
├── components/
│   ├── Header.tsx         # Navigation header with theme toggle
│   ├── Hero.tsx           # Landing hero section with CTA
│   ├── About.tsx          # Personal background section
│   ├── Experience.tsx     # Work experience timeline
│   ├── Projects.tsx       # Featured projects showcase
│   ├── LearningHub.tsx    # Learning resources & documentation
│   ├── Skills.tsx         # Technical skills organized by category
│   ├── Blog.tsx           # Blog section
│   ├── TestAIReview.tsx   # AI code review tool (interactive)
│   ├── Footer.tsx         # Footer with links
│   └── ui/                # shadcn/ui component library (50+ components)
├── lib/
│   └── utils.ts           # Utility functions (cn() for className merging)
├── hooks/
│   ├── use-mobile.tsx     # Custom hook for mobile detection
│   └── use-toast.ts       # Toast notification hook
├── App.tsx                # Root component with providers setup
└── main.tsx               # Vite entry point
```

### Key Architectural Patterns

**Page Composition**: `Index.tsx` acts as a single-page landing site that imports and composes all major sections in order. No individual page routes exist—all content is on the main page.

**Component Organization**: Feature components (Hero, About, Projects, etc.) are self-contained and handle their own data/state. UI components are imported from the `ui/` directory (shadcn/ui).

**Providers Setup**: `App.tsx` wraps the application with:
- `QueryClientProvider` (React Query for server state)
- `TooltipProvider` (Radix UI tooltips)
- `BrowserRouter` (React Router for potential future routes)
- Toast providers for notifications

**Class Merging**: The `cn()` utility (in `lib/utils.ts`) merges Tailwind classes safely using `clsx` + `tailwind-merge`. Use this when conditionally applying Tailwind classes.

## Configuration Files

- **vite.config.ts**: Vite setup with `@` alias pointing to `src/`, port 8080
- **tsconfig.json**: TypeScript paths configured with `@/*` → `./src/*` alias
- **tailwind.config.ts**: Tailwind configuration for custom theming
- **eslint.config.js**: ESLint rules (disables unused variables/parameters rules)
- **components.json**: shadcn/ui configuration

## Development Notes

- **Port**: Vite dev server runs on `http://localhost:8080` (not the default 5173)
- **Path Alias**: Use `@/` to import from `src/` (e.g., `import Button from "@/components/ui/button"`)
- **Component Library**: Don't recreate UI components—use shadcn/ui from `components/ui/`
- **Styling**: All styling uses Tailwind CSS; keep component files focused on logic
- **No Tests**: There are no test files in this project; use linting only for code quality
