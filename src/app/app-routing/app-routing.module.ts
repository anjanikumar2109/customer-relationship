import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { GenericHttpInterceptor } from '../shared/interceptors/http.interceptor';
import { BlobErrorHttpInterceptor } from '../shared/interceptors/blob-error-http.interceptor';

const routes: Routes = [
  { path: 'customers', canActivate: [AuthGuard], loadChildren: 'app/customers/customers.module#CustomersModule' },
  { path: 'orders', canActivate: [AuthGuard], loadChildren: 'app/orders/orders.module#OrdersModule' },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
  { path: 'dynamic', loadChildren: 'app/dynamic/dynamic.module#DynamicModule' },
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
