import { UserRole } from '@/db/schema';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id!: number;

  @IsBoolean()
  isActive!: boolean;

  @IsEmail()
  email!: string;

  @IsString()
  name!: string;

  @IsString()
  password!: string;

  @IsEnum(UserRole)
  role!: UserRole;

  @IsString()
  username!: string;
}
