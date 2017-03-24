import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GameData {

  constructor(public http: Http) {
    console.log('Hello GameData Provider');
  }

  getJsonData(){
    this.http.get('../assets/json/gameData.json').map(res => res.json()).subscribe((data) => {
      console.log(data);
    });
  }

}
