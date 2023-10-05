import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/models/user.model';
import { UserRoles } from './users-roles.model';

interface IRole {
  value: string;
  description: string;
}

@Table({tableName: "roles"})
export class Role extends Model<Role, IRole> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({example: "ADMIN", description: "Role-Unique"})
  @Column({
      type: DataType.STRING,
      allowNull: true,
      unique: true 
  })
  value: string;
     
  @ApiProperty({example: "Description...", description: "Role-Description"})
  @Column({
      type: DataType.STRING,
      allowNull: true
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
