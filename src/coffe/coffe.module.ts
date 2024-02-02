import { Module } from '@nestjs/common';

import { CoffeTypesService } from './services/coffe-types/coffe-types.service';
import { CoffeTypesController } from './controllers/coffe-types/coffe-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { coffeTypes } from 'src/typeorm/entities/coffeTypes';

@Module({
  controllers: [CoffeTypesController],
  providers: [CoffeTypesService],
  exports: [CoffeTypesService],
  imports: [TypeOrmModule.forFeature([coffeTypes])],
})
export class CoffeModule {}
