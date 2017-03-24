import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CharacterPage } from '../character/character';

@Component({
  selector: 'page-cap1',
  templateUrl: 'cap1.html'
})
export class Cap1Page {
  chapter: number = 1;                  //FOR TITLE

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {}

  ionViewWillEnter () {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cap1Page ');
    this.storage.set('chapter', this.chapter);     //SAVE CHAPTER VALUE
  }

  goToPage(test: any){
      this.navCtrl.push(test);
  }

}