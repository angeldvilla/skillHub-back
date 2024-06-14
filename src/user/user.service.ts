import * as schema from '@/db/schema';
import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('DB_SKILLHUB')
    private readonly userSchema: NodePgDatabase<typeof schema>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return this.userSchema
        .insert(schema.users)
        .values(createUserDto)
        .returning();
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to create user: ${err.message}`);
    }
  }

  async findAll() {
    try {
      return await this.userSchema.query.jobs.findMany();
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to retrieve jobs: ${err.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const job = await this.userSchema.query.jobs.findFirst({
        where: eq(schema.jobs.id, id),
      });

      if (!job) throw new Error('Job not found');

      return job;
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to retrieve job: ${err.message}`);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userSchema
        .update(schema.users)
        .set(updateUserDto)
        .where(eq(schema.users.id, id))
        .returning();

      if (!user) throw new Error('User not found');
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to update user: ${err.message}`);
    }
  }

  async remove(id: number) {
    try {
      const removed = await this.userSchema
        .delete(schema.users)
        .where(eq(schema.users.id, id))
        .returning();

      if (!removed) throw new Error('User not found');
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to remove user: ${err.message}`);
    }
  }
}
