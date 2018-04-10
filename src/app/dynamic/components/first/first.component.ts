import { Component } from '@angular/core';

import { DynamicComponent } from '../../dynamic-component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent extends DynamicComponent {
}
