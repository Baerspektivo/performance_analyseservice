import { Controller, Get, Post, Body } from '@nestjs/common';
import { Database } from './database.service';
import { Audit } from './audit.entity';

@Controller('audit')
export class AuditController {
  constructor(private readonly databaseService: Database) {}

  @Get()
  async findAll(): Promise<Audit[]> {
    return this.databaseService.findAll();
  }

  @Post()
  async create(@Body() audit: Audit): Promise<Audit> {
    this.databaseService.create(audit);
  }
}
