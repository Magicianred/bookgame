import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'bottom-bar',
  templateUrl: 'bottom-bar.html'
})

export class BottomBarComponent {

  //PARAMS
  public life: any;
  public attack: any;
  public money: any;
  public reputation: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    var life = this.life = navParams.get('life');
    var attack =  this.attack = navParams.get('attack');
    var money = this.money = navParams.get('money');
    var reputation = this.reputation = navParams.get('reputation');
  }

}
