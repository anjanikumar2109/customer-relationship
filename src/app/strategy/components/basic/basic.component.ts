import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  foods = ['Bacon', 'Lettuce', 'Tomatoes'];

  addFood(food) {
    this.foods.push(food);
  }

}
