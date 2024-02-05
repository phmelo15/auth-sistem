import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { favorites } from 'src/typeorm/entities/favorites';
import { User } from 'src/users/entities/User';
import { FavoriteDetailsParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(favorites)
    private favoriteRepository: Repository<favorites>,
    private userRepository: Repository<User>,
  ) {}

  async createFavorite(id: number, favoriteDetails: FavoriteDetailsParams) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException(
        'User not found, cannot create favorite',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newFavorite = await this.favoriteRepository.create(favoriteDetails);
    const savedFavorite = await this.favoriteRepository.save(newFavorite);
    user.favorites = savedFavorite;
    return this.userRepository.save(user);
  }

  async getFavorites(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException(
        'User not found, cannot get favorite',
        HttpStatus.BAD_REQUEST,
      );
    }

    return user.favorites;
  }
}
