import { Test, TestingModule } from '@nestjs/testing';
import { CoffeTypesService } from './coffe-types.service';

describe('CoffeTypesService', () => {
  let service: CoffeTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeTypesService],
    }).compile();

    service = module.get<CoffeTypesService>(CoffeTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
