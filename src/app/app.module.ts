import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LibModule, LibConfig } from 'ng-starter-lib';
import { AdminLibModule } from 'admin-lib';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { ZoneDemoComponent } from './zone-demo/zone-demo.component';

const config: LibConfig = { quoteService: 'http://quotesondesign.com/wp-json/posts' };

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    HeaderComponent,
    ZoneDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LibModule,
    AdminLibModule,
  ],
  providers: [
    AuthGuard,
    CanDeactivateGuard,
    { provide: LibConfig, useValue: config },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
