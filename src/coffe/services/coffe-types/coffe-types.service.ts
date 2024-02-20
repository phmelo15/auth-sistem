import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCafeDto } from 'src/dtos/CreateCafeDto';
import { coffeTypes } from 'src/typeorm/entities/coffeTypes';
import { CoffeDetailsParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeTypesService {
  constructor(
    @InjectRepository(coffeTypes)
    private CoffeTypeRepository: Repository<coffeTypes>,
  ) {}

  async getAllCafes(favoriteIds?: number[]) {
    //  let cafes: coffeTypes[];

    let coffes: coffeTypes[] = await this.CoffeTypeRepository.find();

    if (favoriteIds && favoriteIds.length > 0) {
      // cafes = await this.CoffeTypeRepository.find({ where: {id: {in: favoriteIds}}})
      coffes = coffes.filter((cafe) => favoriteIds.includes(cafe.id));
      return coffes;
    } else {
      return coffes;
    }
  }

  async createCafe(coffeDetails: CoffeDetailsParams) {
    const createdCafe = await this.CoffeTypeRepository.create(coffeDetails);
    await this.CoffeTypeRepository.save(createdCafe);
    return createdCafe;
  }
}
