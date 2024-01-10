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
      pageSpeedData.lighthouseResult.audits['first-contentful-paint'] || 'N/A';

    audit.fistmeaningfulPaint =
      pageSpeedData.lighthouseResult.audits['first-meaningful-paint'] || 'N/A';

    audit.usesOptimizedImages =
      pageSpeedData.lighthouseResult.audits['uses-optimized-images'] || 'N/A';

    audit.usesResponsiveImages =
      pageSpeedData.lighthouseResult.audits['uses-responsive-images'] || 'N/A';

    audit.thirdPartySummary =
      pageSpeedData.lighthouseResult.audits['third-party-summary'] || 'N/A';

    audit.modernImageFormats =
      pageSpeedData.lighthouseResult.audits['modern-image-formats'] || 'N/A';

    audit.bootupTime =
      pageSpeedData.lighthouseResult.audits['bootup-time'] || 'N/A';

    audit.speedIndex =
      pageSpeedData.lighthouseResult.audits['speed-index'] || 'N/A';

    audit.largestContentfulPaint =
      pageSpeedData.lighthouseResult.audits['largest-contentful-paint'] ||
      'N/A';

    audit.totalBlockingTime =
      pageSpeedData.lighthouseResult.audits['total-blocking-time'] || 'N/A';

    audit.unusedCssRules =
      pageSpeedData.lighthouseResult.audits['unused-css-rules'] || 'N/A';

    audit.duplicatedJavascript =
      pageSpeedData.lighthouseResult.audits['duplicated-javascript'] || 'N/A';

    audit.serverResponseTime =
      pageSpeedData.lighthouseResult.audits['server-response-time'] || 'N/A';

    audit.unusedCssRules =
      pageSpeedData.lighthouseResult.audits['unused-css-rules'] || 'N/A';

    audit.performanceBudget =
      pageSpeedData.lighthouseResult.audits['performance-budget'] || 'N/A';

    audit.unusedJavascript =
      pageSpeedData.lighthouseResult.audits['unused-javascript'] || 'N/A';

    audit.userdOptimizedImages =
      pageSpeedData.lighthouseResult.audits['uses-optimized-images'] || 'N/A';

    audit.longtasks =
      pageSpeedData.lighthouseResult.audits['long-tasks'] || 'N/A';

    audit.serverResponseTime =
      pageSpeedData.lighthouseResult.audits['server-response-time'] || 'N/A';

    audit.legacyJavascript =
      pageSpeedData.lighthouseResult.audits['legacy-javascript'] || 'N/A';

    audit.totalByetWeight =
      pageSpeedData.lighthouseResult.audits['total-byte-weight'] || 'N/A';

    audit.domSize = pageSpeedData.lighthouseResult.audits['dom-size'] || 'N/A';

    audit.unminifiedCss =
      pageSpeedData.lighthouseResult.audits['unminified-css'] || 'N/A';

    audit.unminifiedJavascript =
      pageSpeedData.lighthouseResult.audits['unminified-javascript'] || 'N/A';

    audit.usesRelPreload =
      pageSpeedData.lighthouseResult.audits['uses-rel-preload'] || 'N/A';

    audit.largestContentPaintfulPaintElement =
      pageSpeedData.lighthouseResult.audits[
        'largest-contentful-paint-element'
      ] || 'N/A';

    audit.seoMobile =
      pageSpeedData.lighthouseResult.categoryGroups['seo-mobile'] || 'N/A';

    audit.seoCrawl =
      pageSpeedData.lighthouseResult.categoryGroups['seo-crawl'] || 'N/A';

    audit.seoContent =
      pageSpeedData.lighthouseResult.categoryGroups['seo-content'] || 'N/A';

    audit.bestPracticesGeneral =
      pageSpeedData.lighthouseResult.categoryGroups['best-practices-general'] ||
      'N/A';

    return this.databaseService.create(audit); // Save the data
  }
}
//#endregion
