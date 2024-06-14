import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
} from 'drizzle-orm/pg-core';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export const userEnum = pgEnum('role', [UserRole.ADMIN, UserRole.USER]);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  isActive: boolean('is_active').notNull().default(true),
  name: text('name').notNull(),
  password: text('password').notNull(),
  role: userEnum('role').notNull().default(UserRole.USER),
});

export const userRelations = relations(users, ({ many }) => ({
  jobs: many(jobs),
}));

export const jobs = pgTable('jobs', {
  id: serial('id').primaryKey(),
  category: text('category').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
  location: text('location').notNull(),
  title: text('title').notNull(),
  wage: integer('wage').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
});

export const jobRelations = relations(jobs, ({ one }) => ({
  user: one(users, {
    fields: [jobs.userId],
    references: [users.id],
  }),
}));
