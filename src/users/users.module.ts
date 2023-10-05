import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesModule } from '../roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { User } from './models/user.model';
import { Role } from '../roles/models/role.model';
import { UserRoles } from '../roles/models/users-roles.model';
import { Post } from '../posts/models/post.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    RolesModule, 
    forwardRef(() => AuthModule)
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
