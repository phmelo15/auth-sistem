import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { favorites } from 'src/typeorm/entities/favorites';
import { User } from 'src/users/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(favorites)
    private favoriteRepository: Repository<favorites>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createFavorite(id: string, userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new HttpException('Cannot find', HttpStatus.BAD_GATEWAY);
    }

    const newFavorite = await this.favoriteRepository.create({
      coffeId: id,
      user: user,
    });
    return this.favoriteRepository.save(newFavorite);
  }

  async deleteFavorite(id: string, userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new HttpException('Cannot find', HttpStatus.BAD_GATEWAY);
    }

    const favorite = await this.favoriteRepository.findOne({
      where: { coffeId: id, user: user },
    });

    if (!favorite) {
      throw new HttpException('Favorite not found', HttpStatus.NOT_FOUND);
    }

    await this.favoriteRepository.delete(favorite.id);
    return { message: 'Favorite deleted successfully' };
  }

  async getFavorites(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['Favorites'],
    });
    if (!user) {
      throw new HttpException('Cannot find', HttpStatus.BAD_GATEWAY);
    }

    return user.Favorites;
  }
}
