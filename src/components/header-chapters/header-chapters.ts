import { Component } from '@angular/core';

/*
  Generated class for the HeaderChapters component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'header-chapters',
  templateUrl: 'header-chapters.html'
})
export class HeaderChaptersComponent {

  text: string;
  title: string;

  constructor() {
    console.log('Hello HeaderChapters Component');
    console.log(this.title)
    this.text = 'Hello World';
  }

}
