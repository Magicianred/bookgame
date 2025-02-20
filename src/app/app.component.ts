import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { GameData } from '../providers/game-data';

import { HomePage } from '../pages/home/home';
/*
import { enableProdMode } from '@angular/core';

enableProdMode();
*/
@Component({
  templateUrl: 'app.html',
  providers: [GameData]
})
export class MyApp {
  rootPage = HomePage;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

}
}
