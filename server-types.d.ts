// TypeScript declarations for server build compatibility

declare module 'vite' {
  interface ServerOptions {
    middlewareMode?: boolean | 'ssr' | 'html';
    hmr?: boolean | {
      server?: any;
      port?: number;
      host?: string;
    };
    allowedHosts?: true | string[] | undefined;
  }
}