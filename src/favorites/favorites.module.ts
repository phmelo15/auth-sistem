import { Module } from '@nestjs/common';
import { FavoritesController } from './controllers/favorites/favorites.controller';
import { FavoritesService } from './services/favorites/favorites.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { favorites } from 'src/typeorm/entities/favorites';
import { User } from 'src/users/entities/User';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  imports: [TypeOrmModule.forFeature([favorites, User])],
  exports: [FavoritesService],
})
export class FavoritesModule {}
