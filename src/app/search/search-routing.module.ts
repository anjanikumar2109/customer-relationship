import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './component/search.component';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [CanDeactivateGuard],
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
