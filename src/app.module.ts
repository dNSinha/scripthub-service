import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
