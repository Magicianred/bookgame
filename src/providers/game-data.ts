import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GameData {

  text: string;
  choice1: string;
  goTo1: number;
  choice2: string;
  goTo2: number;
  choice3: string;
  goTo3: number;
  fight: any;
  chapter: number;

  constructor(public http: Http) {
    console.log('Hello GameData Provider');
  }

  getJsonData(chapter: number){
     this.http.get('assets/json/gameData.json').map(res => res.json()).subscribe((data) => {
     this.text = data["story"][chapter]["text"];
     this.choice1 = data["story"][chapter]["choice1"];
     this.goTo1 = data["story"][chapter]["goTo1"];
     this.choice2 = data["story"][chapter]["choice2"];
     this.goTo2 = data["story"][chapter]["goTo2"];
     this.choice3 = data["story"][chapter]["choice3"];
     this.goTo3 = data["story"][chapter]["goTo3"];
     this.fight = data["story"][chapter]["fight"];
     this.chapter = data["story"][chapter]["chapter"];
     return data;
    });
  }

name: string;
description: string;
data: any;

setProperties(item){
  this[item]["name"] 
}

getInventoryData(){
     this.http.get('assets/json/inventory.json').map(res => res.json()).subscribe((data) => {
     console.log(data);
     //console.log ("inventory"+this.inventory);
     return data;
    });
  }

  nameItem: any;
  descriptionItem: any;
  jpgItem: any;
  buttonOn: any;
  buttonOff: any;


  getItemInventory(item: any){
    //console.log('started getItemInventory function');  
    this.http.get('assets/json/inventory.json').map(res => res.json()[item]).subscribe((data) => {
       data.toPromise();
       console.log(data);
      //console.log("item"+item);
       this.nameItem = data["name"];
       console.log('getItem name'+this.nameItem);
       /*
      this.jpgItem = data[item]["jpg"];
      this.nameItem = data[item]["name"];
      this.descriptionItem = data[item]["description"];
      this.buttonOn = data[item]["buttonOn"];
      console.log('name '+this.nameItem);*/
    });
  }

}