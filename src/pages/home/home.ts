import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MySettings } from '../../app/mySettings';

import { ChooseCharacterPage } from '../choose-character/choose-character';
import { Cap1Page } from '../cap1/cap1';
import { CreditsPage } from '../credits/credits';
import { RulesPage } from '../rules/rules';
import { InventoryPage } from '../inventory/inventory';

import { FightPage } from '../fight/fight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //VARIABLES PAGES
  public chooseCharacterPage: any = ChooseCharacterPage;
  public creditsPage: any = CreditsPage;
  public rulesPage: any = RulesPage;
  public cap1Page: any = Cap1Page;
  public fightPage: any = FightPage;
  public inventoryPage: any = InventoryPage;

  title = MySettings.TITLE;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseCharacterPage');
    console.log(
      this.storage.get('life').then((val) => {
          console.log('life ', val);
        }));
    console.log(
      this.storage.get('attack').then((val) => {
            console.log('attack ', val);
          }));
    console.log(
          this.storage.get('chapter').then((val) => {
            console.log('chapter ', val);
          }));
  }
  /*
  //COMMON FUNCTIONS
  goToPage(namePage: any){
      this.navCtrl.push(namePage);
  }
*/
  goToPageWithParam(namePage: any, paramsValues: Array<Number>) {
      this.navCtrl.push(namePage, {
        life: paramsValues[0],
        attack: paramsValues[1],
        money: paramsValues [2],
        reputation: paramsValues[3]
      });
  }

  setEverythingToZero(){
      //GAME
      this.storage.set('chapter', 0)     //CHAPTER
      //CHARACTER
      this.storage.set('name', "");       //NAME
      this.storage.set('life', 0);        //LIFE
      this.storage.set('attack', 0);      //ATTACK
      this.storage.set('money', 0);       //MONEY
      this.storage.set('reputation', 0);  //REPUTATION
      this.storage.set('minions', 0);     //MINIONS
      this.storage.set('level', 0);       //LEVEL
      this.storage.set('swim', 0);        //SWIM
      this.storage.set('track', 0);       //TRACK
      this.storage.set('hide', 0);        //HIDE
      this.storage.set('talk', 0);        //TALK
      //LAIR
      this.storage.set('table', 0);       //TABLE

      //GAME VARIABLES (necklace, biscuit)
      this.storage.set('acquiredcloak', true);
      this.storage.set('acquirednecklace', true);
      this.storage.set('acquiredhealthkit', true);
      var test = this.storage.get('life');
      return test
  }

   start() {
   this.setEverythingToZero().then(() => {
      console.log("Everything is set to 0");
      this.navCtrl.push(ChooseCharacterPage);
    });
   }
   /*

goToLastChapter() {
        Promise.all([
        this.storage.get('life'),
        this.storage.get('attack'),
        this.storage.get('money'),
        this.storage.get('reputation'),
        this.storage.get('chapter'),
        ]).then((value) => {
          var posArray :number = value[4] - 1;  //POSITION OF THE COMPONENT IN THE ARRAY
          console.log("life "+value[0]);
          //console.log("chapter "+chapter);
          this.navCtrl.push(MySettings.CHAPTERS[posArray], {
            life: value[0],
            attack: value[1],
            money: value [2],
            reputation: value[3]
          });
        });
      } */

  goToPage(namePage: any){
     this.navCtrl.push(namePage);
  }

  goToFightPage(enemyAttackValue: number, enemyLifeValue: number, enemySrc: string){
        Promise.all([
        this.storage.get('life'),
        this.storage.get('attack'),
        ]).then((value) => {
          console.log(this.storage.get('life'))
          this.navCtrl.push(FightPage,{
            characterLife: value[0],
            characterAttack: value[1],
            enemyAttack: enemyAttackValue,
            enemyLife: enemyLifeValue,
            enemySrc: enemySrc,
            //winChapter: winChapter,
            //loseChapter: loseChapter,
          });
        });
  }






}
