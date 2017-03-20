import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Cap2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cap2',
  templateUrl: 'cap2.html'
})
export class Cap2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    this.storage.set('chapter', 2);     //SET CHAPTER VALUE
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cap2Page');
  }

}
