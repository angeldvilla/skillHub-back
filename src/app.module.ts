import * as schema from '@/db/schema';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { DATABASE_URL } from './config';
import { JobModule } from './job/job.module';
import { SeederModule } from './seed/seed.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DrizzlePGModule.register({
      tag: 'DB_SKILLHUB',
      pg: {
        config: { connectionString: DATABASE_URL },
        connection: 'pool',
      },
      config: { schema: { ...schema } },
    }),
    JobModule,
    SeederModule,
    UserModule,
    CategoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
