import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/demo',
  },
  {
    path: '/demo',
    children: [
      {
        path: '',
        name: 'demo',
        component: () => import('./modules/demo/views/DemoView.vue'),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
