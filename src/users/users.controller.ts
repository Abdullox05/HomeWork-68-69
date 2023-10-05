import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../decorators/role-auth.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/role.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UserSelfGuard } from '../guards/user-self.guard';

import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ActivateUserDto } from './dto/activate-user.dto';

@ApiTags("Users")
@Roles("USER")
@Controller("users") 
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "Create User" })
  @ApiResponse({status: 201, description: "Create User", type: [User]})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: "Add User role" })
  @ApiResponse({status: 201, description: "Add role", type: [User]})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post("add-role")
  addRole(@Body() addRoleDto: AddRoleDto){
    return this.usersService.addRole(addRoleDto);
  }

  @ApiOperation({ summary: "Remove User role" })
  @ApiResponse({status: 201, description: "Remove role", type: [User]})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post("remove-role")
  removeRole(@Body() addRoleDto: AddRoleDto){
    return this.usersService.removeRole(addRoleDto);
  }

  @ApiOperation({ summary: "Get Users" })
  @ApiResponse({status: 201, description: "Get Users", type: [User]})
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: "Get one User" })
  @ApiResponse({status: 201, description: "Get one User", type: [User]})
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.usersService.findOneID(id);
  }

  @ApiOperation({ summary: "Update User" })
  @ApiResponse({status: 201, description: "Update User", type: [User]})
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: "Remove User" })
  @ApiResponse({status: 201, description: "Remove User",})
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @ApiOperation({ summary: "Activate User" })
  @ApiResponse({status: 201, description: "Activate User", type: [User]})
  @HttpCode(200)
  @Post("activate")
  activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.usersService.activateUser(activateUserDto);
  }
}
