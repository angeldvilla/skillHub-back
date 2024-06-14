import * as schema from '@/db/schema';
import { CreateJobDto } from '@/job/dto/create-job.dto';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { mockJobs } from './seed-data';

@Injectable()
export class SeedService {
  constructor(
    @Inject('DB_DEV') private readonly skillhub: NodePgDatabase<typeof schema>,
  ) {}

  async seed() {
    const jobs: CreateJobDto[] = mockJobs;
    try {
      // TODO: After the first run, make sure to uncomment these lines below to clear the database
      // console.log('Clearing database...');
      // await this.skillhub.delete(schema.jobs);

      console.log('Seeding database...');
      await this.skillhub.insert(schema.jobs).values(jobs);

      console.log('Database seeded!');
    } catch (error) {
      throw new Error('Failed to seed database');
    }
  }
}
