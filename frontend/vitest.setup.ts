// vitest.setup.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Global CSS
import { mount } from '@vue/test-utils';
import App from './src/App.vue';

const pinia = createPinia();
const vuetify = createVuetify();

const app = createApp(App);
app.use(pinia);
app.use(vuetify);

// Mounting the app in test setup
app.mount('#app');
