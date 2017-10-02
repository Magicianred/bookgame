import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GameData } from '../../providers/game-data';
import { InventoryPage } from '../../inventory/inventory';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Cap1Page } from '../cap1/cap1';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-lose-alert',
  templateUrl: 'lose-alert.html'
})
export class LoseAlertPage {

  goToThisChapter: any;
  inventory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gameData: GameData,  public http: Http, public storage:Storage) {
    this.goToThisChapter = navParams.get('goToThisChapter');
    this.gameData.getLabelsName();
    this.checkImmortalPotion();

    this.http.get('assets/json/inventory.json').map(res => res.json()).subscribe((data) => {
      console.log(data);
      this.inventory = data;
      });

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoseAlertPagePage');
  }

  public immortalPotionAcquired: any

  checkImmortalPotion(){
    this.storage.get("acquiredimmortalpotion").then((val) => {
      this.immortalPotionAcquired = val;
      console.log("this.immortalPotionAcquired "+this.immortalPotionAcquired);
    })
  }

  startAgain(){
    this.navCtrl.push(HomePage);
  }

  goOnReading(){  
    this.storage.set('acquiredimmortalpotion', false);
    var stat = this.inventory[3]["useStat"];
    var statValue = this.inventory[3]["useStatValue"];
    this.gameData.updateStat(stat, statValue);
    this.navCtrl.push(Cap1Page, {
      goToThisChapter: this.goToThisChapter 
    });
  }

}