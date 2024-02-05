import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateFavoriteDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  price: string;

  @IsString()
  ingredients: string;

  @IsNumber()
  preparationTime: number;

  @IsString()
  image: string;

  @IsString()
  type: string;

  @IsBoolean()
  available: boolean;
}
