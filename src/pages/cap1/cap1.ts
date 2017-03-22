import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CharacterPage } from '../character/character';


/*
  Generated class for the Cap1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cap1',
  templateUrl: 'cap1.html'
})
export class Cap1Page {
  chapter: number = 1;                  //FOR TITLE

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cap1Page ');
    this.storage.set('chapter', this.chapter);     //SAVE CHAPTER VALUE
  }

  goToCharacterPage() {
      Promise.all([
      this.storage.get('life'),
      this.storage.get('attack'),
      this.storage.get('money'),
      this.storage.get('reputation'),
      this.storage.get('swim'),
      this.storage.get('hide'),
      this.storage.get('trak'),
      this.storage.get('talk'),
      ]).then(value => {
        this.navCtrl.push(CharacterPage, {
          life: value[0],
          attack: value[1],
          money: value [2],
          reputation: value [3],
          swim: value[4],
          hide: value[5],
          track: value[6],
          talk: value [7]
        })
      });
    }

  goToPage(test: any){
      this.navCtrl.push(test);
  }

}