import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'back-bar',
  templateUrl: 'back-bar.html'
})
export class BackBarComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  back() {
    this.navCtrl.pop();
  }

}
