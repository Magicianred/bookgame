import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GameData {

  text: string;
  choice1: string;
  goTo1: number;
  choice2: string;
  goTo2: number;
  choice3: string;
  goTo3: number;
  fight: any;

  constructor(public http: Http) {
    console.log('Hello GameData Provider');
  }

  getJsonData(chapter: number){
    this.http.get('assets/json/gameData.json').map(res => res.json()).subscribe((data) => {
     this.text = data["story"][chapter]["text"];
     this.choice1 = data["story"][chapter]["choice1"];
     this.goTo1 = data["story"][chapter]["goTo1"];
     this.choice2 = data["story"][chapter]["choice2"];
     this.goTo2 = data["story"][chapter]["goTo2"];
     this.choice3 = data["story"][chapter]["choice3"];
     this.goTo3 = data["story"][chapter]["goTo3"];
     this.fight = data["story"][chapter]["fight"];
     console.log( this.fight);
     return data;
    });
  }

}
