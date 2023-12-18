import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Database } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audit } from './audit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Audit])],
  controllers: [AppController],
  providers: [Database],
})
export class AppModule {}
