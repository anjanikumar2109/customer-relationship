import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { GenericHttpInterceptor } from '../shared/interceptors/http.interceptor';
import { BlobErrorHttpInterceptor } from '../shared/interceptors/blob-error-http.interceptor';

const routes: Routes = [
  { path: 'customers', canActivate: [AuthGuard], loadChildren: () => import('../customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', canActivate: [AuthGuard], loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule) },
  { path: 'search', loadChildren: () => import('../search/search.module').then(m => m.SearchModule) },
  { path: 'dynamic', loadChildren: () => import('../dynamic/dynamic.module').then(m => m.DynamicModule) },
  { path: 'strategy', loadChildren: () => import('../strategy/strategy.module').then(m => m.StrategyModule) },
  { path: 'dynamic-control', loadChildren: () => import('../dynamic-control/dynamic-control.module').then(m => m.DynamicControlModule) },
  { path: 'basic-table', loadChildren: () => import('../basic-table/basic-table.module').then(m => m.BasicTableModule) },
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
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GenericHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BlobErrorHttpInterceptor,
      multi: true
    }
  ],
})
export class AppRoutingModule { }
