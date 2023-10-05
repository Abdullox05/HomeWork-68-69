import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUppercase } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({example: "ADMIN", description: "ROLE-Add"})
  @IsNotEmpty()
  @IsString()
  @IsUppercase()
  value: string;

  @ApiProperty({example: "Description...", description: "Role-Description"})
  @IsNotEmpty()
  @IsString()
  description: string;
}
