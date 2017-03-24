import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { Enemy } from '../../dataModels/enemyClass';

@Injectable()
export class RetrieveSql {

  static STATS: Array<String> = ['life', 'attack', 'money', 'reputation', 'minions'];


  static ENEMIES: Array<string> = [
  ]; /** create and object class for enemy with name, jpg url, attack and life name of enemy is the id */

  LANGUAGES: Array <string> = ['it'];


   life: number;
   attack: number;
   money: number;
   reputaion: number;
   chapter: number;
  
  constructor(public http: Http, public storage:Storage) {

  }

  getSkills() {
    var life = this.storage.get('life');
  }

}
