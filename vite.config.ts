import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
  resolve: {
    alias: {
      $components: path.resolve('./src/components'),
      $types: path.resolve('./src/types'),
      $const: path.resolve('./src/const'),
    },
  },
});
