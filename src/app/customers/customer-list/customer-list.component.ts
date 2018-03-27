import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';

import { CustomerService } from '../customer.service';
import { CustomerModel } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  dataSource = new CustomerDataSource(this.customerService);
  displayedColumns = ['id', 'age', 'name'];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

}

export class CustomerDataSource extends DataSource<any> {
  constructor(private customerService: CustomerService) {
    super();
  }
  connect(): Observable<CustomerModel[]> {
    return this.customerService.getCustomers();
  }
  disconnect() {}
}
