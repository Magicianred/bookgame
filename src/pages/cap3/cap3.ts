import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Cap3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cap3',
  templateUrl: 'cap3.html'
})
export class Cap3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    this.storage.set('chapter', 1);     //SET CHAPTER VALUE
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cap3Page');
  }

}
