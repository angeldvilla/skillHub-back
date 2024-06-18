import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
} from 'drizzle-orm/pg-core';

// Users
export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
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

// Jobs
export enum JobCategory {
  EDUCATION = 'EDUCATION',
  HEALTHCARE = 'HEALTHCARE',
  IT = 'IT',
  LOGISTIC = 'LOGISTIC',
  OCCUPATIONS = 'OCCUPATIONS',
  OTHER = 'OTHER',
  SALES = 'SALES',
  TOURISM = 'TOURISM',
}

export const categoryEnum = pgEnum('category', [
  JobCategory.EDUCATION,
  JobCategory.HEALTHCARE,
  JobCategory.IT,
  JobCategory.LOGISTIC,
  JobCategory.OCCUPATIONS,
  JobCategory.OTHER,
  JobCategory.SALES,
  JobCategory.TOURISM,
]);

export const jobs = pgTable('jobs', {
  id: serial('id').primaryKey(),
  category: categoryEnum('category').notNull().default(JobCategory.OTHER),
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
