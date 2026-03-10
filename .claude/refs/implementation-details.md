# Implementation Details: us-telecoms Monorepo

## Overview

This document captures what was actually implemented in the monorepo, including deviations from the original plan, theming architecture, CSS layer strategy, and all key patterns.

---

## Theming Architecture

### Two-Layer Theme System

Theming is split into **two independent layers** that work together:

| Layer | Purpose | Technology |
|-------|---------|------------|
| **PrimeVue Theme** | Component styling (buttons, inputs, dialogs) | `@primeuix/themes` preset system (Aura base) |
| **Tailwind Theme** | Utility classes, layout tokens, brand colors | Tailwind CSS v4 `@theme` directive |

These two layers are coordinated via **CSS layers** to control specificity.

### PrimeVue Theming

**Core files:**
- `packages/ui-kit/src/theme/brand.ts` — provides `createBrandPreset()` and `createPrimeVueConfig()`
- `apps/*/src/theme.ts` — each carrier defines its own `BrandConfig`

**How it works:**
1. `createBrandPreset(overrides)` takes semantic color overrides and merges them into the Aura base preset using `definePreset()` from `@primeuix/themes`
2. `createPrimeVueConfig(preset)` wraps the preset into a full PrimeVue configuration object with dark mode selector (`.dark-mode`) and CSS layer settings
3. Each carrier app calls these in `main.ts` when registering PrimeVue

**BrandConfig interface (simplified from original plan):**
```typescript
export interface BrandConfig {
  preset: ReturnType<typeof definePreset>;
}
```

> **Change from plan:** The original plan included `font`, `radius`, and `googleFontUrl` fields in `BrandConfig`. These were removed — fonts are handled purely through CSS (`@theme` + HTML `<link>`) and radii are in the shared Tailwind theme.

### Tailwind v4 Theming

**Core file:** `packages/ui-kit/src/theme/tailwind.css`

Uses the Tailwind v4 `@theme` directive (no `tailwind.config.js/ts` anywhere):
```css
@import 'tailwindcss';

@theme {
  --color-brand-50 through --color-brand-950  /* 11-shade emerald palette */
  --font-sans: 'Inter', sans-serif;
  --radius-sm/md/lg: 4px / 8px / 12px;
}
```

Each carrier app overrides the font in its own `main.css`:
```css
@theme {
  --font-sans: '[Carrier Font]', sans-serif;
}
```

---

## CSS Layer Strategy

### Layer Order (lowest to highest priority)

```
tailwind-base → primevue → tailwind-utilities
```

### How Layers Are Set Up

**1. PrimeVue side** — configured in `createPrimeVueConfig()`:
```typescript
cssLayer: {
  name: 'primevue',
  order: 'tailwind-base, primevue, tailwind-utilities',
}
```

**2. App CSS side** — each carrier's `main.css`:
```css
@import '@us-telecoms/ui-kit/src/theme/tailwind.css' layer(tailwind-base);
@import 'tailwindcss/utilities' layer(tailwind-utilities);
```

### Why This Matters

- `tailwind-base` (lowest): Tailwind's reset + shared `@theme` tokens
- `primevue` (middle): PrimeVue component styles sit on top of base
- `tailwind-utilities` (highest): Tailwind utility classes can override PrimeVue when needed (e.g., `class="mt-4"` on a PrimeVue component)

This eliminates specificity fights between PrimeVue and Tailwind.

---

## Carrier Color Palettes

Each carrier provides a full 11-shade semantic primary palette in `theme.ts`:

| Carrier | Primary 500 | Primary 600 | Palette |
|---------|-------------|-------------|---------|
| **AT&T** | `#3b82f6` | `#2563eb` | Blue |
| **T-Mobile** | `#ec4899` | `#db2777` | Magenta/Pink |
| **Verizon** | `#ef4444` | `#dc2626` | Red |
| **Playground** | `#10b981` | `#059669` | Emerald/Green |

### Carrier Fonts

Fonts are applied via two mechanisms:
1. **Google Fonts `<link>`** in each app's `index.html`
2. **`@theme { --font-sans }`** override in each app's `main.css`

| Carrier | Font | Weights |
|---------|------|---------|
| AT&T | Roboto | 300, 400, 500, 700 |
| T-Mobile | Poppins | 300, 400, 500, 700 |
| Verizon | Nunito Sans | 300, 400, 500, 700 |
| Playground | Inter | 300, 400, 500, 700 |

---

## UI Kit Package (`@us-telecoms/ui-kit`)

### Exports

| Export | Type | Description |
|--------|------|-------------|
| `createBrandPreset()` | Function | Creates PrimeVue preset from Aura + overrides |
| `createPrimeVueConfig()` | Function | Full PrimeVue config with CSS layers + dark mode |
| `BrandConfig` | Type | Interface for carrier theme definition |
| `AppButton` | Component | PrimeVue Button wrapper with typed severity props |
| `AppShell` | Layout | App shell with header, content area, footer |
| `useLoader()` | Composable | Loading state management (`isLoading` + `withLoading()`) |

### AppShell Layout

- Props: `appName` (defaults to `'US Telecoms'`)
- Slots: `default`, `header-actions`, `footer`
- Provides consistent header/content/footer structure across all carrier apps

### AppButton Component

Wraps PrimeVue's `Button` with explicit typed props:
- `label`, `icon`, `severity` (`primary | secondary | success | info | warn | danger`), `outlined`, `loading`, `disabled`

---

## Shared Package (`@us-telecoms/shared`)

### API Layer
- **`axios-instance.ts`** — Pre-configured Axios with base URL from `VITE_API_BASE_URL` env var, 30s timeout, credentials enabled
- Request interceptor: placeholder for auth token injection
- Response interceptor: 401 → redirect to `/login`

### Constants
- **Carriers:** `CARRIERS` object + `CarrierId` type
- **US States:** All 50 states as `{ label, value }` array + `USStateCode` type

### Types
- `ApiResponse<T>` — `{ data: T; message: string; success: boolean }`
- `PaginatedResponse<T>` — extends ApiResponse with `total`, `page`, `pageSize`
- `SelectOption` — `{ label: string; value: string | number }`

### Validators
- `isValidPhone(value)` — US phone (10 digits, optional leading 1)
- `isValidZip(value)` — ZIP code (5-digit or 5+4)
- `isValidEmail(value)` — Basic email pattern

---

## App Bootstrap Pattern

Every carrier app follows the same `main.ts` pattern:

```typescript
import PrimeVue from 'primevue/config';
import { createPrimeVueConfig } from '@us-telecoms/ui-kit';
import { brand } from './theme';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, createPrimeVueConfig(brand.preset));
app.mount('#app');
```

CSS imports:
```typescript
import 'primeicons/primeicons.css';
import './assets/main.css';
```

---

## Demo Module (per carrier)

Each app ships with a `modules/demo/` module as a reference implementation:

- **`views/DemoView.vue`** — Phone validation input + button severity showcase
- **`services/demo.service.ts`** — Example API call using shared Axios
- **`store/demo.ts`** — Pinia store with `count` ref + `increment()` action
- **`routes.ts`** — Route record definition

Router in each app: `/` redirects to `/demo`, which lazy-loads `DemoView`.

---

## Build & Tooling

### Monorepo Stack
- **pnpm workspaces** — `packages/*` and `apps/*`
- **Turborepo** — orchestrates `dev`, `build`, `lint`, `test` across packages
- **Catalog versions** — all major deps pinned in `pnpm-workspace.yaml` catalog, referenced via `catalog:` in package.json files

### Vite Config (all apps identical)
- `@vitejs/plugin-vue` — Vue SFC support
- `@tailwindcss/vite` — Tailwind v4 JIT compilation
- Path alias: `@` → `./src`

### Code Quality
- **ESLint** (`@us-telecoms/eslint-config`): Vue 3 + TypeScript recommended rules, `multi-word-component-names` off, unused vars warn (ignoring `_` prefix)
- **Prettier**: single quotes, semicolons, trailing commas, 100 char width

---

## Changes from Original Plan

| Aspect | Original Plan | Actual Implementation |
|--------|--------------|----------------------|
| `BrandConfig` fields | `preset`, `font`, `radius`, `googleFontUrl` | Only `preset` — fonts/radius handled via CSS |
| `vue-i18n` | Listed as active dependency | Installed but not wired into apps |
| ESLint config format | `.eslintrc.cjs` at root | Shared `@us-telecoms/eslint-config` package |
| `.gitignore` | Listed as generated | Not present (not a git repo yet) |
| Composables | `useSnackbar`, `useLoader`, `useConfirmDialog` | Only `useLoader` implemented |
| Components | Multiple shared PrimeVue wrappers | Only `AppButton` implemented |
| Layouts | `AppHeader`, `AppFooter`, `AppNav` separate | Single `AppShell` component with slots |
