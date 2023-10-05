import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class LoginDto {
  @ApiProperty({example: "example@gmail.com", description: "E-Mail"})
  @IsEmail()
  readonly email: string;

  @ApiProperty({example: "QWERTY123!@#", description: "Password"})
  @IsStrongPassword()
  readonly password: string;
}
