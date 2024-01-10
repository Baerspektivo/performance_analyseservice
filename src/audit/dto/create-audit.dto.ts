import { IsString, IsEmail, IsNotEmpty, IsDate, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';
import { Expose } from 'class-transformer';

export class CreateAuditDto {
  @IsString()
  @IsNotEmpty({ message: 'costumerId cannot be empty' })
  costumerId: string;

  @IsString()
  @ApiProperty({ example: faker.internet.email() })
  @IsEmail()
  @IsNotEmpty({ message: 'email cannot be empty' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'url cannot be empty' })
  @IsUrl({ require_protocol: true }, { message: 'url must be a valid url' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Costumer name cannot be empty' })
  costumerName: string;

  @IsDate()
  @Expose()
  @IsNotEmpty({ message: 'Date cannot be empty' })
  createdAt: Date;

  @IsDate()
  @Expose()
  @IsNotEmpty({ message: 'Date cannot be empty' })
  updatedAt: Date;
}
