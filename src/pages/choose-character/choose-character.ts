import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GameData } from '../../providers/game-data';

import { TrollPage } from '../troll/troll';
import { HumanPage } from '../human/human';
import { ChooseSkillsPage } from '../choose-skills/choose-skills';

@Component({
  selector: 'page-choose-character',
  templateUrl: 'choose-character.html'
})
export class ChooseCharacterPage {
  //PARAMS
  public life: any;
  public attack: any;
  public money: any;
  public reputation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private gameData: GameData) {
    this.gameData.getCharachtersStats();
    this.gameData.getLabelsName();
/*    this.life = navParams.get('life');
    this.attack = navParams.get('attack');
    this.money = navParams.get('money');
    this.reputation = navParams.get('reputation');*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseCharacterPage');
  }
/*
setTrollStats() {
    this.storage.set('life', 12);   //LIFE
    this.storage.set('attack', 5);   // ATTACK 
    this.storage.set('reputation', 1);   //REPUTATION 
    this.storage.set('money', 0);   //MONEY
    var test = this.storage.get('test');
    return test
}*/

shaiDescription: any;
charLife: any;
charAttack: any;
charMoney: any;
charReputation: any;

setStats(){
  var resVal: any = 0;
  this.storage.set('life', this.gameData.charLife);   //LIFE
  this.storage.set('attack', this.gameData.charAttack);   // ATTACK 
  this.storage.set('reputation', this.gameData.charReputation);   //REPUTATION 
  this.storage.set('money', this.gameData.charMoney);   //MONEY
  return resVal;
}

chooseChar(){
  this.setStats();
  this.navCtrl.push(ChooseSkillsPage);
}

}
