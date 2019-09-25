import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }
  model = {};
  ngOnInit() {
  }
  onSubmit(form, userNameRef) {
    console.log(form, userNameRef);
  }
}
