import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicContentComponent } from './containers/dynamic-content/dynamic-content.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { UnknownComponent } from './components/unknown/unknown.component';
import { DynamicDemoComponent } from './containers/dynamic-demo/dynamic-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DynamicRoutingModule
  ],
  declarations: [
    DynamicContentComponent,
    FirstComponent,
    SecondComponent,
    UnknownComponent,
    DynamicDemoComponent,
  ],
  entryComponents: [FirstComponent, SecondComponent, UnknownComponent],
})
export class DynamicModule { }
