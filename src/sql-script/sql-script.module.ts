import { Module } from '@nestjs/common';
import { SqlScriptController } from './sql-script.controller';
import { SqlScriptService } from './sql-script.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SqlScript, SqlScriptSchema } from 'src/schemas/sqlScript.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: SqlScript.name, schema: SqlScriptSchema }])],
  controllers: [SqlScriptController],
  providers: [SqlScriptService]
})
export class SqlScriptModule {}
