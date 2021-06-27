import { Controller, Get, HttpException, Res } from '@nestjs/common';
import { Response } from 'express';
import { DogFetcherService } from './dog-fetcher.service';

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
        filename = this.getFilename(response.message);
        content = this.getContentType(filename);
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

  getFilename(filename: string) {
    return filename.split('/').pop();
  }

  getContentType(filename: string): string {
    switch (filename.split('.').pop()) {
      case 'jpg':
        return 'jpeg';
      default:
        return 'jpeg';
    }
  }
}
