import { Public } from '@/auth/decorators/public.decorator';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { FilterJobDto } from './dto/filter-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  create(@Body(new ValidationPipe()) createJobDto: CreateJobDto) {
    return this.jobService.create(createJobDto);
  }

  @Public()
  @Get()
  findAll(
    @Query('category') category?: FilterJobDto['category'],
    @Query('location') location?: string,
    @Query('title') title?: string,
    @Query('wageOperator') wageOperator?: 'gt' | 'lt' | 'gte' | 'lte' | 'eq',
    @Query('wageValue') wageValue?: number,
  ) {
    const filters: FilterJobDto = {};

    if (category) {
      filters.category = category;
    }

    if (location) {
      filters.location = location;
    }

    if (title) {
      filters.title = title;
    }

    if (wageOperator && wageValue !== undefined) {
      filters.wage = { operator: wageOperator, value: wageValue };
    }

    return this.jobService.findAll(filters);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateJobDto: UpdateJobDto,
  ) {
    return this.jobService.update(+id, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobService.remove(+id);
  }
}
