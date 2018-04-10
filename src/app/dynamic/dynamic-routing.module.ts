import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CanDeactivateGuard} from '../shared/guards/can-deactivate-guard.service';
import { DynamicDemoComponent } from './containers/dynamic-demo/dynamic-demo.component';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [CanDeactivateGuard],
    component: DynamicDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
