import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InventoryPage } from '../../pages/inventory/inventory';
import { GameData } from '../../providers/game-data';

@Component({
  selector: 'bottom-bar',
  templateUrl: 'bottom-bar.html'
})

export class BottomBarComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameData:GameData) {
    this.gameData.getInitialStats();
  }

  goToInventory() {
    this.navCtrl.push(InventoryPage);
  }

}
