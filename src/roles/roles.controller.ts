import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

import { Role } from './models/role.model';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@ApiTags("Roles")
@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({ summary: "Create Role" })
  @ApiResponse({status: 201, description: "Create Role", type: [Role]})
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @ApiOperation({ summary: "Get Roles" })
  @ApiResponse({status: 201, description: "Get Roles", type: [Role]})
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @ApiOperation({ summary: "Get one Role" })
  @ApiResponse({status: 201, description: "Get one Role", type: [Role]})
  @Get(":value")
  findOne(@Param("value") value: string) {
    return this.rolesService.findOne(value);
  }

  @ApiOperation({ summary: "Update Role" })
  @ApiResponse({status: 201, description: "Update Role", type: [Role]})
  @Put(":id")
  update(@Param("id") id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @ApiOperation({ summary: "Remove Role" })
  @ApiResponse({status: 201, description: "Remove Role"})
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.rolesService.remove(+id);
  }
}
