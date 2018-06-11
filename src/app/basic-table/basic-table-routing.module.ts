import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterDetailTableComponent } from './master-detail-table/master-detail-table.component';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [CanDeactivateGuard],
    component: MasterDetailTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicTableRoutingModule { }
