import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // To enable global validation and error handling
  app.useGlobalPipes(new ValidationPipe());

  // To show custom error messages
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     exceptionFactory: (validationErrors: ValidationError[] = []) => {
  //       return new BadRequestException(
  //         validationErrors.map((error) => ({
  //           field: error.property,
  //           error: Object.values(error.constraints).join(', '),
  //         })),
  //       );
  //     },
  //   }),
  // );

  // Add mechanism to add swagger based on env variable
  // Swagger UI
  const config = new DocumentBuilder()
    .setTitle('Script Hub Service')
    .setDescription('Automation tool to securely store various scripts')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  process?.env?.SWAGGER && SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
