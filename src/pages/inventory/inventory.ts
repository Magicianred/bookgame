import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { GameData } from '../../providers/game-data';
import { InventoryItemComponent } from '../../components/inventory-item/inventory-item'

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html'
})
export class InventoryPage {

  inventory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameData:GameData, public http: Http) {
    this.http.get('assets/json/inventory.json').map(res => res.json()).subscribe((data) => {
    console.log(data);
    this.inventory = data;
    console.log(this.inventory);
    });
  }

 //inventory: any = ["cloak", "necklace"];

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad InventoryPage');
    this.gameData.getInventoryData();
    
  }*/

}
