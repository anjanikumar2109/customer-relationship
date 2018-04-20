import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CustomerModel } from './customer.model';

@Injectable()
export class CustomerService {

  private serviceUrl = 'http://localhost:3000/authors';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.serviceUrl);
  }

}
