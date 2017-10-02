import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { GameData } from '../../providers/game-data';
import { Choices } from '../component/choices/choices';

//import { CharacterPage } from '../character/character';
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
  stats: any = []; 

  goToThisChapter: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameData, public http: Http) {
    //se arrivo dalla fight page ho un parametro. Controllo se c'è. Se c'è lo salvo e utilizzo this.chapter come quello, altrimenti chapter =1
    this.goToThisChapter = navParams.get('goToThisChapter');
    console.log("goToThisChapter "+this.goToThisChapter);
    if (this.goToThisChapter != undefined) {
      this.chapter = this.goToThisChapter
    } else {
      this.chapter = 1;
    }
 }




  ionViewDidLoad() {
    this.gameData.getJsonData(this.chapter);
    this.storage.set('chapter', this.chapter);                  //SAVE CHAPTER VALUE
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