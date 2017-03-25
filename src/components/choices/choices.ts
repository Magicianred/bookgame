import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GameData } from '../../providers/game-data';

import { FightPage } from '../../pages/fight/fight';

@Component({
  selector: 'choices',
  templateUrl: 'choices.html'
})
export class ChoicesComponent {

  public fightPage: any = FightPage;

  @Input ('chapNum') chapterNumber;
  @Input ('goTo1') goTo1;
  @Input ('goTo2') goTo2;
  @Input ('goTo3') goTo3;

  constructor(public gameData: GameData, public storage:Storage, public navCtrl:NavController) {
    console.log('Hello Choices Component');
  }

  ionViewDidLoad(chapterNumber: number) {
    this.gameData.getJsonData(this.chapterNumber)
  }

  choice1(){
    if (this.goTo1 = "Fight") {
      this.navCtrl.push(FightPage); 
    } else {
      this.storage.set("chapter", this.goTo1);
      this.gameData.getJsonData(this.goTo1);
    }
  }

  choice2(){
    Promise.all ([
      this.storage.set("chapter", this.goTo2),
      this.gameData.getJsonData(this.goTo2),
      ]).then((value) => {

      })
    };


}
