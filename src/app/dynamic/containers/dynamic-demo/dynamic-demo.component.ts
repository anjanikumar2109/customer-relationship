import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-demo',
  templateUrl: './dynamic-demo.component.html',
  styleUrls: ['./dynamic-demo.component.scss']
})
export class DynamicDemoComponent implements OnInit {

  context: any = {
    text: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
