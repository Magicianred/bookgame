import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { GameData } from '../../providers/game-data';
import { Choices } from '../component/choices/choices';

import { CharacterPage } from '../character/character';
//import { FightPage } from '../fight/fight';

@Component({
  selector: 'page-cap1',
  templateUrl: 'cap1.html'
})
export class Cap1Page {

  chapter: number;  

  text: string;
  choice1: string;
  goTo1: number;
  choice2: string;
  goTo2: number;
  choice3: string;
  goTo3: number;
  fight: any;   

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameData, public http: Http) {
    this.chapter = 1;
  }
/*
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
    console.log( this.choice1);
    return data;
    });
  }*/


  simplify() {
    this.text = this.gameData.text;
    this.choice1 = this.gameData.choice1;
    this.choice2 = this.gameData.choice2;
    this.choice3 = this.gameData.choice3;
    this.goTo1 = this.gameData.goTo1;
    this.goTo2 = this.gameData.goTo2;
    this.goTo3 = this.gameData.goTo3;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cap1Page ');
    console.log('this chapter '+this.chapter);
    this.storage.set('chapter', this.chapter);                  //SAVE CHAPTER VALUE
    this.gameData.getJsonData(this.chapter);
    //this.simplify();
  }


  /* */
  statsChangeSave(extra) {
    for (var i: number = 0; i < extra.lenght; i = i + 2) {
      var label = extra[i];
      var labelValue = extra [i+1];
      this.storage.set(label, labelValue);
    }
  }

  toolChangeSave() {}

  goToPage(test: any){
      this.navCtrl.push(test);
  }

}