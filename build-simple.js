import { build } from 'vite';
import path from 'path';

const config = {
  base: './',
  root: './client',
  build: {
    outDir: '../dist/public',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./client/src"),
      "@shared": path.resolve(process.cwd(), "./shared"),
      "@assets": path.resolve(process.cwd(), "./attached_assets"),
    },
  },
};

console.log('Building UMA website with correct paths...');
await build(config);
console.log('Build complete!');