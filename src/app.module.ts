import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogFetcherModule } from './dog-fetcher/dog-fetcher.module';

@Module({
  imports: [DogFetcherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
