import * as schema from '@/db/schema';
import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobService {
  constructor(
    @Inject('DB_DEV')
    private readonly jobSchema: NodePgDatabase<typeof schema>,
  ) {}

  async create(createJobDto: CreateJobDto) {
    try {
      return this.jobSchema
        .insert(schema.jobs)
        .values(createJobDto)
        .returning();
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to create job: ${err.message}`);
    }
  }

  async findAll() {
    try {
      return await this.jobSchema.query.jobs.findMany();
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to retrieve jobs: ${err.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const job = await this.jobSchema.query.jobs.findFirst({
        where: eq(schema.jobs.id, id),
      });

      if (!job) throw new Error('Job not found');

      return job;
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to retrieve job: ${err.message}`);
    }
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    try {
      const job = await this.jobSchema
        .update(schema.jobs)
        .set(updateJobDto)
        .where(eq(schema.jobs.id, id))
        .returning();

      if (!job) throw new Error('Job not found');

      return job;
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to update job: ${err.message}`);
    }
  }

  async remove(id: number) {
    try {
      const removed = await this.jobSchema
        .delete(schema.jobs)
        .where(eq(schema.jobs.id, id))
        .returning();

      if (!removed) throw new Error('Job not found');

      return removed;
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to remove job: ${err.message}`);
    }
  }
}
