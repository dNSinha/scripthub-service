import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqlScriptsModule } from './sql-scripts/sql-scripts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process?.env?.DB_URI),
    SqlScriptsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
