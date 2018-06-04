import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CustomerModel } from './customer.model';

@Injectable()
export class CustomerService {
  private serviceUrl = `${environment.apiUrl}/authors`;

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.serviceUrl);
  }

}
