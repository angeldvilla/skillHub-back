import { JobCategory } from '@/db/schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  findAll() {
    return Object.values(JobCategory);
  }
}
