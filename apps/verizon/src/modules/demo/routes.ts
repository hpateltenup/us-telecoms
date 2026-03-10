import type { RouteRecordRaw } from 'vue-router';

export const demoRoutes: RouteRecordRaw[] = [
  {
    path: '/demo',
    name: 'demo',
    component: () => import('./views/DemoView.vue'),
  },
];
