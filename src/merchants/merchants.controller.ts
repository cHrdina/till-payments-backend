import { Controller, Get, Param } from '@nestjs/common';
import { MerchantsService } from './merchants.service';

@Controller('merchants')
export class MerchantsController {
  constructor(private merchantsService: MerchantsService) {}

  @Get()
  getMerchants() {
    return this.merchantsService.getMerchants();
  }

  @Get(":id")
  getMerchant(@Param() params) {
    console.log("Get a single merchant with id", params.id);
    return this.merchantsService.getMerchants().find(merchant => params.id === merchant.id);
  }
}
