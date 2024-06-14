import * as schema from '@/db/schema';
import { CreateJobDto } from '@/job/dto/create-job.dto';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { mockJobs, mockUsers } from './seed-data';

@Injectable()
export class SeedService {
  constructor(
    @Inject('DB_SKILLHUB')
    private readonly drizzle: NodePgDatabase<typeof schema>,
  ) {}

  async seed() {
    const users: CreateUserDto[] = mockUsers;
    const jobs: CreateJobDto[] = mockJobs;
    try {
      // TODO: After the first run, make sure to uncomment these lines below to clear the database
      // console.log('Clearing database...');
      // await Promise.all([
      //   this.drizzle.delete(schema.users),
      //   this.drizzle.delete(schema.jobs),
      // ]);

      console.log('Seeding database...');
      await this.drizzle.insert(schema.users).values(users);
      await this.drizzle.insert(schema.jobs).values(jobs);

      console.log('Database seeded!');
    } catch (error) {
      throw new Error('Failed to seed database');
    }
  }
}
