import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagespeedService } from './pagespeed.service';
import { CreatePagespeedDto } from './dto/create-pagespeed.dto';
import { UpdatePagespeedDto } from './dto/update-pagespeed.dto';

@Controller('pagespeed')
export class PagespeedController {
  constructor(private readonly pagespeedService: PagespeedService) {}

  @Post()
  create(@Body() createPagespeedDto: CreatePagespeedDto) {
    return this.pagespeedService.create(createPagespeedDto);
  }

  @Get()
  findAll() {
    return this.pagespeedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagespeedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePagespeedDto: UpdatePagespeedDto) {
    return this.pagespeedService.update(+id, updatePagespeedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagespeedService.remove(+id);
  }
}
