import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  try {
    const config = new DocumentBuilder()
      .setTitle("Stadium finder")
      .setDescription("Mini project for Stadium finder")
      .setVersion("1.0.0")
      .addTag("NodeJS, NestJS, Postgres, Sequelize, JWT, Swagger")
      .build();

    const app = await NestFactory.create(AppModule);
    
    const document = SwaggerModule.createDocument(app, config);
    
    SwaggerModule.setup("api/docs", app, document);
    
    app.setGlobalPrefix("api");
    app.useGlobalPipes(new ValidationPipe());

    const PORT = process.env.PORT || 3000;

    await app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
