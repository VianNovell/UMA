import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is not set!");
  console.error("For local development:");
  console.error("1. Copy .env.local to .env");
  console.error("2. Install PostgreSQL and create 'uma_local' database");
  console.error("3. Update DATABASE_URL in .env file");
  console.error("4. Run: npm run db:push");
  console.error("\nSee LOCAL_SETUP.md for detailed instructions.");
  process.exit(1);
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });