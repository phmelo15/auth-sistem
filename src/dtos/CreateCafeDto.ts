import { IsBoolean, IsString } from 'class-validator';

export class CreateCafeDto {
  @IsString()
  name: string;
  @IsBoolean()
  available: boolean;
}
