import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// User site https://yahia-sa.github.io/ — served from repo root (not /repo-name/)
export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
