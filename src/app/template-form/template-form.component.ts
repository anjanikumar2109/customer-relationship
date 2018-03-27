import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  user: {firstName?: string, password?: string} = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplateBased() {
    console.log(this.user);
  }
}
