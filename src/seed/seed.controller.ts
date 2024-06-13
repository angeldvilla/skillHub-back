import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async seed() {
    await this.seedService.seed();
    return { status: 201, message: 'Database seeded successfully!' };
  }
}
