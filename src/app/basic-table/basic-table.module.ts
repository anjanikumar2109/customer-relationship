import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from '../material/material.module';
import { BasicTableRoutingModule } from './basic-table-routing.module';
import { MasterDetailTableComponent } from './master-detail-table/master-detail-table.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BasicTableRoutingModule
  ],
  declarations: [MasterDetailTableComponent]
})
export class BasicTableModule { }
