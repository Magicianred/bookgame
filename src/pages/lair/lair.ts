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
  bedValue: any;
  bookshelvesValue: any;

  alertValue = false;
  noMoneyAlert = false;
  alertText = "";
  price: any;
  stat1: any;
  stat1Value: any;
  stat2: any;
  stat2Value: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public gameData:GameData, public storage:Storage) {
    this.acquiredObjects();
    this.gameData.getLairData();
  }

  //get all the objects data, ar ethey acquired or not
  acquiredObjects() {

    this.storage.get("armor").then((val) =>{
      this.armorValue = val;
    });

    this.storage.get("treasure").then((val) =>{
      this.bedValue = val;
    });

    this.storage.get("bed").then((val) =>{
      this.armorValue = val;
    });

    this.storage.get("wardrobe").then((val) =>{
      this.armorValue = val;
    });

    this.storage.get("table").then((val) =>{
      this.armorValue = val;
    });

    this.storage.get("bookshelves").then((val) =>{
      this.armorValue = val;
    });

  }

  showAlert(){
    this.alertValue = true;
  }

  dismissAlert(){
    this.alertValue = false;
  }


  dismissNoMoneyAlert(){
    this.noMoneyAlert = false;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LairPage');
  }

  armor(){
    console.log("armor clicked");

    //prendo le statistiche dell'oggetto
    this.alertText = this.gameData["armor"]["text"];
    this.price = this.gameData["armor"][0];
    this.stat1 =  this.gameData["armor"][2];
    this.stat1Value = this.gameData["armor"][3];
    this.stat2 = this.gameData["armor"][4];
    this.stat2Value = this.gameData["armor"][5]; 

    //controllo se ho abbastanza soldi per coprarlo  
    this.storage.get("money").then((val) => {
      console.log("money "+ val);
      if (val >=  this.price) {
        //se ho soldi mostro l'alert con i pulsanti per comprare
        console.log("hai abbastanza soldi");
        this.armorValue = true;
        this.storage.set("armor", true).then(() => {
          this.showAlert();
        });
      } else {
        //se non ho soldi mostro l'alert che dice che non ho soldi
        console.log("non hai abbastanza soldi");
        this.noMoneyAlert = true;
      }
    });
  }

  buy(price, stat1, value1, stat2, value2){
    this.gameData.updateStat(stat1, value1);
    this.gameData.updateStat(stat2, value2);
    this.gameData.updateMoney("-", price);
    this.dismissAlert();
  }

}
