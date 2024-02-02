import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserProfileDto {
  @IsString()
  firstname: string;
  @IsString()
  lastname: string;
  @IsNumber()
  age: number;
  @IsString()
  dob: string;
  @IsEmail()
  email: string;
}
