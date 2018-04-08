import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { MaterialModule } from '../material/material.module';
import { SearchComponent } from './component/search.component';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
  ],
  declarations: [
    SearchComponent,
  ],
  providers: [SearchService]
})
export class SearchModule { }
