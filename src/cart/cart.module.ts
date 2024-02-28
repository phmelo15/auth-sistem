import { Module } from '@nestjs/common';
import { CartController } from './controllers/cart/cart.controller';
import { CartService } from './services/cart/cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cart } from 'src/typeorm/entities/cart';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [TypeOrmModule.forFeature([cart])],
})
export class CartModule {}
