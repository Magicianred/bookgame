import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BookNavigation } from '../../providers/book-navigation';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private bookNavigation: BookNavigation) {
    this.life = navParams.get('life');
    this.attack = navParams.get('attack');
    this.money = navParams.get('money');
    this.reputation = navParams.get('reputation');
    this.swim = navParams.get('swim');
    this.hide = navParams.get('hide');
    this.track = navParams.get('track');
    this.talk = navParams.get('talk');
  }

  load() {
    this.bookNavigation.goToLastChapter();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
  }

  goToInventary(){
    this.navCtrl.push(InventoryPage);
  }

  goToLair(){
    this.navCtrl.push(LairPage);
  }

}
