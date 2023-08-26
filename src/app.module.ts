import { Module } from '@nestjs/common';
import { SqlScriptModule } from './sql-script/sql-script.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process?.env?.DB_URI),
    SqlScriptModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
