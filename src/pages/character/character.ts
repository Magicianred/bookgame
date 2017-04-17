import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GameData } from '../../providers/game-data';

import { InventoryPage } from '../inventory/inventory';
import { LairPage } from '../lair/lair';



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

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameData) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
    this.gameData.getLabelsName();
    this.gameData.getSkillsStats();
    // console.log('life '+this.life);

    //this.gameData.getJsonData();
  }

  goToInventory() {
    this.navCtrl.push(InventoryPage);
  }

  goToLair() {
    this.navCtrl.push(LairPage);
  }

}
