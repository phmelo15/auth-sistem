import { Test, TestingModule } from '@nestjs/testing';
import { CoffeTypesController } from './coffe-types.controller';

describe('CoffeTypesController', () => {
  let controller: CoffeTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeTypesController],
    }).compile();

    controller = module.get<CoffeTypesController>(CoffeTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
