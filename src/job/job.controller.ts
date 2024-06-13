import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobService } from './job.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  create(@Body(new ValidationPipe()) createJobDto: CreateJobDto) {
    return this.jobService.create(createJobDto);
  }

  @Get()
  findAll() {
    return this.jobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateJobDto: UpdateJobDto,
  ) {
    return this.jobService.update(id, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobService.remove(id);
  }
}
