import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mkcert from 'vite-plugin-mkcert';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
    // Local-only: trusted HTTPS via mkcert (skip in CI where certs aren't available)
    ...(!process.env.CI ? [mkcert()] : []),
  ],
  // Base path: Update for GitHub Pages or other deployments
  // '/<repo-name>/' for GitHub Pages, '/' for local dev
  base: command === 'build' ? '/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
}));
