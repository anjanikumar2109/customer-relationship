import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { CustomerService } from '../customer.service';
import { CustomerModel } from '../customer.model';
import { CanComponentDeactivate } from '../../shared/guards/can-deactivate-guard.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, CanDeactivate<CanComponentDeactivate> {

  dataSource = new CustomerDataSource(this.customerService);
  displayedColumns = ['id', 'age', 'name'];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  canDeactivate() {
    console.log('navigation invoked!!');

    return true;
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
