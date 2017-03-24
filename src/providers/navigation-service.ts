import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CharacterPage } from '../pages/character/character';
import { FightPage } from '../pages/fight/fight';
import { Cap1Page } from '../pages/cap1/cap1';
import { Cap2Page } from '../pages/cap2/cap2';
import { Cap3Page } from '../pages/cap3/cap3';
import { Cap4Page } from '../pages/cap4/cap4';

@Injectable()
export class NavigationService {

  CHAPTERS: Array<Component> = [
        Cap1Page, Cap2Page, Cap3Page, Cap4Page, //Cap5Page, Cap6Page, Cap7Page, Cap8Page, Cap9Page, Cap10Page,
        //Cap11Page, Cap12Page, Cap13Page, Cap14Page, Cap15Page, Cap16Page, Cap17Page, Cap18Page, Cap19Page, cap20Page,
    ]


  constructor(public http: Http) {
    console.log('Hello NavigationService Provider');
  }

}
