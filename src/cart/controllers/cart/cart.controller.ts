import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartService } from 'src/cart/services/cart/cart.service';

@Controller('cart')
export class CartController {
  constructor(private CartService: CartService) {}

  @Post(':id')
  async createFavorite(@Param('id') id: string) {
    const response = await this.CartService.addItemCart(id);
    return response;
  }

  @Delete(':id')
  async deleteFavorites(@Param('id') id: string) {
    const response = await this.CartService.deleteItemCart(id);
    return response;
  }

  @Get()
  async getFavorites() {
    const response = await this.CartService.getCart();
    return response;
  }
}
