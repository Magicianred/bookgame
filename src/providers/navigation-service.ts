import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CharacterPage } from '../pages/character/character';
import { FightPage } from '../pages/fight/fight';
import { Cap1Page } from '../pages/cap1/cap1';
import { Cap2Page } from '../pages/cap2/cap2';


@Injectable()
export class NavigationService {

  constructor(public http: Http) {
    console.log('Hello NavigationService Provider');
  }

}
