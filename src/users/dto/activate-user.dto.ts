import { ApiProperty } from '@nestjs/swagger';

export class  ActivateUserDto {
  @ApiProperty({example: 1, description: "User-ID"})
  userId: number;
}
