import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-child',
  templateUrl: './basic-child.component.html',
  styleUrls: ['./basic-child.component.scss']
})
export class BasicChildComponent {
  @Input() data: string[];

}
