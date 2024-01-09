import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, isEmail } from 'class-validator';
import * as faker from 'faker';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Audit {
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
  @ApiProperty({ example: faker.internet.email() })
  @IsNotEmpty()
  @isEmail()
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

  @Expose
  @Column()
  @ApiProperty()
  createdAt: Date;

  @Expose()
  @Column()
  @ApiProperty()
  updatedAt: Date;
}
