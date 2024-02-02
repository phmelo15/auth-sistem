import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoffeTypesService } from 'src/coffe/services/coffe-types/coffe-types.service';
import { CreateCafeDto } from 'src/dtos/CreateCafeDto';

@Controller('coffe')
export class CoffeTypesController {
  constructor(private CoffeTypesService: CoffeTypesService) {}

  @Get()
  async getCafes() {
    const response = await this.CoffeTypesService.getAllCafes();
    return response;
  }

  @Post()
  async createCafe(@Body() createCafeDto: CreateCafeDto) {
    const response = this.CoffeTypesService.createCafe(createCafeDto);
    return response;
  }
}
