import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Expose } from 'class-transformer';
import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Audit {
  @Column()
  @ApiProperty()
  performanceScore: string;

  @Column()
  @ApiProperty()
  bootupTime: string;

  @Column()
  @ApiProperty()
  duplicatedJavascript: string;

  @Column()
  @ApiProperty()
  unusedCssRules: string;

  @Column()
  @ApiProperty()
  performanceBudget: string;

  @Column()
  @ApiProperty()
  unusedJavascript: string;

  @Column()
  @ApiProperty()
  firstContentfulPaint: string;

  @Column()
  @ApiProperty()
  speedIndex: string;

  @Column()
  @ApiProperty()
  largestContentfulPaint: string;

  @Column()
  @ApiProperty()
  totalBlockingTime: string;

  @Column()
  @ApiProperty()
  fistmeaningfulPaint: string;

  @Column()
  @ApiProperty()
  userdOptimizedImages: string;

  @Column()
  @ApiProperty()
  longtasks: string;

  @Column()
  @ApiProperty()
  serverResponseTime: string;

  @Column()
  @ApiProperty()
  legacyJavascript: string;

  @Column()
  @ApiProperty()
  totalByetWeight: string;

  @Column()
  @ApiProperty()
  domSize: string;

  @Column()
  @ApiProperty()
  usesRelPreload: string;

  @Column()
  @ApiProperty()
  largestContentPaintfulPaintElement: string;

  @Column()
  @ApiProperty()
  seoMobile: string;

  @Column()
  @ApiProperty()
  seoCrawl: string;

  @Column()
  @ApiProperty()
  seoContent: string;

  @Column()
  @ApiProperty()
  bestPracticesGeneral: string;

  @Column()
  @ApiProperty()
  unminifiedCss: string;

  @Column()
  @ApiProperty()
  unminifiedJavascript: string;

  @Column()
  @ApiProperty({ example: faker.internet.email() })
  @IsNotEmpty()
  @IsEmail()
  isEmail: string;

  @Column()
  @ApiProperty()
  costumerName: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty()
  url: string;

  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  customerID: number;

  @Expose()
  @Column()
  @ApiProperty()
  createdAt: Date;

  @Expose()
  @Column()
  @ApiProperty()
  updatedAt: Date;
}
