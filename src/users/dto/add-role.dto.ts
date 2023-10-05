import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({example: 1, description: "User-ID"})
  readonly userId: number;

  @ApiProperty({example: "ADMIN", description: "Role"})
  readonly value: string;
}
