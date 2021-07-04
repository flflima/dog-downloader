import { Test, TestingModule } from '@nestjs/testing';
import { DogFetcherController } from './dog-fetcher.controller';
import { DogFetcherService } from './dog-fetcher.service';

type MockType<T> = { [P in keyof T]?: jest.Mock<{}> };
const dogFetcherMock: () => MockType<DogFetcherService> = jest.fn(() => ({
  fetchDogImage: jest.fn(() => undefined),
  downloadImage: jest.fn(() => undefined),
}));

describe('DogFetcherController', () => {
  let controller: DogFetcherController;
  let dogFetcherService: MockType<DogFetcherService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogFetcherController],
      providers: [
        {
          provide: DogFetcherService,
          useFactory: dogFetcherMock,
        },
      ],
    }).compile();

    controller = module.get<DogFetcherController>(DogFetcherController);
    dogFetcherService = module.get(DogFetcherService);
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });
});
