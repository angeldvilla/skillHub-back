import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  imports: [],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeederModule {}
