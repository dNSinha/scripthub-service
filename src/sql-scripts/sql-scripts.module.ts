import { Module } from '@nestjs/common';
import { SqlScriptsController } from './sql-scripts.controller';

@Module({
  controllers: [SqlScriptsController]
})
export class SqlScriptsModule {}
