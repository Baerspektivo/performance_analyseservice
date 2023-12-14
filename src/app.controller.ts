import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return '';
  }

  @Post()
  create(@Body() body): string {
    return ' : ${body.name}';
  }
}
