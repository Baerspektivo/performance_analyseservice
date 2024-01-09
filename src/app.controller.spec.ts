import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { Database } from './database.service';
import { Audit } from './audit/entities/audit.entity';

describe('AppController', () => {
  let appController: AppController;
  let databaseService: Database;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [Database],
    }).compile();

    appController = app.get<AppController>(AppController);
    databaseService = app.get<Database>(Database);
  });

  describe('findAll', () => {
    it('should return an array of audits', async () => {
      const result: Audit[] = [];
      jest
        .spyOn(databaseService, 'findAll')
        .mockImplementation(() => Promise.resolve(result));

      expect(await appController.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should create an audit', async () => {
      const audit = new Audit();
      audit.url = 'http://kuehles-blondes.net';
      jest
        .spyOn(databaseService, 'create')
        .mockImplementation(() => Promise.resolve(audit));

      expect(
        await appController.create({ url: 'http://kuehles-blondes.net' }),
      ).toBe(audit);
    });
  });
});
