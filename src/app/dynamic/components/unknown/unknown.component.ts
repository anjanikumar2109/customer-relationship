import { Component } from '@angular/core';

import { DynamicComponent } from '../../dynamic-component';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.scss']
})
export class UnknownComponent extends DynamicComponent {
}
