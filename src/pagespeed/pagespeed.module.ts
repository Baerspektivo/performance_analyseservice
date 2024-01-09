import { Module } from '@nestjs/common';
import { PagespeedService } from './pagespeed.service';
import { PagespeedController } from './pagespeed.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [PagespeedController],
  providers: [PagespeedService],
})
export class PagespeedModule {}
