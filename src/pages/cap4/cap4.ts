import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Cap4 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cap4',
  templateUrl: 'cap4.html'
})
export class Cap4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    this.storage.set('chapter', 1);     //SET CHAPTER VALUE
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cap4Page');
  }

}
