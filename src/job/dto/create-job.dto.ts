import { JobCategory } from '@/db/schema';
import {
  IsEnum,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateJobDto {
  @IsNumber()
  @IsPositive()
  id!: number;

  @IsString()
  @Length(5, 50)
  title!: string;

  @IsString()
  @Length(10, 500)
  description!: string;

  @IsEnum(JobCategory)
  category!: JobCategory;

  @IsString()
  @Length(5, 80)
  location!: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  wage!: number;

  @IsUrl()
  @IsString()
  image!: string;

  @IsNumber()
  userId!: number;
}
