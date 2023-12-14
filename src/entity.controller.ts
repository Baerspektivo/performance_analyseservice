import { Controller, Get } from '@nestjs/common';
import { database } from './database.service';

@Controller('entity')
export class EntityController {
  constructor(private readonly database: database) {}

  @Get()
  async findAll(): Promise<EntityController[]> {
    return this.database.findAll();
  }
}
