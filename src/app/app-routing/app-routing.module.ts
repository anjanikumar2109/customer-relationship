import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';

const routes: Routes = [
  { path: 'customers', canActivate: [AuthGuard], loadChildren: 'app/customers/customers.module#CustomersModule' },
  { path: 'orders', canActivate: [AuthGuard], loadChildren: 'app/orders/orders.module#OrdersModule' },
  { path: '', redirectTo: '', pathMatch: 'full', component: DashboardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
