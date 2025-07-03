import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

const app = express();

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Add CORS headers for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });
  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Setup for different environments
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    // For production (including Vercel), serve static files and handle SPA routing
    serveStatic(app);

    // Fallback for SPA routing - catch all non-API routes
    app.get('*', (req, res) => {
      // Don't handle API routes here
      if (req.path.startsWith('/api')) {
        return res.status(404).json({ message: 'API route not found' });
      }

      // Serve index.html for all other routes (SPA routing)
      res.sendFile(path.join(__dirname, 'index.html'));
    });
  }

  // Port configuration for different environments
  const port = process.env.PORT || 5000;
  const host = process.env.VERCEL ? undefined : "0.0.0.0"; // Let Vercel handle host binding

  const serverConfig = process.env.VERCEL 
    ? { port } 
    : { port, host, reusePort: true };

  server.listen(serverConfig, () => {
    log(`serving on port ${port}`);
  });
})();