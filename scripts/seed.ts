import { db } from '@/db/drizzle';
import * as schema from '@/db/schema';
import { CreateJobDto } from '@/job/dto/create-job.dto';
import { mockJobs, mockUsers } from '@/seed/seed-data';
import { CreateUserDto } from '@/user/dto/create-user.dto';

async function seed() {
  const users: CreateUserDto[] = mockUsers;
  const jobs: CreateJobDto[] = mockJobs;

  try {
    // TODO: After the first run, make sure to uncomment these lines below to clear the database
    // console.log('Clearing database...');
    // await Promise.all([db.delete(schema.users), db.delete(schema.jobs)]);

    console.log('Seeding database...');
    await db.insert(schema.users).values(users);
    await db.insert(schema.jobs).values(jobs);
  } catch (error) {
    throw new Error('Failed to seed database');
  }
}

seed().then(() => console.log('Database seeded successfully!'));
