import { Component } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss']
})
export class PushComponent {
  foods = List(['Bacon', 'Lettuce', 'Tomatoes']);

  addFood(food) {
    this.foods = this.foods.push(food);
  }

}
