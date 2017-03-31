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

}
