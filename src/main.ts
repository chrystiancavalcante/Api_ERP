import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './tratamento-erro/https-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
  const config = new DocumentBuilder()
  .setTitle('Api ERP-PRO')
  .setDescription('The ERP API description')
  .setVersion('1.0')
  .addTag('ERP')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  console.info('Servidor Node pronto em http://localhost:3000');
}
bootstrap();