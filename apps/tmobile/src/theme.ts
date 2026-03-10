import { createBrandPreset, type BrandConfig } from '@us-telecoms/ui-kit';

export const brand: BrandConfig = {
  preset: createBrandPreset({
    semantic: {
      primary: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
        950: '#500724',
      },
    },
     components: {
      button: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  }),
};
