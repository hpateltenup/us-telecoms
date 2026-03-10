# Plan: us-telecoms Monorepo

## Context
Create a production-ready Vue 3 + TypeScript monorepo for US telecom apps (Verizon, T-Mobile, AT&T) plus a playground app, based on the architecture and UI proposals in the `refs/` folder.

## Tech Stack
- **Vue 3** (Composition API, `<script setup>`) + **TypeScript** (strict)
- **PrimeVue 4** (Aura theme) + **Tailwind CSS v4** (CSS-based config, NO tailwind.config files)
- **Pinia** (state management), **Vue Router 4**, **Vue I18n 9**, **Axios**
- **Vite** (build tool), **vue-tsc** (type checking)
- **pnpm workspaces + Turborepo** (monorepo tooling)
- **Vitest** (unit testing) + **Playwright** (e2e)
- **ESLint + Prettier** (code quality)

---

## Folder Structure

```
us-telecoms/
├── package.json                     # Workspace root — all shared deps here
├── pnpm-workspace.yaml              # Workspaces + version catalog
├── .npmrc                           # shamefully-hoist=true
├── turbo.json                       # Build pipeline
├── tsconfig.base.json               # Shared TS config
├── .eslintrc.cjs                    # Root ESLint
├── .prettierrc                      # Prettier config
├── .gitignore
│
├── packages/
│   ├── ui-kit/                      # @us-telecoms/ui-kit
│   │   ├── src/
│   │   │   ├── components/          # Shared PrimeVue wrappers
│   │   │   ├── composables/         # useSnackbar, useLoader, useConfirmDialog
│   │   │   ├── layouts/             # Shell, AppHeader, AppFooter, AppNav
│   │   │   └── theme/
│   │   │       ├── tailwind.css     # Shared @theme tokens (colors, fonts, radius)
│   │   │       └── brand.ts         # BrandConfig type + createBrandPreset() utility
│   │   ├── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── shared/                      # @us-telecoms/shared
│   │   ├── src/
│   │   │   ├── api/                 # Axios instance, interceptors, auth
│   │   │   ├── constants/           # Enums, US states, carrier IDs
│   │   │   ├── types/               # Shared TypeScript interfaces
│   │   │   └── validators/          # Phone, ZIP, email validators
│   │   ├── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── eslint-config/               # @us-telecoms/eslint-config
│       ├── index.js
│       └── package.json
│
├── apps/                        # Each carrier has identical structure
│   ├── verizon/                     # @us-telecoms/verizon
│   ├── tmobile/                     # @us-telecoms/tmobile
│   ├── att/                         # @us-telecoms/att
│   └── playground/                  # @us-telecoms/playground
│       ├── src/
│       │   ├── assets/
│       │   │   └── main.css         # @import shared theme + local @theme overrides
│       │   ├── theme.ts             # Carrier-specific BrandConfig (colors, font, radius)
│       │   ├── modules/
│       │   │   └── demo/
│       │   │       ├── views/       # Page-level components
│       │   │       ├── components/  # Module-specific components
│       │   │       ├── store/       # Pinia store
│       │   │       ├── services/    # API calls
│       │   │       └── routes.ts
│       │   ├── App.vue
│       │   ├── main.ts
│       │   └── router.ts
│       ├── .env.development
│       ├── .env.production
│       ├── index.html
│       ├── vite.config.ts
│       ├── tsconfig.json
│       └── package.json
```

---

## Dependency Strategy

### Centralized Versions — `pnpm-workspace.yaml`
```yaml
packages:
  - 'packages/*'
  - 'apps/*'

catalog:
  vue: ^3.5.29
  vue-router: ^5.0.3
  pinia: ^3.0.4
  vue-i18n: ^11.3.0
  primevue: ^4.5.4
  "@primeuix/themes": ^2.0.3
  primeicons: ^7.0.0
  axios: ^1.13.6
  typescript: ^5.9.3
  vite: ^7.3.1
  tailwindcss: ^4.2.1
```

### `.npmrc`
```
shamefully-hoist=true
```

### Root `package.json` — all shared deps centralized here
```jsonc
{
  "name": "us-telecoms",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "format": "prettier --write ."
  },
  "dependencies": {
    "vue": "catalog:",
    "vue-router": "catalog:",
    "pinia": "catalog:",
    "vue-i18n": "catalog:"
  },
  "devDependencies": {
    "typescript": "catalog:",
    "vite": "catalog:",
    "@vitejs/plugin-vue": "^6.0.4",
    "tailwindcss": "catalog:",
    "@tailwindcss/vite": "^4.2.1",
    "vue-tsc": "^3.2.5",
    "turbo": "^2.8.14",
    "eslint": "^10.0.3",
    "prettier": "^3.8.1",
    "vitest": "^4.0.18",
    "@us-telecoms/eslint-config": "workspace:*"
  }
}
```

### `packages/ui-kit/package.json`
```jsonc
{
  "name": "@us-telecoms/ui-kit",
  "version": "0.0.1",
  "private": true,
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {
    "lint": "eslint src/",
    "test": "vitest run"
  },
  "dependencies": {
    "primevue": "catalog:",
    "@primeuix/themes": "catalog:",
    "primeicons": "catalog:"
  },
  "peerDependencies": {
    "vue": "catalog:"
  }
}
```

### `packages/shared/package.json`
```jsonc
{
  "name": "@us-telecoms/shared",
  "version": "0.0.1",
  "private": true,
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {
    "lint": "eslint src/",
    "test": "vitest run"
  },
  "dependencies": {
    "axios": "catalog:"
  },
  "peerDependencies": {
    "vue": "catalog:"
  }
}
```

### `packages/eslint-config/package.json`
```jsonc
{
  "name": "@us-telecoms/eslint-config",
  "version": "0.0.1",
  "private": true,
  "main": "index.js",
  "dependencies": {
    "eslint-plugin-vue": "^9.32.0",
    "@typescript-eslint/eslint-plugin": "^8.26.0",
    "@typescript-eslint/parser": "^8.26.0"
  }
}
```

### Each carrier's `package.json` (minimal — everything else from root)
```jsonc
{
  "name": "@us-telecoms/verizon",  // change per carrier
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview",
    "lint": "eslint src/",
    "test": "vitest run"
  },
  "dependencies": {
    "@us-telecoms/ui-kit": "workspace:*",
    "@us-telecoms/shared": "workspace:*"
  }
}
```
> No vue/router/pinia/i18n/vite/tailwind here — all from root via hoisting.

---

## Tailwind v4 Approach
- No `tailwind.config.js/ts` files anywhere
- Shared tokens in `packages/ui-kit/src/theme/tailwind.css` using `@theme` directive
- Each carrier imports shared CSS and can add local `@theme` overrides in `src/assets/main.css`
- Uses `@tailwindcss/vite` plugin in each carrier's `vite.config.ts`

---

## Theming Strategy (Per-Carrier)

**ui-kit provides the type + utility:**
```typescript
// packages/ui-kit/src/theme/brand.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export interface BrandConfig {
  preset: ReturnType<typeof definePreset>;
  font: string;
  radius: string;
  googleFontUrl?: string;
}

export function createBrandPreset(
  overrides: Parameters<typeof definePreset>[1]
): ReturnType<typeof definePreset> {
  return definePreset(Aura, overrides);
}
```

**Each carrier defines its own theme:**
```typescript
// apps/verizon/src/theme.ts
import { createBrandPreset, type BrandConfig } from '@us-telecoms/ui-kit';

export const brand: BrandConfig = {
  preset: createBrandPreset({
    semantic: {
      primary: { 50: '#fef2f2', 500: '#ef4444', 900: '#7f1d1d' /* ... */ },
    },
  }),
  font: "'Poppins', sans-serif",
  radius: '4px',
  googleFontUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap',
};
```

**Why per-carrier:** Each carrier bundles only its own theme. Adding a new carrier doesn't touch shared packages.

---

## Key Rules
1. No carrier imports from another carrier — ever
2. Shared code lives in `packages/`
3. Each carrier builds & deploys independently
4. PrimeVue theming via per-carrier `theme.ts` using shared `createBrandPreset()`
5. Carriers never import from `primevue` directly — always through `@us-telecoms/ui-kit`

---

## What Gets Generated
1. Root configs: package.json, pnpm-workspace.yaml, .npmrc, turbo.json, tsconfig.base.json, .eslintrc.cjs, .prettierrc, .gitignore
2. `packages/ui-kit` — BrandConfig type, createBrandPreset utility, shared Tailwind v4 theme CSS, a sample component, a sample composable, shell layout
3. `packages/shared` — Axios instance, auth stub, constants, types, validators
4. `packages/eslint-config` — shared lint rules
5. 4 carrier apps (verizon, tmobile, att, playground) — each with its own theme.ts, a demo module, working Vite + Tailwind v4 + PrimeVue setup
6. Everything wired so `pnpm install && turbo run build` works out of the box

---

## Verification
- `pnpm install` — no errors
- `turbo run build` — all 4 apps build successfully
- `turbo run dev --filter=@us-telecoms/playground` — dev server starts, demo page renders with PrimeVue components + Tailwind styling
