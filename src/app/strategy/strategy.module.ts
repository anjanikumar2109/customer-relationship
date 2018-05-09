import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { StrategyRoutingModule } from './strategy-routing.module';
import { PushComponent } from './components/push/push.component';
import { BasicComponent } from './components/basic/basic.component';
import { BasicChildComponent } from './components/basic-child/basic-child.component';
import { PushChildComponent } from './components/push-child/push-child.component';
import { StrategyComponent } from './container/strategy/strategy.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StrategyRoutingModule,
  ],
  declarations: [
    PushComponent,
    BasicComponent,
    BasicChildComponent,
    PushChildComponent,
    StrategyComponent,
  ]
})
export class StrategyModule { }
