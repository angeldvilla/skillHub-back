import * as schema from '@/db/schema';
import { Inject, Injectable } from '@nestjs/common';
import { eq, gt, gte, ilike, lt, lte } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { CreateJobDto } from './dto/create-job.dto';
import { FilterJobDto } from './dto/filter-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobService {
  constructor(
    @Inject('DB_SKILLHUB')
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

  async findAll(filters: FilterJobDto) {
    const query = this.jobSchema.select().from(schema.jobs);

    if (filters.category) {
      query.where(eq(schema.jobs.category, filters.category));
    }

    if (filters.location) {
      query.where(ilike(schema.jobs.location, `%${filters.location}%`));
    }

    if (filters.title) {
      query.where(ilike(schema.jobs.title, `%${filters.title}%`));
    }

    if (filters.wage) {
      const { operator, value } = filters.wage;
      switch (operator) {
        case 'gt':
          query.where(gt(schema.jobs.wage, value));
          break;
        case 'lt':
          query.where(lt(schema.jobs.wage, value));
          break;
        case 'gte':
          query.where(gte(schema.jobs.wage, value));
          break;
        case 'lte':
          query.where(lte(schema.jobs.wage, value));
          break;
        case 'eq':
          query.where(eq(schema.jobs.wage, value));
          break;
        default:
          break;
      }
    }

    try {
      const jobs = await query;

      if (!jobs) throw new Error('Jobs not found');

      return jobs;
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to retrieve jobs: ${err.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const job = await this.jobSchema.query.jobs.findFirst({
        where: eq(schema.jobs.id, id),
        with: { user: true },
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
