import { build } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const config = defineConfig({
  plugins: [react()],
  root: './client',
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './client/index.html'
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./client/src"),
      "@shared": path.resolve(process.cwd(), "./shared"),
      "@assets": path.resolve(process.cwd(), "./attached_assets"),
    }
  }
});

build(config);