import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
   base: '/Portfolio',
  server: {
    port: process.env.PORT ? +process.env.PORT : 5173,
    host: '0.0.0.0',
  },  
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude unnecessary dependencies
  },
  build: {
    outDir: "dist",
  }
});
