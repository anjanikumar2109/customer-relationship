import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { MaterialModule } from '../material/material.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    OrdersRoutingModule,
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }
