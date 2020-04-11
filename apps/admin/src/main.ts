import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()


  const options = new DocumentBuilder()
    .setTitle('CubeNode服务端API')
    .setDescription('CubeNodeLTD API description')
    .setVersion('1.0')
    .addTag('目录')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/cubenode/v1/api-docs', app, document);
  console.log(`http://localhost:3000/api/cubenode/v1/api-docs`)
  await app.listen(3000);
}
bootstrap();
