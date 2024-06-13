import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const jobs = pgTable('jobs', {
  id: serial('id').primaryKey(),
  category: text('category').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
  location: text('location').notNull(),
  title: text('title').notNull(),
  wage: integer('wage').notNull(),
});
