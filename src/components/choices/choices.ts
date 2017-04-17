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
  @Input ('itemAcquired') newItem;
  @Input ('skillAcquired') newSkill;
  @Input ('fightParams') fightParams;

  constructor(public gameData: GameData, public storage:Storage, public navCtrl:NavController) {
    console.log('Hello Choices Component');
  }


  ionViewDidLoad(chapterNumber: number) {
    //this.isThereAChoice();
    //this.gameData.getJsonData(this.chapterNumber)
  }

  acquireObject(itemName) {
    this.storage.set("acquired"+itemName, true);
  }



  choice1Function(){
    console.log('choice function 1');
    //check if something is aquired with choice 1 add it as aquired
    if (this.newItem[0] = 1) {
      console.log("item acquired with choice 2 item= "+this.newItem[1])
      this.storage.set("acquired"+this.newItem[1], true);
    }
    //check if some skill is itemAquired
    if (this.newSkill[0] = 1) {
      this.storage.set(this.newSkill[1], true);
    }
    //this.gameData.getJsonData(this.goTo1);
    if (this.goTo1 == "Fight") {
      this.navCtrl.push(FightPage, {
        fightParams: this.fightParams
      }); 
    } else {
      this.storage.set("chapter", this.goTo1);
      this.gameData.getJsonData(this.goTo1);
    }
  }

  choice2Function(){
    //console.log('choice function 2');
    if (this.newItem[0] = 2) {
      console.log('choice function 2 new item');
      this.storage.set("acquired"+this.newItem[1], true);
    }
    if (this.newSkill[0] = 2) {
      console.log('choice function 2 new skill');
      this.storage.set(this.newSkill[1], true);
    }
    if (this.goTo2 == "Fight") {
      this.navCtrl.push(FightPage, {
        fightParams: this.fightParams
      });
    } else {
      //console.log('choice function 2');
      this.storage.set("chapter", this.goTo2);
      this.gameData.getJsonData(this.goTo2);
    }
  }

  choice3Function(){
    console.log('choice function 3');
    
    if (this.newItem[0] = 3) {
      this.storage.set("acquired"+this.newItem[1], true);
    }
    
    if (this.newSkill[0] = 3) {
      this.storage.set(this.newSkill[1], true);
    }
    if (this.goTo3 == "Fight") {
      this.navCtrl.push(FightPage, {
        fightParams: this.fightParams
      });
    } else {
      this.storage.set("chapter", this.goTo3);
      this.gameData.getJsonData(this.goTo3);
    }
  }


}
