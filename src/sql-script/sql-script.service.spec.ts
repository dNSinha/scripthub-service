import { Test, TestingModule } from '@nestjs/testing';
import { SqlScriptsService } from './sql-script.service';

describe('SqlScriptsService', () => {
  let service: SqlScriptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SqlScriptsService],
    }).compile();

    service = module.get<SqlScriptsService>(SqlScriptsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
