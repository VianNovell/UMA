/// <reference types="vite/client" />

// Fix for Vite server options TypeScript error
declare module 'vite' {
  interface ServerOptions {
    allowedHosts?: boolean | 'auto' | 'all' | string[];
  }
}