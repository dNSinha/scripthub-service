import { Test, TestingModule } from '@nestjs/testing';
import { SqlScriptController } from './sql-script.controller';

describe('SqlScriptsController', () => {
  let controller: SqlScriptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SqlScriptController],
    }).compile();

    controller = module.get<SqlScriptController>(SqlScriptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
