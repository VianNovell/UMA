/// <reference types="vite/client" />

// Fix for Vite server options TypeScript error at line 39
declare module 'vite' {
  interface ServerOptions {
    allowedHosts?: true | string[] | undefined;
    middlewareMode?: boolean | 'ssr' | 'html';
    hmr?: boolean | { server?: any; port?: number; host?: string };
  }
}