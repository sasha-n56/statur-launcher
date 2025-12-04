import {addMessages,  init, locale, t } from 'svelte-i18n';
import en from './en-EN.json';

addMessages('en', en);

init({
  fallbackLocale: 'en',
  initialLocale: 'en'
});

export { locale, t };
