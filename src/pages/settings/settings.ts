import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GameData } from '../../providers/game-data';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  it = ["Scegli la lingua", "Sei sicuro di voler leggere la storia in Italia?", "Sicuro"];
  en = ["Choose your language","Are you sure you want to read the story in english?", "I'm sure"];
  fur = ["la to lenga", "Setu sigur chi tu vul gjei la storia par furlan?", "Sigur"];
  lang: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public gameData: GameData) {
    this.lang = this.it;
    /*this.storage.get("language").then((data) => {
      switch (data) {
        case 'it':
          this.lang = this.it;
          break;
        case 'en':
          this.lang = this.en;
          break;
        case 'fur':
          this.lang = this.fur;
          break;
      }
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  setLanguageIt(){
    console.log('it');
    this.storage.set('language', 'it');
    this.lang = this.it;
    //this.gameData.getLanguage();
  }
  setLanguageEn(){
    console.log('en');
    this.storage.set('language', 'en');
    this.lang = this.en;
  }
  setLanguageFur(){
    this.storage.set('language', 'fur');
    this.lang = this.fur;
  }

}
