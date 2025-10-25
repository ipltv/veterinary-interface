// backend/src/config/env.ts
import dotenv from "dotenv";

dotenv.config();

const requiredVars = [
  "NODE_ENV",
  "PORT",
  "DATABASE_URL",
  "FRONTEND_URL",
] as const;

// Create typed object to hold environment variables.
const env = {} as Record<(typeof requiredVars)[number], string>;

// Check if each required variable is defined.
for (const key of requiredVars) {
  if (!process.env[key]) {
    console.error(`Environment variable ${key} is not defined!
        Please create a .env file in the root directory and define the variable there.`);
    // Exit the process if a required variable is missing.
    process.exit(1);
  }
  env[key] = process.env[key] as string;
}

// Export env variables
export const NODE_ENV = env.NODE_ENV; // Application environment (development, production, etc.)
export const PORT = parseInt(env.PORT, 10); // Server port number
export const DATABASE_URL = env.DATABASE_URL; // Database connection string
export const FRONTEND_URL = env.FRONTEND_URL; // Frontend application URL