import { Component } from '@angular/core';

/*
  Generated class for the Skills component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'skills',
  templateUrl: 'skills.html'
})
export class SkillsComponent {

  text: string;

  constructor() {
    console.log('Hello Skills Component');
    this.text = 'Hello World';
  }

}
