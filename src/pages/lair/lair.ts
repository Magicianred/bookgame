import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GameData } from '../../providers/game-data';

@Component({
  selector: 'page-lair',
  templateUrl: 'lair.html'
})
export class LairPage {

  armorValue: any;
  treasureValue: any;
  bedValue: any;
  wardrobeValue: any;
  tableValue: any;
  bookshelvesValue: any;

  alertValue = false;
  noMoneyAlert = false;
  alertText = "";
  objectName: any;
  price: any;
  stat1: any;
  statValue1: any;
  stat2: any;
  statValue2: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public gameData:GameData, public storage:Storage) {
    this.acquiredObjects();
    this.gameData.getLairData();
  }

  //get all the objects data, ar ethey acquired or not
  acquiredObjects() {

    this.storage.get("armor").then((val) =>{
      this.armorValue = val;
      console.log("armorValue "+val);
    });

    this.storage.get("treasure").then((val) =>{
      this.treasureValue = val;
      console.log("treasureValue "+val);
    });

    this.storage.get("bed").then((val) =>{
      this.bedValue = val;
      console.log("bedValue "+val);
    });

    this.storage.get("wardrobe").then((val) =>{
      this.wardrobeValue = val;
      console.log("wardrobeValue "+val);
    });

    this.storage.get("table").then((val) =>{
      this.tableValue = val;
      console.log("tableValue "+val);
    });

    this.storage.get("bookshelves").then((val) =>{
      this.bookshelvesValue = val;
      console.log("bookshelvesValue "+val);
    });

  }

  showAlert(){
    this.alertValue = true;
  }

  dismissAlert(){
    this.alertValue = false;
  }


  dismissAlertNoMoney(){
    this.noMoneyAlert = false;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LairPage');
  }

  getObjectDetails(name){
    this.alertText = this.gameData[name]["text"];
    this.price = this.gameData[name]["price"];
    this.stat1 =  this.gameData[name]["stat1"];
    //console.log("this.stat1 "+this.stat1)
    this.statValue1 = this.gameData[name]["statValue1"];
    //console.log("this.statValue1 "+this.statValue1)
    this.stat2 = this.gameData[name]["stat2"];
    //console.log("this.stat2 "+this.stat2)
    this.statValue2 = this.gameData[name]["statValue2"]; 
    //console.log("this.statValue2 "+this.statValue2)
    this.objectName = name;
    this.checkIfIHaveEnoughMoney(this.price);
  }

  checkIfIHaveEnoughMoney(price) {
    this.storage.get("money").then((val) => {
      console.log("money "+ val);
      if (val >=  price) {
        //se ho soldi mostro l'alert con i pulsanti per comprare
        console.log("hai abbastanza soldi");
        this.showAlert();
      } else {
        //se non ho soldi mostro l'alert che dice che non ho soldi
        console.log("non hai abbastanza soldi");
        this.noMoneyAlert = true;
      }
    });


  }

  buy(price, stat1, value1, stat2, value2, object){
    switch (object) {
      case 'armor':
        this.armorValue = true;
        break;
      case 'treasure':
        this.treasureValue = true;
        break;
      case 'bed':
        this.bedValue = true;
        break; 
      case 'wardrobe':
        this.wardrobeValue = true;
        break;
      case 'table':
        this.tableValue = true;
        break;
      case 'bookshelves':
        this.bookshelvesValue = true;
        break; 
      }
    this.storage.set(object, true).then(() => {
      console.log("val1 "+value1)
      console.log("val2 "+value2)
      console.log("stat1 "+stat1)
      console.log("stat2 "+stat2)
      this.gameData.updateStat(stat1, value1);
      this.gameData.updateStat(stat2, value2);
      this.gameData.updateMoney("-", price);
    }).then(() => {
      this.dismissAlert();
    });
  }

}
