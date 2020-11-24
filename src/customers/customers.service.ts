import { Injectable } from '@nestjs/common';
import { mockCustomers } from 'src/mockData';

@Injectable()
export class CustomersService {
  getCustomers() {
    return mockCustomers;
  }
}
