import { Module } from '@nestjs/common';
import { PageSpeedService } from './pagespeed.service';
import { PagespeedController } from './pagespeed.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [PagespeedController],
  providers: [PageSpeedService],
})
export class PagespeedModule {}
