import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GameData } from '../../providers/game-data';
import { Choices } from '../component/choices/choices';

import { CharacterPage } from '../character/character';
import { Cap2Page } from '../cap2/cap2';

@Component({
  selector: 'page-cap1',
  templateUrl: 'cap1.html'
})
export class Cap1Page {

  chapter: number = 1;
  cap2: any = Cap2Page;                

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameData) {}

  ionViewDidLoad(chapter: number) {
    //console.log('ionViewDidLoad Cap1Page ');
    this.storage.set('chapter', this.chapter);                  //SAVE CHAPTER VALUE
    this.gameData.getJsonData(this.chapter);
  }

  goToPage(test: any){
      this.navCtrl.push(test);
  }

}