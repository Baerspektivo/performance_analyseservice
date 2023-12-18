import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Audit {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  customerID: number;

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
  unusedCssRules: string;

  @Column()
  @ApiProperty()
  userdOptimizedImages: string;

  @Column()
  @ApiProperty()
  usesRelPreload: string;

  @Column()
  @ApiProperty()
  seoMobile: string;

  @Column()
  @ApiProperty()
  url: string;
}
