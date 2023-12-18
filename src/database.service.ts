import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Audit } from './audit.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class Database {
  constructor(
    @InjectRepository(Audit)
    private auditRepository: Repository<Audit>,
  ) {}

  async findAll(): Promise<Audit[]> {
    return this.auditRepository.find();
  }
  async create(audit: Audit): Promise<Audit> {
    return this.auditRepository.save(audit);
  }
}
