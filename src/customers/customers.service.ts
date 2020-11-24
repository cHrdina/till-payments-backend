import { Injectable } from '@nestjs/common';
import { Customer } from 'src/interfaces/customer.interface';
import { mockCustomers } from 'src/mockData';

@Injectable()
export class CustomersService {
  async getCustomers(): Promise<Customer[]> {
    return mockCustomers;
  }
}
