import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GameData } from '../../providers/game-data';
import { Choices } from '../component/choices/choices';

@Component({
  selector: 'page-cap2',
  templateUrl: 'cap2.html'
})
export class Cap2Page {

  chapter: number = 2;                  //FOR TITLE

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameData) {}

  ionViewDidLoad(chapter: number) {
    this.storage.set('chapter', this.chapter);                  //SAVE CHAPTER VALUE
    this.gameData.getJsonData(this.chapter)
  }

  goToPage(test: any){
      this.navCtrl.push(test);
  }

}
