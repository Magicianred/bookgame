import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Cap1Page } from '../pages/cap1/cap1';
import { Cap2Page } from '../pages/cap2/cap2';
import { Cap3Page } from '../pages/cap3/cap3';
import { Cap4Page } from '../pages/cap4/cap4';
/*
import { Cap5Page } from '../pages/cap5/cap5';
import { Cap6Page } from '../pages/cap6/cap6';
import { Cap7Page } from '../pages/cap7/cap7';
import { Cap8Page } from '../pages/cap8/cap8';
import { Cap9Page } from '../pages/cap9/cap9';
import { Cap10Page } from '../pages/cap10/cap10';*/

export class MySettings {

    //GENERAL
    static TITLE: string = "Bad Wolf"; 
    
    static CHAPTERS: Array<Component> = [
        Cap1Page, Cap2Page, Cap3Page, Cap4Page, //Cap5Page, Cap6Page, Cap7Page, Cap8Page, Cap9Page, Cap10Page,
        //Cap11Page, Cap12Page, Cap13Page, Cap14Page, Cap15Page, Cap16Page, Cap17Page, Cap18Page, Cap19Page, cap20Page,
    ]

    static STATS: Array<string> = ['life', 'attack', 'money', 'reputation', 'minions'];

    static SKILLS: Array<string> = [];

    static ENEMIES: Array<string> = []; /** create and object class for enemy with name, jpg url, attack and life name of enemy is the id */

    constructor () {}

}