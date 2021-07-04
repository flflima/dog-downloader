import { HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { DogFetcherService } from './dog-fetcher.service';

type MockType<T> = { [P in keyof T]?: jest.Mock<{}> };
const httpServiceMock: () => MockType<HttpService> = jest.fn(() => ({
  get: jest.fn(() => undefined),
}));

const response = {
  data: { message: 'teste', status: '200' },
  headers: {},
  config: { url: 'http://localhost:3000/mockUrl' },
  status: 200,
  statusText: 'OK',
};

const responseImage = {
  data: '1232313132131313',
  headers: {},
  config: { url: 'http://localhost:3000/mockUrl' },
  status: 200,
  statusText: 'OK',
};

describe('DogFetcherService', () => {
  let service: DogFetcherService;
  let httpService: MockType<HttpService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DogFetcherService,
        {
          provide: HttpService,
          useFactory: httpServiceMock,
        },
      ],
    }).compile();

    service = module.get<DogFetcherService>(DogFetcherService);
    httpService = module.get(HttpService);
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get a valid message response', () => {
    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(response));

    const dogMessage = service.fetchDogImage();
    expect(dogMessage).toBeDefined();
  });

  it('should get an image response', () => {
    jest
      .spyOn(httpService, 'get')
      .mockImplementationOnce(() => of(responseImage));

    const returnString = service.downloadImage('http://teste-image.com');
    expect(returnString).toBeDefined();
  });
});
