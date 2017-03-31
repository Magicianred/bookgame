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
  thereIsAChoice1: boolean;
  thereIsAChoice2: boolean;
  thereIsAChoice3: boolean;

  @Input ('chapNum') chapterNumber;
  @Input ('choice1') choice1;
  @Input ('choice2') choice2;
  @Input ('choice3') choice3;
  @Input ('goTo1') goTo1;
  @Input ('goTo2') goTo2;
  @Input ('goTo3') goTo3;

  constructor(public gameData: GameData, public storage:Storage, public navCtrl:NavController) {
    console.log('Hello Choices Component');
    console.log('1'+this.goTo1);
    console.log('2'+this.goTo2);
    console.log('3'+this.goTo3);
  }


  ionViewDidLoad(chapterNumber: number) {
    //this.isThereAChoice();
    //this.gameData.getJsonData(this.chapterNumber)
  }

  choice1Function(){
    console.log('choice function 1');
    //this.gameData.getJsonData(this.goTo1);
    if (this.goTo1 == "Fight") {
      this.navCtrl.push(FightPage); 
    } else {
      this.storage.set("chapter", this.goTo1);
      this.gameData.getJsonData(this.goTo1);
    }
  }

  choice2Function(){
    console.log('choice function 2');
    //this.gameData.getJsonData(this.goTo1);
    if (this.goTo2 == "Fight") {
      this.navCtrl.push(FightPage); 
    } else {
      this.storage.set("chapter", this.goTo2);
      this.gameData.getJsonData(this.goTo2);
    }
  }

  choice3Function(){
    console.log('choice function 3');
    //this.gameData.getJsonData(this.goTo1);
    if (this.goTo3 == "Fight") {
      this.navCtrl.push(FightPage); 
    } else {
      this.storage.set("chapter", this.goTo3);
      this.gameData.getJsonData(this.goTo3);
    }
  }


}
