import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Remove external configuration as we want to bundle lucide-react
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
        },
      },
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
  resolve: {
    // Ensure proper module resolution
    dedupe: ['react', 'react-dom', 'lucide-react'],
  },
});