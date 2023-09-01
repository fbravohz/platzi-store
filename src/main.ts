import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //Esto elimina del payload cualquier atributo que no exista en el dto y los ignora
      whitelist: true,
      //Aqui si genera un error y lo alerta
      forbidNonWhitelisted: true,
      //Deshabilita informes de errores en productivo
      disableErrorMessages: process.env.ENVIRONMENT == 'production',
    }),
  );
  await app.listen(3001);
}
bootstrap();
