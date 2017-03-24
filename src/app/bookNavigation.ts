import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CharacterPage } from '../pages/character/character';
import { InventoryPage } from '../pages/inventory/inventory';
import { LairPage } from '../pages/lair/lair';
import { FightPage } from '../pages/fight/fight';
import { Cap1Page } from '../pages/cap1/cap1';
import { Cap2Page } from '../pages/cap2/cap2';
import { Cap3Page } from '../pages/cap3/cap3';
import { Cap4Page } from '../pages/cap4/cap4';

export class BookNavigation {

    static test: string ="bookNAvigation is working at least with constants"

  CHAPTERS: Array<Component> = [
        Cap1Page, Cap2Page, Cap3Page, Cap4Page, //Cap5Page, Cap6Page, Cap7Page, Cap8Page, Cap9Page, Cap10Page,
        //Cap11Page, Cap12Page, Cap13Page, Cap14Page, Cap15Page, Cap16Page, Cap17Page, Cap18Page, Cap19Page, cap20Page,
    ]


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    console.log('Hello BookNavigation Provider');
  }

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
          this.navCtrl.push(this.CHAPTERS[posArray], {
            life: value[0],
            attack: value[1],
            money: value [2],
            reputation: value[3]
          });
        });
      } 

  goToPage(namePage: any){
     this.navCtrl.push(namePage);
  }

  goToPageWithParam(namePage: any, paramsValues: Array<Number>) {
      this.navCtrl.push(namePage, {
        life: paramsValues[0],
        attack: paramsValues[1],
        money: paramsValues [2],
        reputation: paramsValues[3]
      });
  }


/* GO TO SPECIFIC PAGES *********************************************/

  public goToCharacterPage() {this.navCtrl.push(CharacterPage);}  
  public goToInventary(){this.navCtrl.push(InventoryPage);}
  public goToLair(){this.navCtrl.push(LairPage);}

  public goToFightPage(enemyAttackValue: number, enemyLifeValue: number, enemySrc: string){
        Promise.all([
        this.storage.get('life'),
        this.storage.get('attack'),
        ]).then((value) => {
          //console.log(this.storage.get('life'))
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