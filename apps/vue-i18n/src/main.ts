import './styles.scss';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './app/App.vue';
import i18n from './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './routes';
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);
app.use(VueQueryPlugin);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(i18n);

app.mount('#root');
