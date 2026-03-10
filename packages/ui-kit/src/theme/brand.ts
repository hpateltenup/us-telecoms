import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import type { PrimeVueConfiguration } from 'primevue/config';

export interface BrandConfig {
  preset: ReturnType<typeof definePreset>;
}

export function createBrandPreset(
  overrides: Parameters<typeof definePreset>[1],
): ReturnType<typeof definePreset> {
  return definePreset(Aura, overrides);
}

export function createPrimeVueConfig(preset: ReturnType<typeof definePreset>): PrimeVueConfiguration {
  return {
    theme: {
      preset,
      options: {
        darkModeSelector: '.dark-mode',
        cssLayer: {
          name: 'primevue',
          order: 'tailwind-base, primevue, tailwind-utilities',
        },
      },
    },
  };
}
