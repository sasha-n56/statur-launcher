import { register, init, locale, t } from 'svelte-i18n';

register('en', () => import('./en-EN.json'));

init({
  fallbackLocale: 'en',
  initialLocale: 'en'
});

export { locale, t };
