import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GameData {

  text: string;
  beforeTextGood: string;
  beforeTextBad: string;
  afterTextGood: string;
  afterTextBad: string;
  choice1: string;
  goTo1: number;
  choice2: string;
  goTo2: number;
  choice3: string;
  goTo3: number;
  fight: any;
  itemAcquired: any;
  skillAcquired: any;
  chapter: number;

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello GameData Provider');
  }

  getJsonData(chapter: number){
     this.http.get('assets/json/gameData.json').map(res => res.json()).subscribe((data) => {
     this.beforeTextGood = data["story"][chapter]["beforeTextGood"];
     this.beforeTextBad = data["story"][chapter]["beforeTextBad"];
     this.text = data["story"][chapter]["text"];
     this.afterTextGood = data["story"][chapter]["afterTextGood"];
     this.afterTextBad = data["story"][chapter]["afterTextBad"];
     this.choice1 = data["story"][chapter]["choice1"];
     this.goTo1 = data["story"][chapter]["goTo1"];
     this.choice2 = data["story"][chapter]["choice2"];
     this.goTo2 = data["story"][chapter]["goTo2"];
     this.choice3 = data["story"][chapter]["choice3"];
     this.goTo3 = data["story"][chapter]["goTo3"];
     this.fight = data["story"][chapter]["fight"];
     this.itemAcquired = data["story"][chapter]["itemAcquired"];
     this.skillAcquired = data["story"][chapter]["skillAcquired"];
     this.chapter = data["story"][chapter]["chapter"];
     return data;
    });
  }

  
  
  lifeValue : any; 
  attackValue: any;
  moneyValue: any;
  reputationValue: any;

  getInitialStats(){
    console.log("initial stats retrieved");
    Promise.all ([
      this.storage.get('life'),
      this.storage.get('attack'),
      this.storage.get('money'),
      this.storage.get('reputation'),
    ]).then(value => {
      this.lifeValue = value[0],
      this.attackValue = value[1],
      this.moneyValue = value[2],
      this.reputationValue = value[3]
    })
  }

  updateStat(stat, value){
    switch (stat) {
      case 'life':
        this.updateLife(value);
        break;
      case 'attack':
        this.updateAttack(value);
        break;
      case 'money':
        //this.updateMoney(value);
        break; 
      case 'reputation':
        console.log("stat = reputation");
        console.log ("value to add "+value);
        this.updateReputation(value);
        break; 
      }
  }

   updateMoney(operation, value) {
     this.storage.get('money').then((data) => {
       if (operation == "+") {
         this.moneyValue = +data + +value;
         // console.log(this.moneyValue);
         this.storage.set("money", this.moneyValue);
       }
       if (operation == "-") {
         this.moneyValue = +data - +value;
         this.storage.set("money", this.moneyValue);
       }
     })
   }

   updateReputation(value) {
     this.storage.get('reputation').then((data) => {  
        //console.log("reputation value" +value)       ;
        this.reputationValue = +data + +value;
        //console.log("new reputation value in game data "+this.reputationValue);
        this.storage.set("reputation", this.reputationValue);
       });
   }
   updateLife(value) {
     this.storage.get('life').then((data) => {         
        this.lifeValue = +data + +value;
        this.storage.set("life", this.lifeValue);
       });
   }
   updateAttack(value) {
     this.storage.get('attack').then((data) => {         
        this.attackValue = +data + +value;
        this.storage.set("attack", this.attackValue);
       });
   }



name: string;
description: string;
data: any;

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