import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['lucide-react'],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://vendor-portal-api.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});