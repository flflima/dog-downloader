import { map } from 'rxjs/operators';
import {
  HttpService,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DogMessage } from './dto/dog-message';
import { response } from 'express';

@Injectable()
export class DogFetcherService {
  constructor(private readonly httpService: HttpService) {}

  fetchDogImage(): Promise<DogMessage> {
    return this.httpService
      .get('https://dog.ceo/api/breeds/image/random')
      .toPromise()
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.error(err);
        throw new InternalServerErrorException();
      });
  }

  downloadImage(imageURL: string): Promise<string> {
    return this.httpService
      .get(imageURL, { responseType: 'arraybuffer' })
      .toPromise()
      .then((response) => response.data);
  }
}
