import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createPrimeVueConfig } from '@us-telecoms/ui-kit';
import App from './App.vue';
import { router } from './router';
import { brand } from './theme';

import 'primeicons/primeicons.css';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, createPrimeVueConfig(brand.preset));

app.mount('#app');
