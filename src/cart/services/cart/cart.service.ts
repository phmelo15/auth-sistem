import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cart } from 'src/typeorm/entities/cart';
import { User } from 'src/users/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(cart)
    private cartRepository: Repository<cart>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async addItemCart(id: string, userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new HttpException('Cannot find', HttpStatus.BAD_GATEWAY);
    }

    const newCart = await this.cartRepository.create({
      coffeId: id,
      User: user,
    });
    return this.cartRepository.save(newCart);
  }

  async deleteItemCart(id: string, userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new HttpException('Cannot find', HttpStatus.BAD_GATEWAY);
    }

    const cart = await this.cartRepository.findOne({
      where: { coffeId: id, User: user },
    });

    if (!cart) {
      throw new HttpException('Cart not found', HttpStatus.NOT_FOUND);
    }

    await this.cartRepository.delete(cart.id);
    return { message: 'Cart deleted successfully' };
  }

  async getCart(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['Cart'],
    });
    if (!user) {
      throw new HttpException('Cannot find', HttpStatus.BAD_GATEWAY);
    }
    return user.Cart;
  }
}
