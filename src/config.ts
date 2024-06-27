import { config } from 'dotenv';

config();

const msg = 'Missing environment variable';

if (!process.env.PORT) {
  throw new Error(`${msg}: PORT`);
}

if (!process.env.DATABASE_URL) {
  throw new Error(`${msg}: DATABASE_URL`);
}

if (!process.env.JWT_SECRET) {
  throw new Error(`${msg}: JWT_SECRET`);
}

export const PORT = process.env.PORT;
export const DATABASE_URL = process.env.DATABASE_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
