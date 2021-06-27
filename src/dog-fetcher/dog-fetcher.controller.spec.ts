import { Test, TestingModule } from '@nestjs/testing';
import { DogFetcherController } from './dog-fetcher.controller';

describe('DogFetcherController', () => {
  let controller: DogFetcherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogFetcherController],
    }).compile();

    controller = module.get<DogFetcherController>(DogFetcherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
