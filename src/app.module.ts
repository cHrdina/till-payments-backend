import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantsService } from './merchants/merchants.service';
import { MerchantsController } from './merchants/merchants.controller';
import { CustomersService } from './customers/customers.service';
import { CustomersController } from './customers/customers.controller';

@Module({
  imports: [],
  controllers: [AppController, MerchantsController, CustomersController],
  providers: [AppService, MerchantsService, CustomersService],
})
export class AppModule {}
