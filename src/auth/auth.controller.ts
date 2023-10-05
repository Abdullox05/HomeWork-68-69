import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body} from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login-auth.dto';

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "register" })
  @ApiResponse({status: 201, description: "Token..."})
  @Post("register")
  register(@Body() createUserDto: CreateUserDto){
    return this.authService.register(createUserDto);
  }

  @ApiOperation({ summary: "log-in" })
  @ApiResponse({status: 201, description: "Token..."})
  @Post("log-in")
  login(@Body() loginDro: LoginDto){
    return this.authService.login(loginDro);
  }  
}
