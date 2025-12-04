import { register, init, locale } from 'svelte-i18n';

register('en', () => import('./en-EN.json'));

init({
  fallbackLocale: 'en',
  initialLocale: 'en'
});

export { locale };
