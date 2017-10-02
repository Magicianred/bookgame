import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GameData } from '../../providers/game-data';

import { Cap1Page } from '../cap1/cap1';


@Component({
  selector: 'page-win-alert',
  templateUrl: 'win-alert.html'
})
export class WinAlertPage {

  public goToThisChapter:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gameData: GameData) {
    this.goToThisChapter = navParams.get('goToThisChapter');
    this.gameData.getLabelsName();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WinAlertPagePage');
  }

  goOnReading(){
    this.navCtrl.push(Cap1Page, {
      goToThisChapter: this.goToThisChapter 
    });
  }

}
