import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { isDev, environment } from './app.environment';

const { log,warn,info } = console
const color = c => isDev ? c : ''
Object.assign(global.console,{
  log: (...args) => log('[log]', '[algplayer]', ...args),
  warn: (...args) => warn(color('\x1b[33m%s\x1b[0m'), '[warn]', '[algplayer]', ...args),
  info: (...args) => info(color('\x1b[34m%s\x1b[0m'), '[info]', '[algplayer]', ...args),
  error: (...args) => info(color('\x1b[31m%s\x1b[0m'), '[error]', '[algplayer]', ...args),
})


const PORT = process.env.ADMIN_PORT || 3001



async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    // logger: true
  });
  // 开启跨域
  app.enableCors()

  // // 设置拦截器
  // app.useGlobalInterceptors(

  // )



  const options = new DocumentBuilder()
    .addBearerAuth()  //启用bearer token功能，就能在页面中输入token
    .setTitle('CubeNode管理员端口后台API')
    .setDescription('几乎所有的接口都需要登录')
    .setVersion('1.0')
    .addTag('目录')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/cubenode/v1/api-docs', app, document);

  await app.listen(PORT);
}
bootstrap().then(()=>{
  console.info(`run at http://localhost:${PORT}, env: ${environment}`)
  console.info(`swagger 文档地址: http://localhost:${PORT}/api/cubenode/v1/api-docs`)
});
