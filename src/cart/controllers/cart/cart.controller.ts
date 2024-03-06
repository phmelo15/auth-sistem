import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CartService } from 'src/cart/services/cart/cart.service';

@Controller('cart')
export class CartController {
  constructor(private CartService: CartService) {}

  @UseGuards(AuthGuard)
  @Post(':id/:userId')
  async createFavorite(
    @Param('id') id: string,
    @Param('userId') userId: number,
  ) {
    const response = await this.CartService.addItemCart(id, userId);
    return response;
  }

  @UseGuards(AuthGuard)
  @Delete(':id/:userId')
  async deleteFavorites(
    @Param('id') id: string,
    @Param('userId') userId: number,
  ) {
    const response = await this.CartService.deleteItemCart(id, userId);
    return response;
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getFavorites(@Param('id') id: number) {
    const response = await this.CartService.getCart(id);
    return response;
  }
}
