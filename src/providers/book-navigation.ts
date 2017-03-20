import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Cap1Page } from '../pages/cap1/cap1';
import { Cap2Page } from '../pages/cap2/cap2';
import { Cap3Page } from '../pages/cap3/cap3';
import { Cap4Page } from '../pages/cap4/cap4';


@Injectable()
export class BookNavigation {

  CHAPTERS: Array<Component> = [
        Cap1Page, Cap2Page, Cap3Page, Cap4Page, //Cap5Page, Cap6Page, Cap7Page, Cap8Page, Cap9Page, Cap10Page,
        //Cap11Page, Cap12Page, Cap13Page, Cap14Page, Cap15Page, Cap16Page, Cap17Page, Cap18Page, Cap19Page, cap20Page,
    ]


  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
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
          //console.log("chapter "+chapter);
          this.navCtrl.push(this.CHAPTERS[posArray], {
            life: value[0],
            attack: value[1],
            money: value [2],
            reputation: value[3]
          });
        });
      } 


}
