import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Audit } from './audit/entities/audit.entity';
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
  async findOne(customerID: number): Promise<Audit> {
    return this.auditRepository.findOne({ where: { customerID } });
  }
  async create(audit: Audit): Promise<Audit> {
    return this.auditRepository.save(audit);
  }
  async update(audit: Audit): Promise<Audit> {
    return this.auditRepository.save(audit);
  }
  async delete(audit: Audit): Promise<void> {
    await this.auditRepository.delete(audit);
  }
}
