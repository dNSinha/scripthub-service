import { Test, TestingModule } from '@nestjs/testing';
import { SqlScriptsController } from './sql-scripts.controller';

describe('SqlScriptsController', () => {
  let controller: SqlScriptsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SqlScriptsController],
    }).compile();

    controller = module.get<SqlScriptsController>(SqlScriptsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
