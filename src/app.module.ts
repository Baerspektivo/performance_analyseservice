import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Database } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audit } from './audit.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Audit]), ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [Database],
})
export class AppModule {}
