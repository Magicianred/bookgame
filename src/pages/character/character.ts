import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GameData } from '../../providers/game-data';

//import { InventoryPage } from '../inventory/inventory';
//import { LairPage } from '../lair/lair';



@Component({
  selector: 'page-character',
  templateUrl: 'character.html'
})
export class CharacterPage {

  //PARAMS
  public life: any;
  public attack: any;
  public money: any;
  public reputation: any;

  //SKILLS
  public swim: any;
  public hide: any;
  public track: any;
  public talk: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameData) {
    /*this.life = navParams.get('life'); 
    this.attack = navParams.get('attack');
    this.money = navParams.get('money');
    this.reputation = navParams.get('reputation');
    this.swim = navParams.get('swim');
    this.hide = navParams.get('hide');
    this.track = navParams.get('track');
    this.talk = navParams.get('talk');*/
  }

/*
  load(bookNavigation) {
    bookNavigation.goToLastChapter();
  }*/


  ionViewWillEnter() {/*
      this.life = this.storage.get('life'),
      this.attack = this.storage.get('attack'),
      this.money= this.storage.get('money'),
      this.reputation = this.storage.get('reputation'),
      this.swim = this.storage.get('swim'),
      this.hide = this.storage.get('hide'),
      this.track = this.storage.get('track'),
      this.talk = this.storage.get('talk')*/
    }




  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
    // console.log('life '+this.life);
    this.gameData.getJsonData();
  }

}
