import { createI18n } from 'vue-i18n';
import messages from './i18n/messages';

// Create VueI18n instance with options
const i18n = createI18n({
  locale: 'de', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  legacy: false, // you must set `false` to use Composition API
});

export default i18n;
