import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Database } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audit } from './audit.entity';
import { ConfigModule } from '@nestjs/config';
import { PagespeedModule } from './pagespeed/pagespeed.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Audit]),
    ConfigModule.forRoot(),
    PagespeedModule,
  ],
  controllers: [AppController],
  providers: [Database],
})
export class AppModule {}
