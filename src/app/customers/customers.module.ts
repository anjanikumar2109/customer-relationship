import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CustomersRoutingModule } from './customers-routing.module';
import { MaterialModule } from '../material/material.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {CustomerService} from './customer.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    CustomersRoutingModule,
  ],
  declarations: [CustomerListComponent],
  providers: [CustomerService]
})
export class CustomersModule { }
