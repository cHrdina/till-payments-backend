import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantsService } from './merchants/merchants.service';
import { MerchantsController } from './merchants/merchants.controller';

@Module({
  imports: [],
  controllers: [AppController, MerchantsController],
  providers: [AppService, MerchantsService],
})
export class AppModule {}
