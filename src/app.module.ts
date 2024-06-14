import * as schema from '@/db/schema';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobModule } from './job/job.module';
import { SeederModule } from './seed/seed.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DrizzlePGModule.register({
      tag: 'DB_SKILLHUB',
      pg: {
        config: {
          connectionString: process.env.DATABASE_URL,
        },
        connection: 'pool',
      },
      config: { schema: { ...schema } },
    }),
    JobModule,
    SeederModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
