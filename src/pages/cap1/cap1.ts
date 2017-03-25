import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GameData } from '../../providers/game-data';
import { Choices } from '../component/choices/choices';

import { CharacterPage } from '../character/character';
//import { FightPage } from '../fight/fight';

@Component({
  selector: 'page-cap1',
  templateUrl: 'cap1.html'
})
export class Cap1Page {

  chapter: number = 1;     

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameData) {}

  ionView

  ionViewDidLoad(chapter: number) {
    //console.log('ionViewDidLoad Cap1Page ');
    this.storage.set('chapter', this.chapter);                  //SAVE CHAPTER VALUE
    this.gameData.getJsonData(this.chapter);
    /*
    entro nella pagina, prelevo il n capitolo, cerco la versione testo del capitolo carico la pagina
    */
  }

  goToPage(test: any){
      this.navCtrl.push(test);
  }

}