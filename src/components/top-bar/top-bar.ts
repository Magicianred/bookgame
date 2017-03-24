import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CharacterPage } from '../../pages/character/character';

@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.html'
})

export class TopBarComponent {

  @Input ('chapNum') chapterNumber;

  constructor(public navCtrl: NavController, public novParams: NavParams, public storage:Storage ) {}

  goToCharacterPage(){
    this.navCtrl.push(CharacterPage);
  }
/*
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
    }*/



}
