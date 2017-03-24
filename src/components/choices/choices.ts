import { Component, Input } from '@angular/core';

import { GameData } from '../../providers/game-data';

@Component({
  selector: 'choices',
  templateUrl: 'choices.html'
})
export class ChoicesComponent {

  @Input ('chapNum') chapterNumber;
  text: string;

  constructor(public gameData: GameData) {
    console.log('Hello Choices Component');
    //this.text = 'Hello World';
  }

  ionViewDidLoad(chapterNumber: number) {
    this.gameData.getJsonData(this.chapterNumber)
  }

}
