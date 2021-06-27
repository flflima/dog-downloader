import { Controller, Get, HttpException, Res } from '@nestjs/common';
import { Response } from 'express';
import { DogFetcherService } from './dog-fetcher.service';
import { getFilename, getContentType } from './utils/http-utils';

@Controller('dog-fetcher')
export class DogFetcherController {
  constructor(private readonly dogFetcherService: DogFetcherService) {}

  @Get()
  async fetchDogImage(@Res() res: Response) {
    let filename = 'file.jpg';
    let content = 'jpeg';
    return await this.dogFetcherService
      .fetchDogImage()
      .then((response) => {
        filename = getFilename(response.message);
        content = getContentType(filename);
        return this.dogFetcherService.downloadImage(response.message);
      })
      .then((response) => {
        res.set('Content-Type', `image/${content}`);
        res.set('Content-Disposition', `attachment; filename=${filename}`);
        res.end(response);
      })
      .catch((err) => {
        console.error(err);
        throw new HttpException(`${err} `, 500);
      });
  }
}
