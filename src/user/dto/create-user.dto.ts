import { UserRole } from '@/db/schema';
import { IsBoolean, IsEmail, IsEnum, IsString } from 'class-validator';

export class CreateUserDto {
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
}
