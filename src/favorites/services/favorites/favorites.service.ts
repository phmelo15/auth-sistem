import { Injectable } from '@nestjs/common';
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

  async createFavorite(id: string) {
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

  async getFavorites() {
    const favorites = await this.favoriteRepository.find();
    return favorites;
  }
}
