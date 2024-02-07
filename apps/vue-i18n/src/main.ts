import './styles.scss';
import { createApp } from 'vue';
import App from './app/App.vue';
import i18n from './i18n'; // Add this line

const app = createApp(App);
app.use(i18n);

app.mount('#root');
