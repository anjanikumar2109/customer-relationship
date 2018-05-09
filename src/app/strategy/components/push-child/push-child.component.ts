import { ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-push-child',
  templateUrl: './push-child.component.html',
  styleUrls: ['./push-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushChildComponent {
  @Input() data: string[];

}
