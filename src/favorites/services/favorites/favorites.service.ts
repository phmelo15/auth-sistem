import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { favorites } from 'src/typeorm/entities/favorites';
import { User } from 'src/users/entities/User';
import {
  FavoriteDetailsParams,
  FavoriteDetailsUpdateParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(favorites)
    private favoriteRepository: Repository<favorites>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createFavorite(id: string) {
    // const user = await this.userRepository.findOneBy({ id });
    // if (!user) {
    //   throw new HttpException(
    //     'User not found, cannot create favorite',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    const newFavorite = await this.favoriteRepository.create({
      coffeId: id,
    });
    return this.favoriteRepository.save(newFavorite);
  }

  async deleteFavorite(id: string) {
    const favorite = await this.favoriteRepository.findOne({
      where: { coffeId: id },
    });

    const deletedFavorite = await this.favoriteRepository.delete(favorite.id);
    return deletedFavorite;
  }

  // async updateFavorite(
  //   id: number,
  //   favoriteId: number,
  //   favoriteDetails: FavoriteDetailsUpdateParams,
  // ) {
  //   const user = await this.userRepository.findOne({
  //     where: { id },
  //     relations: ['favorites'],
  //   });
  //   if (!user) {
  //     throw new HttpException(
  //       'User not found, cannot create favorite',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  //   let favorite = user.favorites.find((fav) => fav.id === favoriteId);

  //   if (!favorite) {
  //     throw new HttpException('Favorite not found', HttpStatus.NOT_FOUND);
  //   }

  //   Object.assign(favorite, favoriteDetails);

  //   await this.favoriteRepository.save(favorite);

  //   return favorite;
  // }

  async getFavorites() {
    const favorites = await this.favoriteRepository.find();
    // if (!user) {
    //   throw new HttpException(
    //     'User not found, cannot get favorite',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }

    return favorites;
  }
}
