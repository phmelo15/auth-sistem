import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { FavoritesService } from 'src/favorites/services/favorites/favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private FavoritesService: FavoritesService) {}

  @UseGuards(AuthGuard)
  @Post(':id/:userId')
  async createFavorite(
    @Param('id') id: string,
    @Param('userId') userId: number,
  ) {
    const response = await this.FavoritesService.createFavorite(id, userId);
    return response;
  }

  @UseGuards(AuthGuard)
  @Delete(':id/:userId')
  async deleteFavorites(
    @Param('id') id: string,
    @Param('userId') userId: number,
  ) {
    const response = await this.FavoritesService.deleteFavorite(id, userId);
    return response;
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getFavorites(@Param('id') id: number) {
    const response = await this.FavoritesService.getFavorites(id);
    return response;
  }
}
