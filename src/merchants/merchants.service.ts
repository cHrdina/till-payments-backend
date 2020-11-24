import { Injectable } from '@nestjs/common';
import { mockMerchants } from "../mockData";

@Injectable()
export class MerchantsService {
  getMerchants() {
    return mockMerchants;
  }
}
