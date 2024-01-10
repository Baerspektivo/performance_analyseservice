import { Controller, Get, Post, Body } from '@nestjs/common';
import { Database } from '../database.service';
import { Audit } from './entities/audit.entity';
import { PageSpeedService } from '../pagespeed/pagespeed.service';
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
  //#region create audits
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

    audit.fistmeaningfulPaint =
      pageSpeedData.lighthouseResult.audits[
        'first-meaningful-paint'
      ].numericValue;

    audit.bootupTime =
      pageSpeedData.lighthouseResult.audits['bootup-time'].numericValue;

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

    audit.duplicatedJavascript =
      pageSpeedData.lighthouseResult.audits[
        'duplicated-javascript'
      ].numericValue;

    audit.serverResponseTime =
      pageSpeedData.lighthouseResult.audits[
        'server-response-time'
      ].numericValue;

    audit.unusedCssRules =
      pageSpeedData.lighthouseResult.audits['unused-css-rules'].numericValue;

    audit.performanceBudget =
      pageSpeedData.lighthouseResult.audits['performance-budget'].numericValue;

    audit.unusedJavascript =
      pageSpeedData.lighthouseResult.audits['unused-javascript'].numericValue;

    audit.userdOptimizedImages =
      pageSpeedData.lighthouseResult.audits[
        'uses-optimized-images'
      ].numericValue;

    audit.longtasks =
      pageSpeedData.lighthouseResult.audits['long-tasks'].numericValue;

    audit.serverResponseTime =
      pageSpeedData.lighthouseResult.audits[
        'server-response-time'
      ].numericValue;

    audit.legacyJavascript =
      pageSpeedData.lighthouseResult.audits['legacy-javascript'].numericValue;

    audit.totalByetWeight =
      pageSpeedData.lighthouseResult.audits['total-byte-weight'].numericValue;

    audit.domSize =
      pageSpeedData.lighthouseResult.audits['dom-size'].numericValue;

    audit.unminifiedCss =
      pageSpeedData.lighthouseResult.audits['unminified-css'].numericValue;

    audit.unminifiedJavascript =
      pageSpeedData.lighthouseResult.audits[
        'unminified-javascript'
      ].numericValue;

    audit.usesRelPreload =
      pageSpeedData.lighthouseResult.audits['uses-rel-preload'].numericValue;

    audit.largestContentPaintfulPaintElement =
      pageSpeedData.lighthouseResult.audits[
        'largest-contentful-paint-element'
      ].numericValue;

    audit.seoMobile =
      pageSpeedData.lighthouseResult.categoryGroups['seo-mobile'].numericValue;

    audit.seoCrawl =
      pageSpeedData.lighthouseResult.categoryGroups['seo-crawl'].numericValue;

    audit.seoContent =
      pageSpeedData.lighthouseResult.categoryGroups['seo-content'].numericValue;

    audit.bestPracticesGeneral =
      pageSpeedData.lighthouseResult.categoryGroups[
        'best-practices-general'
      ].numericValue;

    return this.databaseService.create(audit); // Save the data
  }
}
//#endregion
