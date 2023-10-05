import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsStrongPassword } from 'class-validator';

export class UpdateUserDto{
  @ApiProperty({ example: "user-1", description: "User-Name"})
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: "user-1@gmail.com", description: "User-E-Mail"})
  @IsEmail()
  email: string;

  @ApiProperty({ example: "QWERTY123!@#", description: "User-Password"})
  @IsStrongPassword({minLength: 6})
  password: string;
}
