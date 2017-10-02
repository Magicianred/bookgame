import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GameData } from '../../providers/game-data';

import { Cap1Page } from '../cap1/cap1';

@Component({
  selector: 'page-choose-skills',
  templateUrl: 'choose-skills.html'
})
export class ChooseSkillsPage {

  //VARIABLES PAGES
  public cap1Page: any = Cap1Page;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private gameData: GameData) {
    this.gameData.getSkillChoices();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseSkillsPage');
  }

  setSkills(variable){
    this.storage.set('swim', false);   //SWIM
    this.storage.set('track', false);  //TRACK
    this.storage.set('hide', false);   //HIDE
    this.storage.set('talk', false);   //
    this.storage.set(variable, true);
  }

  check() {
    console.log(
      this.storage.get('swim').then((val) => {
          console.log('swim ', val);
        }));
    console.log(
      this.storage.get('hide').then((val) => {
            console.log('hide ', val);
          }));
  }

  goToPage(page: any) {
    this.navCtrl.push(page);
  }


}
