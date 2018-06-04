import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DynamicControlRoutingModule } from './dynamic-control-routing.module';
import { RatingInputComponent } from './component/rating-input/rating-input.component';
import { RatingInputControlComponent } from './component/rating-input-control/rating-input-control.component';
import { ParentComponent } from './container/parent/parent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DynamicControlRoutingModule
  ],
  declarations: [RatingInputComponent, RatingInputControlComponent, ParentComponent]
})
export class DynamicControlModule { }
