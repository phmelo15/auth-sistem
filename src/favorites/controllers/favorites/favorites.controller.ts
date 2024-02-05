import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateFavoriteDto } from 'src/dtos/CreateFavoriteDto';
import { FavoritesService } from 'src/favorites/services/favorites/favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private FavoritesService: FavoritesService) {}

  @Post()
  async createFavorite(
    @Param('id', ParseIntPipe) id: number,
    @Body() createFavorite: CreateFavoriteDto,
  ) {
    const response = await this.FavoritesService.createFavorite(
      id,
      createFavorite,
    );
    return response;
  }

  @Get()
  async getFavorites(@Param('id', ParseIntPipe) id: number) {
    const response = await this.FavoritesService.getFavorites(id);
    return response;
  }
}
