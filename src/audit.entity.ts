import { Entity, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstContentfulPaint: string;

  @Column()
  speedIndex: string;

  @Column()
  largestContentfulPaint: string;

  @Column()
  totalBlockingTime: string;

  @Column()
  unusedCssRules: string;

  @Column()
  userdOptimizedImages: string;

  @Column()
  usesRelPreload: string;

  @Column()
  seoMobile: string;
}
