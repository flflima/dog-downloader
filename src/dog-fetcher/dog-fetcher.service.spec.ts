import { Test, TestingModule } from '@nestjs/testing';
import { DogFetcherService } from './dog-fetcher.service';

describe('DogFetcherService', () => {
  let service: DogFetcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogFetcherService],
    }).compile();

    service = module.get<DogFetcherService>(DogFetcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
