import { Module } from '@nestjs/common';
import { DogFetcherModule } from './dog-fetcher/dog-fetcher.module';

@Module({
  imports: [DogFetcherModule],
})
export class AppModule {}
