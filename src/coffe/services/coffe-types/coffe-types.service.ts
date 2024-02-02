import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCafeDto } from 'src/dtos/CreateCafeDto';
import { coffeTypes } from 'src/typeorm/entities/coffeTypes';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeTypesService {
  constructor(
    @InjectRepository(coffeTypes)
    private CoffeTypeRepository: Repository<coffeTypes>,
  ) {}

  async getAllCafes() {
    const cafes = this.CoffeTypeRepository.find();
    return cafes;
  }

  async createCafe(coffeDetails: CreateCafeDto) {
    const createdCafe = await this.CoffeTypeRepository.create(coffeDetails);
    await this.CoffeTypeRepository.save(createdCafe);
    return createdCafe;
  }
}
