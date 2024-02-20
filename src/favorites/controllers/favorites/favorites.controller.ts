import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateFavoriteDto } from 'src/dtos/CreateFavoriteDto';
import { UpdateFavoriteDto } from 'src/dtos/UpdateFavoriteDto';
import { FavoritesService } from 'src/favorites/services/favorites/favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private FavoritesService: FavoritesService) {}

  @Post(':id')
  async createFavorite(@Param('id') id: string) {
    const response = await this.FavoritesService.createFavorite(id);
    return response;
  }

  @Delete(':id')
  async deleteFavorites(@Param('id') id: string) {
    const response = await this.FavoritesService.deleteFavorite(id);
    return response;
  }

  @Get()
  async getFavorites() {
    const response = await this.FavoritesService.getFavorites();
    return response;
  }
}
