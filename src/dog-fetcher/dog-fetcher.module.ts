import { HttpModule, Module } from '@nestjs/common';
import { DogFetcherService } from './dog-fetcher.service';
import { DogFetcherController } from './dog-fetcher.controller';

@Module({
  imports: [HttpModule],
  providers: [DogFetcherService],
  controllers: [DogFetcherController],
})
export class DogFetcherModule {}
