import { PartialType } from '@nestjs/swagger';
import { CreatePagespeedDto } from './create-pagespeed.dto';

export class UpdatePagespeedDto extends PartialType(CreatePagespeedDto) {}
