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
  imgUrl: string = "../img/inventoryReady/";
  acquired: any = [];
  acquiredOrNot: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameData:GameData, public http: Http, public storage:Storage) {
    this.http.get('assets/json/inventory.json').map(res => res.json()).subscribe((data) => {
    console.log(data);
    this.inventory = data;
    for (var i in this.inventory) {
      var searchkey = "acquired"+this.inventory[i]["id"]
      this.storage.get(searchkey).then((val) => {
        this.acquired.push(val);
        //console.log("aquiredOrNot "+val);
        //console.log("acquired array "+this.acquired);
        });
    }
  })
  }

  sell(price: number){
    console.log("price "+price);
    this.storage.get("money").then((data)=>{
      this.storage.set("money", data+price);
    })
  }
}
