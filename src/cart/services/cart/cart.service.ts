import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cart } from 'src/typeorm/entities/cart';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(cart)
    private cartRepository: Repository<cart>,
  ) {}

  async addItemCart(id: string) {
    const newFavorite = await this.cartRepository.create({
      coffeId: id,
    });
    return this.cartRepository.save(newFavorite);
  }

  async deleteItemCart(id: string) {
    const favorite = await this.cartRepository.findOne({
      where: { coffeId: id },
    });

    const deletedFavorite = await this.cartRepository.delete(favorite.id);
    return deletedFavorite;
  }

  async getCart() {
    const cart = await this.cartRepository.find();
    return cart;
  }
}
