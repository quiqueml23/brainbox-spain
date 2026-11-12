import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base './' allows deploying to any GitHub Pages repository name without config changes.
export default defineConfig({
  plugins: [react()],
  base: './',
});
