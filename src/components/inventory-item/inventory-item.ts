import { Component, Input, OnInit } from '@angular/core';

import { GameData } from '../../providers/game-data';

@Component({
  selector: 'inventory-item',
  templateUrl: 'inventory-item.html'
})
export class InventoryItemComponent {

  @Input ('thingInInventory') inventoryItem;

  constructor(public gameData: GameData) {
    //console.log('Hello InventoryItem Component');
  }


  ngOnInit() {
    //console.log('nginit of inventoryItemComponent component');
    console.log("this inventoryItem "+this.inventoryItem);
    this.gameData.getItemInventory(this.inventoryItem);
    }

}
