import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { MaterialModule } from '../material/material.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CustomersRoutingModule,
  ],
  declarations: [CustomerListComponent],
  providers: [CustomerService]
})
export class CustomersModule { }
