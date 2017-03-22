import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.html'
})
export class TopBarComponent {

  @Input ('chapNum') chapterNumber;

  constructor() {
    console.log('Hello TopBar Component');
    console.log('chapterNumber ' + this.chapterNumber);
  }

}
