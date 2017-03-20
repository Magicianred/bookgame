import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TrollPage } from '../troll/troll';
import { HumanPage } from '../human/human';
import { ChooseSkillsPage } from '../choose-skills/choose-skills';

/*
  Generated class for the ChooseCharacter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.life = navParams.get('life');
    this.attack = navParams.get('attack');
    this.money = navParams.get('money');
    this.reputation = navParams.get('reputation');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseCharacterPage');
  }

setTrollStats() {
    this.storage.set('life', 12);   //LIFE
    this.storage.set('attack', 5);   // ATTACK 
    this.storage.set('reputation', 1);   //REPUTATION 
    this.storage.set('money', 0);   //MONEY
    var test = this.storage.get('test');
    return test
}

chooseTroll() {
    this.setTrollStats().then(() => {
      //console.log("I chose to be a TROLL!");
      this.storage.get('life').then((val) => {
         console.log('life 12 ', val);
       });
      this.navCtrl.push(ChooseSkillsPage);
    });

  }


  chooseHuman() {
    this.storage.get('strenght').then((val) => {
         console.log('Your strenght is', val);
       })
    console.log("I chose to be a HUMAN")
  }

}
