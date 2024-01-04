import { Controller, Get, Post, Body } from '@nestjs/common';
import { Database } from './database.service';
import { Audit } from './audit.entity';
import { PageSpeedService } from './pagespeed.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('audit')
@Controller('audit')
export class AuditController {
  constructor(
    private readonly databaseService: Database, // Inject the Database service
    private readonly pageSpeedService: PageSpeedService, // Inject the PageSpeed service
  ) {}

  @ApiProperty()
  @Get()
  async findAll(): Promise<Audit[]> {
    return this.databaseService.findAll();
  }

  @ApiProperty()
  @Post()
  async create(@Body() audit: Audit): Promise<Audit> {
    const pageSpeedData = await this.pageSpeedService.getPageSpeedData(
      audit.url,
    ); // Get the data from the API
    audit.firstContentfulPaint =
      pageSpeedData.lighthouseResult.audits[
        'first-contentful-paint'
      ].numericValue;
    audit.speedIndex =
      pageSpeedData.lighthouseResult.audits['speed-index'].numericValue;
    audit.largestContentfulPaint =
      pageSpeedData.lighthouseResult.audits[
        'largest-contentful-paint'
      ].numericValue;
    audit.totalBlockingTime =
      pageSpeedData.lighthouseResult.audits['total-blocking-time'].numericValue;
    audit.unusedCssRules =
      pageSpeedData.lighthouseResult.audits['unused-css-rules'].numericValue;
    audit.userdOptimizedImages =
      pageSpeedData.lighthouseResult.audits[
        'uses-optimized-images'
      ].numericValue;
    audit.usesRelPreload =
      pageSpeedData.lighthouseResult.audits['uses-rel-preload'].numericValue;
    audit.seoMobile = pageSpeedData.lighthouseResult.categories.seo.score;
    return this.databaseService.create(audit); // Save the data
  }
}
