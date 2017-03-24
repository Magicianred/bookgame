import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { MySettings } from '../../app/mySettings';
import { BookNavigation } from '../../app/bookNavigation';

@Component({
  selector: 'page-fight',
  templateUrl: 'fight.html'
})

export class FightPage {
  //PARAMS
  public characterLife: any;
  public characterAttack: any;
  public enemyAttack: any;
  public enemyLife: any;
  public winChapter: any;
  public loseChapter: any;
  public enemySrc: any;

  public chapters = MySettings.CHAPTERS;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.characterLife = navParams.get('characterLife');
    this.characterAttack = navParams.get('characterAttack');
    this.enemyAttack = navParams.get('enemyAttack');
    this.enemyLife = navParams.get('enemyLife');
    this.winChapter = navParams.get('winChapter');
    this.loseChapter = navParams.get('loseChapter');
    var 
    enemySrc = this.enemySrc = "assets/img/charReady/" + navParams.get('enemySrc') +'.png'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FightPage');
    console.log('characterLife '+this.characterLife);
    console.log('characterAttack '+this.characterAttack);
    console.log('enemyAttack '+this.enemyAttack);
    console.log('enemyLife '+this.enemyLife);
    console.log('winChapter '+this.winChapter);
    console.log('loseChapter '+this.loseChapter);
    console.log('enemySrc '+this.enemySrc);
  }

  presentAlert(message: string) {
  let alert = this.alertCtrl.create({
    //title: 'Low battery',
    //subTitle: '10% of battery remaining',
    message: message,
    buttons: ['Ok'],
    cssClass: 'alertFight',
    });
  alert.present();
  }

  youWinAlert() {
    let alert = this.alertCtrl.create({
    title: "Title",
    message: "Hai vinto!",
    buttons: ['prosegui'],
    cssClass: "winAlert",
    });
    //alert.setCssClass('winAlert');
    alert.present();
  }

  youLoseAlert() {
    let alert = this.alertCtrl.create({
    message: "Hai perso!",
    buttons: ['prosegui'],
    cssClass: 'loseAlert',
    });
    //alert.setCssClass('loseAlert');
    alert.present();
  } 

  throwTwoDices(){
    var firstDice: number = Math.floor(Math.random() * 6 + 1);
    var secondDice: number = Math.floor(Math.random() * 6 + 1);
    var attack: number = firstDice + secondDice;
    return attack
  }

  fight() {
    var characterDices: number = this.throwTwoDices();
    var characterFightAttack: number = characterDices + this.characterAttack;
    var enemyDices: number = this.throwTwoDices();
    var enemyFightAttack: number = enemyDices + this.enemyAttack;

    var message: string = "Hai totalizzato " + characterFightAttack + " punti. Il tuo avversario ne ha totalizzati " + enemyFightAttack + ".";
    if (characterFightAttack > enemyFightAttack) {
      //console.log('attacca');
        var damage: number = characterFightAttack - enemyFightAttack;
        this.enemyLife = this.enemyLife - damage;
        message = message + " Infliggi un danno di " + damage + " punti."
        this.presentAlert(message);
        if (this.enemyLife <=0) {
          this.youWinAlert();
        }
      } if (characterFightAttack < enemyFightAttack) {
        //console.log('subisci');
        var damage: number = enemyFightAttack - characterFightAttack;
        this.characterLife = this.characterLife - damage;
        message = message + " Subisci un danno di " + damage + " punti."
        this.presentAlert(message);
        if (this.characterLife <=0) {
          this.youLoseAlert();
        }
      } else {
        console.log("pareggio");
      }
  }
  

}
