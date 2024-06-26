import { JobCategory } from '@/db/schema';

export class FilterJobDto {
  category?: JobCategory;
  location?: string;
  title?: string;
  wage?: {
    operator: 'gt' | 'lt' | 'gte' | 'lte' | 'eq';
    value: number;
  };
}
