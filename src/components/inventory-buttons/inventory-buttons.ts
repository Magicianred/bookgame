import { Component, Input } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'inventory-buttons',
  templateUrl: 'inventory-buttons.html'
})
export class InventoryButtonsComponent {

  @Input('itemName') name;
  @Input('useText') useText;
  @Input('addedSkill') skill;
  @Input('sellPrice') price;
  @Input('sellText') sellText;

  constructor(public storage:Storage) {
    console.log('Hello InventoryButtons Component');
  }
  sell(price, name) {
    console.log("sell price "+price);
   /* this.storage.set("acquired"+name, false);*/
  }

  addSkill(skill, name) {
    console.log("add skill function");
    /*this.storage.set(skill, true);
    this.storage.set(name+"Wore", true);*/
  }

}
