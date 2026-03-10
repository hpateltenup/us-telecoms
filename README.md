# US Telecoms Project

A monorepo containing multiple telecommunications application frontends built with Vue 3, Vite, and TypeScript.

## Project Structure

This monorepo contains the following applications:

- **apps/att** - AT&T telecommunications app
- **apps/tmobile** - T-Mobile telecommunications app
- **apps/verizon** - Verizon telecommunications app
- **apps/playground** - Playground/demo application

Additionally, it includes shared packages:

- **packages/shared** - Shared utilities, types, constants, and API configurations
- **packages/ui-kit** - Reusable UI components and layouts
- **packages/eslint-config** - Shared ESLint configuration

## Prerequisites

- Node.js (LTS recommended)
- pnpm package manager

## Getting Started

### 1. Clone the Project

```bash
git clone <repository-url>
cd us-telecoms
```

### 2. Install Dependencies

Install all dependencies for the monorepo using pnpm:

```bash
pnpm i
```

This command will install dependencies for all workspaces (apps and packages).

### 3. Run the Project

Start the development server:

```bash
npm run dev
```

This will start the development servers for all applications in watch mode.

## Available Scripts

The project uses Turbo for monorepo management. You can run:

- `npm run dev` - Start development servers for all applications
- `pnpm i` - Install dependencies across all workspaces
- `turbo build` - Build all applications and packages (if available)

## Project Management

This project uses:

- **pnpm** - Fast, disk space efficient package manager with workspace support
- **Turbo** - High-performance build system for monorepos
- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend build tool
- **TypeScript** - Typed superset of JavaScript

## Development

Each application in the `apps/` directory can be developed independently. They all share common configurations and utilities from the `packages/` directory.

### Example App Structure

Each app contains:

- `src/` - Source code
  - `modules/` - Feature modules
  - `assets/` - Static assets
  - `App.vue` - Root component
  - `main.ts` - Application entry point
  - `router.ts` - Vue Router configuration
  - `theme.ts` - Theme configuration

## License

Please refer to the repository for license information.
