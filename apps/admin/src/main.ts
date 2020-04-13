import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()


  const options = new DocumentBuilder()
    .addBearerAuth()  //启用bearer token功能，就能在页面中输入token
    .setTitle('CubeNode服务端后台API')
    .setDescription('CubeNodeLTD API description')
    .setVersion('1.0')
    .addTag('目录')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/cubenode/v1/api-docs', app, document);

  const PORT = process.env.ADMIN_PORT || 3001

  console.log(`http://localhost:${PORT}/api/cubenode/v1/api-docs`)
  await app.listen(PORT);
}
bootstrap();
