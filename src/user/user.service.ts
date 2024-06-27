import * as schema from '@/db/schema';
import { Inject, Injectable } from '@nestjs/common';
import { eq, ilike } from 'drizzle-orm';
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

  async findAll(username?: string) {
    try {
      return await this.userSchema.query.users.findMany({
        where: ilike(schema.users.username, `%${username}%`),
      });
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to retrieve users: ${err.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.userSchema.query.users.findFirst({
        where: eq(schema.users.id, id),
        with: { jobs: true },
      });

      if (!user) throw new Error('User not found');

      return user;
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to retrieve user: ${err.message}`);
    }
  }

  async findByUsername(username: string) {
    try {
      return await this.userSchema.query.users.findFirst({
        where: eq(schema.users.username, username),
      });
    } catch (error) {
      const err = error as Error;
      throw new Error(`Failed to retrieve user: ${err.message}`);
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
