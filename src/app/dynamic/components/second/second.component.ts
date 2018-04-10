import { Component } from '@angular/core';

import { DynamicComponent } from '../../dynamic-component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent extends DynamicComponent {
}
