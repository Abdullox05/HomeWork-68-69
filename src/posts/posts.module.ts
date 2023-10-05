import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { User } from '../users/models/user.model';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [SequelizeModule.forFeature([Post, User]),
    FilesModule
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService]
})
export class PostsModule {}
