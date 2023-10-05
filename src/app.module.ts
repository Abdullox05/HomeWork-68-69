import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/models/role.model';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/models/posts.model';
import { UserRoles } from './roles/models/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: String(process.env.PG_PASSWORD),
      database: process.env.PG_DB, 
      models: [User, Role, Post, UserRoles],
      autoLoadModels: true,
      logging: true,
    }),
    UsersModule,
    RolesModule,
    PostsModule,
    AuthModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
