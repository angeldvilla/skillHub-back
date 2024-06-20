import { DATABASE_URL } from '@/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  out: './drizzle',
  dbCredentials: { url: DATABASE_URL },
  verbose: true,
  strict: true,
});
