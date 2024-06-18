import { config } from 'dotenv';

config({ path: './.env' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

export const DATABASE_URL = process.env.DATABASE_URL;
