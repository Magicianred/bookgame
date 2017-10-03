import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GameData } from '../../providers/game-data';

import { Cap1Page } from '../cap1/cap1';

@Component({
  selector: 'page-choose-skills',
  templateUrl: 'choose-skills.html'
})
export class ChooseSkillsPage {

  //VARIABLES PAGES
  public cap1Page: any = Cap1Page;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private gameData: GameData) {
    this.gameData.getSkillChoices();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseSkillsPage');
  }

  public selectedSkill = "";
  public swimSelected = false;
  public talkSelected = false;
  public hideSelected = false;
  public trackSelected = false;

  selectSwim(){
    console.log("selectSwim function");
    this.selectedSkill = "swim";
    this.swimSelected = true;
    this.hideSelected = false;
    this.talkSelected = false;
    this.trackSelected = false;
    console.log(this.swimSelected);
  }
  selectHide(){
    this.selectedSkill = "hide";
    this.swimSelected = false;
    this.hideSelected = true;
    this.talkSelected = false;
    this.trackSelected = false;
  }
  selectTrack(){
    this.selectedSkill = "track";
    this.swimSelected = false;
    this.hideSelected = false;
    this.talkSelected = false;
    this.trackSelected = true;
  }
  selectTalk(){
    this.selectedSkill = "talk";
    this.swimSelected = false;
    this.hideSelected = false;
    this.talkSelected = true;
    this.trackSelected = false;
  }

  /*
  setSkills(variable){
    this.storage.set('swim', false);   //SWIM
    this.storage.set('track', false);  //TRACK
    this.storage.set('hide', false);   //HIDE
    this.storage.set('talk', false);   //
    this.storage.set(variable, true);
  }

  check() {
    console.log(
      this.storage.get('swim').then((val) => {
          console.log('swim ', val);
        }));
    console.log(
      this.storage.get('hide').then((val) => {
            console.log('hide ', val);
          }));
  }
*/

  confirm(){
    this.storage.set(this.selectedSkill, true);
    this.goToPage(Cap1Page);
  }
   
  goToPage(page: any) {
    this.navCtrl.push(page);
  }


}
