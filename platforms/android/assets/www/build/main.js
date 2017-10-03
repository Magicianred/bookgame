webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cap1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_game_data__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { CharacterPage } from '../character/character';
//import { FightPage } from '../fight/fight';
var Cap1Page = (function () {
    function Cap1Page(navCtrl, navParams, storage, gameData, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.gameData = gameData;
        this.http = http;
        this.stats = [];
        //se arrivo dalla fight page ho un parametro. Controllo se c'è. Se c'è lo salvo e utilizzo this.chapter come quello, altrimenti chapter =1
        this.goToThisChapter = navParams.get('goToThisChapter');
        console.log("goToThisChapter " + this.goToThisChapter);
        if (this.goToThisChapter != undefined) {
            this.chapter = this.goToThisChapter;
        }
        else {
            this.chapter = 1;
        }
    }
    Cap1Page.prototype.ionViewDidLoad = function () {
        this.gameData.getJsonData(this.chapter);
        this.storage.set('chapter', this.chapter); //SAVE CHAPTER VALUE
    };
    /* */
    Cap1Page.prototype.statsChangeSave = function (extra) {
        for (var i = 0; i < extra.lenght; i = i + 2) {
            var label = extra[i];
            var labelValue = extra[i + 1];
            this.storage.set(label, labelValue);
        }
    };
    Cap1Page.prototype.toolChangeSave = function () { };
    Cap1Page.prototype.goToPage = function (test) {
        this.navCtrl.push(test);
    };
    Cap1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-cap1',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\cap1\cap1.html"*/'<top-bar [chapNum]=\'this.gameData.chapter\'></top-bar>\n\n\n\n<ion-content padding class="textChapter">\n\n  <p><span class="good">{{this.gameData.beforeTextGood}}</span><span class="bad">{{this.gameData.beforeTextBad}}</span></p>\n\n  <p>{{this.gameData.text}}</p> \n\n  <p><span class="good">{{this.gameData.afterTextGood}}</span><span class="bad">{{this.gameData.afterTextBad}}</span></p>\n\n  <choices [chapNum]=\'chapter\' \n\n           [choice1]=\'this.gameData.choice1\' \n\n           [choice2]=\'this.gameData.choice2\' \n\n           [choice3]=\'this.gameData.choice3\' \n\n           [goTo1]=\'this.gameData.goTo1\' \n\n           [goTo2]=\'this.gameData.goTo2\' \n\n           [goTo3]=\'this.gameData.goTo3\'\n\n           [itemAcquired]=\'this.gameData.itemAcquired\'\n\n           [skillAcquired]=\'this.gameData.itemAcquired\'\n\n           [fightParams]=\'this.gameData.fight\'></choices>\n\n</ion-content>\n\n\n\n<bottom-bar></bottom-bar>'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\cap1\cap1.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_game_data__["a" /* GameData */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], Cap1Page);
    return Cap1Page;
}());
//# sourceMappingURL=cap1.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_game_data__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InventoryPage = (function () {
    function InventoryPage(navCtrl, navParams, gameData, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        this.http = http;
        this.storage = storage;
        this.imgUrl = "../../assets/img/inventoryReady/";
        this.acquired = [];
        this.worn = [];
        this.http.get('assets/json/inventory.json').map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.inventory = data;
            // this.checkAquired();    
            var _loop_1 = function(i) {
                _this.storage.get("acquired" + _this.inventory[i]['id']).then(function (val) {
                    _this.acquired.push(val);
                    //console.log(this.acquired);
                });
                _this.storage.get("worn" + _this.inventory[i]['id']).then(function (val) {
                    console.log("worn" + _this.inventory[i]['id'] + " val: " + val);
                    _this.worn[i] = val;
                    //console.log("worn"+this.worn);
                });
            };
            for (var i = 0; i < _this.inventory.length; i++) {
                _loop_1(i);
            }
        });
    }
    InventoryPage.prototype.sell = function (i, item, price) {
        this.gameData.updateMoney("+", price);
        this.storage.set("acquired" + item, false);
        this.acquired[i] = false;
    };
    InventoryPage.prototype.wear = function (i, item) {
        console.log("worn" + item);
        this.storage.set("worn" + item, true);
        this.worn[i] = true;
        var skill = this.inventory[i]["wearSkill"];
        var stat = this.inventory[i]["wearStat"];
        var statValue = this.inventory[i]["wearStatValue"];
        if (stat !== undefined) {
            console.log('stat !== undefined');
            this.gameData.updateStat(stat, statValue);
        }
        if (skill !== undefined) {
            this.storage.set(skill, true);
        }
    };
    InventoryPage.prototype.unwear = function (i, item) {
        console.log("unworn" + item);
        this.storage.set("worn" + item, false);
        this.worn[i] = false;
        var skill = this.inventory[i]["wearSkill"];
        var stat = this.inventory[i]["wearStat"];
        var statValue = -this.inventory[i]["wearStatValue"];
        if (stat !== undefined) {
            this.gameData.updateStat(stat, statValue);
        }
        if (skill !== undefined) {
            this.storage.set(skill, true);
        }
    };
    InventoryPage.prototype.use = function (i) {
        var stat = this.inventory[i]["useStat"];
        var statValue = this.inventory[i]["useStatValue"];
        this.gameData.updateStat(stat, statValue);
        this.storage.set("acquired" + this.inventory[i]["id"], false);
        this.acquired[i] = false;
    };
    InventoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-inventory',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\inventory\inventory.html"*/'<back-bar></back-bar>\n\n<ion-content padding>\n\n  <div *ngFor="let item of inventory; let i = index">\n\n    <div *ngIf="acquired[i]" class="inventoryItem" id=item [class.hide]=\'!acquired[i]\'>\n\n      <div class="itemImg">\n\n        <img [src]="imgUrl+item.jpg" />\n\n      </div>\n\n      <div class="inventoryContent">\n\n          <p class="name">{{item.name}}</p>\n\n          <p class="description">{{item.description}}</p>\n\n          <p class="superPowerText">{{item.superPowerText}}</p>\n\n          <div class="buttonContainer">\n\n            <div *ngIf="item.useText" class="useButton" (tap)="use(i)">{{item.useText}}</div>\n\n            <div *ngIf="!item.useText">\n\n              <div  class="useButton" (tap)=\'wear(i, item.id)\' [class.hide]=\'worn[i]\'>{{item.wearText}}</div>\n\n              <div  class="outline" (tap)=\'unwear(i, item.id)\' [class.hide]=\'!worn[i]\'>{{item.unwearText}}</div>\n\n            </div>\n\n            <div class="sellButton" (tap)="sell(i, item.id, item.sellPrice)">{{item.sellText}}</div>\n\n          </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\inventory\inventory.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_game_data__["a" /* GameData */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
    ], InventoryPage);
    return InventoryPage;
}());
//# sourceMappingURL=inventory.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_data__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__choose_character_choose_character__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cap1_cap1__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__credits_credits__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rules_rules__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inventory_inventory__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fight_fight__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_settings__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__win_alert_win_alert__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lose_alert_lose_alert__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = (function () {
    function HomePage(navCtrl, navParams, storage, gameData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.gameData = gameData;
        //VARIABLES PAGES
        this.chooseCharacterPage = __WEBPACK_IMPORTED_MODULE_4__choose_character_choose_character__["a" /* ChooseCharacterPage */];
        this.creditsPage = __WEBPACK_IMPORTED_MODULE_6__credits_credits__["a" /* CreditsPage */];
        this.rulesPage = __WEBPACK_IMPORTED_MODULE_7__rules_rules__["a" /* RulesPage */];
        this.cap1Page = __WEBPACK_IMPORTED_MODULE_5__cap1_cap1__["a" /* Cap1Page */];
        this.fightPage = __WEBPACK_IMPORTED_MODULE_9__fight_fight__["a" /* FightPage */];
        this.inventoryPage = __WEBPACK_IMPORTED_MODULE_8__inventory_inventory__["a" /* InventoryPage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.gameData.getHome();
        /*
        console.log('ionViewDidLoad ChooseCharacterPage');
        console.log(
          this.storage.get('life').then((val) => {
              console.log('life ', val);
            }));
        console.log(
          this.storage.get('attack').then((val) => {
                console.log('attack ', val);
              }));
        console.log(
              this.storage.get('chapter').then((val) => {
                console.log('chapter ', val);
              }));
        console.log(
              this.storage.get('acquirednecklace').then((val) => {
                console.log('acquirednecklace ', val);
              }));
              */
    };
    HomePage.prototype.goToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.goToPageWithParam = function (namePage, paramsValues) {
        this.navCtrl.push(namePage, {
            life: paramsValues[0],
            attack: paramsValues[1],
            money: paramsValues[2],
            reputation: paramsValues[3]
        });
    };
    HomePage.prototype.goToWinAlertPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__win_alert_win_alert__["a" /* WinAlertPage */], {
            goToThisChapter: 3
        });
    };
    ;
    HomePage.prototype.goToLoseAlertPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__lose_alert_lose_alert__["a" /* LoseAlertPage */], {
            goToThisChapter: 3
        });
    };
    ;
    HomePage.prototype.setEverythingToZero = function () {
        //GAME
        this.storage.set('chapter', 0); //CHAPTER
        //CHARACTER
        this.storage.set('name', ""); //NAME
        this.storage.set('life', 0); //LIFE
        this.storage.set('attack', 0); //ATTACK
        this.storage.set('money', 0); //MONEY
        this.storage.set('reputation', 0); //REPUTATION
        this.storage.set('minions', 0); //MINIONS
        this.storage.set('level', 0); //LEVEL
        this.storage.set('swim', 0); //SWIM
        this.storage.set('track', 0); //TRACK
        this.storage.set('hide', 0); //HIDE
        this.storage.set('talk', 0); //TALK
        //LAIR
        this.storage.set('table', 0); //TABLE
        //GAME VARIABLES (necklace, biscuit)
        this.storage.set('acquiredcloak', true);
        this.storage.set('worncloak', false);
        this.storage.set('acquirednecklace', false);
        this.storage.set('wornnecklace', false);
        this.storage.set('acquiredhealthkit', true);
        this.storage.set('acquiredimmortalpotion', true);
        var test = this.storage.get('acquirednecklace');
        //set all liar objects to false
        this.storage.set("armor", false);
        this.storage.set("treasure", false);
        this.storage.set("table", false);
        this.storage.set("bookshelves", false);
        this.storage.set("bed", false);
        this.storage.set("wardrobe", false);
        console.log('acquirednecklace' + test);
        return test;
    };
    HomePage.prototype.start = function () {
        var _this = this;
        this.setEverythingToZero().then(function () {
            console.log("Everything is set to 0");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__choose_character_choose_character__["a" /* ChooseCharacterPage */]);
        });
    };
    HomePage.prototype.goToLastChapter = function () {
        var _this = this;
        console.log('gotolastchapter function');
        this.storage.get('chapter').then(function (data) {
            _this.goToPage(__WEBPACK_IMPORTED_MODULE_5__cap1_cap1__["a" /* Cap1Page */]);
            _this.gameData.getJsonData(data);
        });
        /*
              Promise.all([
              this.storage.get('life'),
              this.storage.get('attack'),
              this.storage.get('money'),
              this.storage.get('reputation'),
              this.storage.get('chapter'),
              ]).then((value) => {
                
                
                var posArray :number = value[4] - 1;  //POSITION OF THE COMPONENT IN THE ARRAY
                console.log("life "+value[0]);
                //console.log("chapter "+chapter);
                this.navCtrl.push(MySettings.CHAPTERS[posArray], {
                  life: value[0],
                  attack: value[1],
                  money: value [2],
                  reputation: value[3]
                });
              });*/
    };
    HomePage.prototype.goToPage = function (namePage) {
        this.navCtrl.push(namePage);
    };
    HomePage.prototype.goToFightPage = function (enemyAttackValue, enemyLifeValue, enemySrc) {
        var _this = this;
        Promise.all([
            this.storage.get('life'),
            this.storage.get('attack'),
        ]).then(function (value) {
            console.log(_this.storage.get('life'));
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__fight_fight__["a" /* FightPage */], {
                characterLife: value[0],
                characterAttack: value[1],
                enemyAttack: enemyAttackValue,
                enemyLife: enemyLifeValue,
                enemySrc: enemySrc,
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\home\home.html"*/'<ion-content padding>\n\n<ion-fab left middle class="fixedLeft">\n\n    <div class="homeButton fixedLeft" (click)=\'start()\'>Start</div>\n\n    <div class="homeButton fixedLeft" (click)=\'goToPage(creditsPage)\'>{{this.gameData.creditsButton}}</div>\n\n    <div class="homeButton fixedLeft" (click)=\'goToFightPage(2 , 3, "wolf")\'>Fight</div>\n\n</ion-fab>\n\n<ion-fab right middle class="fixedRight">\n\n    <div class="homeButton fixedRight" (click)=\'goToLastChapter()\'>Load</div>\n\n    <div class="homeButton fixedRight" (click)=\'goToPage(rulesPage)\'>{{this.gameData.rulesButton}}</div>\n\n    <div class="homeButton fixedRight" (tap)=\'goToSettings()\'>{{this.gameData.settingsButton}}</div>\n\n    <div class="homeButton fixedRight" (click)=\'goToPage(inventoryPage)\'>Inventory</div>\n\n</ion-fab>\n\n \n\n  <ion-fab right bottom>\n\n    <button ion-fab color="light" (click)=\'goToPageWithParam(cap1Page, 12, 5, 0, 0 )\'><ion-icon name="arrow-dropright"></ion-icon></button>\n\n    <button ion-fab color="light" (click)=\'goToWinAlertPage()\'><ion-icon name="arrow-droprleft"></ion-icon></button>\n\n    <button ion-fab color="dark" (click)=\'goToLoseAlertPage()\'><ion-icon name="arrow-droprleft"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\home\home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_game_data__["a" /* GameData */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_data__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__win_alert_win_alert__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lose_alert_lose_alert__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FightPage = (function () {
    function FightPage(navCtrl, navParams, gameData, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        this.alertCtrl = alertCtrl;
        this.fightParams = navParams.get('fightParams');
        this.charDiceOne = "-";
        this.charDiceTwo = "-";
        this.enemyDiceOne = "-";
        this.enemyDiceTwo = "-";
        console.log(this.fightParams);
        this.gameData.getLabelsName();
    }
    FightPage.prototype.ionViewDidLoad = function () {
        //this.gameData.getLabelsName();
        this.gameData.getSkillsStats();
        /* enemyName | enemyLife | enemyAttack | winChapter | loseChapter */
        this.characterLife = this.gameData.lifeValue;
        this.enemyName = this.fightParams[0];
        this.enemyLife = this.fightParams[1];
        this.enemyAttack = this.fightParams[2];
        this.winChapter = this.fightParams[3];
        this.loseChapter = this.fightParams[4];
        this.enemySrc = this.enemySrc = "../assets/img/charReady/" + this.enemyName + '.png';
    };
    /*
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
    
      youWinAlert(winchapter: any, winTitle: any, winText: any) {
        let alert = this.alertCtrl.create({
        title: winTitle,
        message: winText,
        buttons: [
          {
            text: 'Prosegui',
            role: 'cancel',
            handler: () => {
              
              this.navCtrl.push(WinAlertPage);
              console.log('prosegui verso '+winchapter);
            }
          }],
        cssClass: "winAlert",
        });
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
      } */
    FightPage.prototype.goToWinAlertPage = function (winChapter) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__win_alert_win_alert__["a" /* WinAlertPage */], {
            goToThisChapter: winChapter
        });
    };
    ;
    FightPage.prototype.goToLoseAlertPage = function (loseChapter) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lose_alert_lose_alert__["a" /* LoseAlertPage */], {});
    };
    ;
    FightPage.prototype.throwTwoDices = function () {
        var firstDice = Math.floor(Math.random() * 6 + 1);
        var secondDice = Math.floor(Math.random() * 6 + 1);
        var attack = firstDice + secondDice;
        //console.log("throwTwoDices "+attack);
        return attack;
    };
    FightPage.prototype.throwDice = function () {
        var dice = Math.floor(Math.random() * 6 + 1);
        return dice;
    };
    FightPage.prototype.fight = function () {
        //reset messaggi
        this.attackMessage = "";
        this.damageMessage = "";
        this.charDiceOne = this.throwDice();
        this.charDiceTwo = this.throwDice();
        var characterDices = +this.charDiceOne + +this.charDiceTwo;
        var characterFightAttack = characterDices + this.gameData.attackValue;
        console.log("characterFightAttack: " + characterFightAttack);
        this.enemyDiceOne = this.throwDice();
        this.enemyDiceTwo = this.throwDice();
        var enemyDices = +this.enemyDiceOne + +this.enemyDiceTwo;
        var enemyFightAttack = enemyDices + this.enemyAttack;
        console.log("enemyFightAttack: " + enemyFightAttack);
        //this.gameDatafightMsg sono le scritte del messaggio
        this.message = this.gameData.fightMsg1 + characterFightAttack + this.gameData.fightMsg2 + enemyFightAttack;
        console.log(this.message);
        if (characterFightAttack > enemyFightAttack) {
            //console.log('attacca');
            var damage = characterFightAttack - enemyFightAttack;
            console.log("damage" + damage);
            this.enemyLife = this.enemyLife - damage;
            this.attackMessage = damage + this.gameData.fightMsg3;
            //console.log(this.attackMessage);
            //this.message = this.message + " Infliggi un danno di " + damage + " punti."
            //this.presentAlert(message);
            if (this.enemyLife <= 0) {
                this.goToWinAlertPage(this.winChapter);
            }
        }
        if (characterFightAttack < enemyFightAttack) {
            console.log('subisci');
            var damage = enemyFightAttack - characterFightAttack;
            this.characterLife = this.gameData.lifeValue - damage;
            this.damageMessage = damage + this.gameData.fightMsg4;
            //this.message = this.message + " Subisci un danno di " + damage + " punti."
            //this.presentAlert(message);
            if (this.characterLife <= 0) {
            }
        }
        else {
            console.log("pareggio");
        }
    };
    FightPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-fight',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\fight\fight.html"*/'<ion-content padding>\n\n  <div class="character">\n\n    <div class="characterImgContainer_fightPage">\n\n      <img src="assets/img/charReady/female.png" class="characterImg_fightPage">\n\n    </div>\n\n    <div class="stats">\n\n        <p>{{this.gameData.lifeLabel}}: <span class="value">{{this.characterLife}}</span></p>\n\n        <p>{{this.gameData.attackLabel}}: <span class="value">{{this.gameData.attackValue}}</span></p>\n\n        <p>{{this.gameData.pointsLabel}}: <span class="value">{{this.charDiceOne}} + {{this.charDiceTwo}}</span></p>\n\n    </div>\n\n  </div>\n\n  <div class="fightButton" (tap)="fight()">{{this.gameData.fightTextLabel}}</div>\n\n  <div class="fightText">\n\n    <p>{{this.message}}</p>\n\n    <p><span class="good">{{this.attackMessage}}</span><span class="bad">{{this.damageMessage}}</span></p>\n\n  </div>\n\n  <div class="enemy">\n\n    <div class="enemyImgContainer_fightPage">\n\n      <img src=\'{{enemySrc}}\' class="enemyImg_fightPage">\n\n    </div>\n\n    <div class="stats">\n\n      <p>{{this.gameData.lifeLabel}}: <span class="value">{{this.enemyLife}}</span></p>\n\n      <p>{{this.gameData.attackLabel}}: <span class="value">{{this.enemyAttack}}</span></p>\n\n      <p>{{this.gameData.pointsLabel}}: <span class="value">{{this.enemyDiceOne}} + {{this.enemyDiceTwo}}</span></p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\fight\fight.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_game_data__["a" /* GameData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FightPage);
    return FightPage;
}());
//# sourceMappingURL=fight.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinAlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_data__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cap1_cap1__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WinAlertPage = (function () {
    function WinAlertPage(navCtrl, navParams, gameData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        this.goToThisChapter = navParams.get('goToThisChapter');
        this.gameData.getLabelsName();
    }
    WinAlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WinAlertPagePage');
    };
    WinAlertPage.prototype.goOnReading = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cap1_cap1__["a" /* Cap1Page */], {
            goToThisChapter: this.goToThisChapter
        });
    };
    WinAlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-win-alert',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\win-alert\win-alert.html"*/'<ion-content padding>\n\n  <div class="winTitle">\n\n    <p>{{this.gameData.winTitle}}</p>\n\n  </div>        \n\n  <p class="winText">{{this.gameData.winText}}</p>\n\n  <div class="goOnButton" (tap)="goOnReading()">{{this.gameData.keepAdventureText}}</div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\win-alert\win-alert.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_game_data__["a" /* GameData */]])
    ], WinAlertPage);
    return WinAlertPage;
}());
//# sourceMappingURL=win-alert.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoseAlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_data__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cap1_cap1__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoseAlertPage = (function () {
    function LoseAlertPage(navCtrl, navParams, gameData, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        this.http = http;
        this.storage = storage;
        this.goToThisChapter = navParams.get('goToThisChapter');
        this.gameData.getLabelsName();
        this.checkImmortalPotion();
        this.http.get('assets/json/inventory.json').map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            _this.inventory = data;
        });
    }
    LoseAlertPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LoseAlertPagePage');
    };
    LoseAlertPage.prototype.checkImmortalPotion = function () {
        var _this = this;
        this.storage.get("acquiredimmortalpotion").then(function (val) {
            _this.immortalPotionAcquired = val;
            console.log("this.immortalPotionAcquired " + _this.immortalPotionAcquired);
        });
    };
    LoseAlertPage.prototype.startAgain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    LoseAlertPage.prototype.goOnReading = function () {
        this.storage.set('acquiredimmortalpotion', false);
        var stat = this.inventory[3]["useStat"];
        var statValue = this.inventory[3]["useStatValue"];
        this.gameData.updateStat(stat, statValue);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cap1_cap1__["a" /* Cap1Page */], {
            goToThisChapter: this.goToThisChapter
        });
    };
    LoseAlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-lose-alert',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\lose-alert\lose-alert.html"*/'<ion-content padding>\n\n    <div class="loseTitle">\n\n      <p>{{this.gameData.loseTitle}}</p>\n\n    </div>        \n\n    <p class="loseText">{{this.gameData.loseText}}</p>\n\n    <div class="startAgainButton" (tap)="startAgain()">{{this.gameData.startOverText}}</div>\n\n\n\n    <div *ngIf="immortalPotionAcquired" class="newLifeButton" [class.hide]=\'!immortalPotionAcquired\' (tap)=goOnReading()>{{this.gameData.liveAgainText}}</div>\n\n    <!--<div class="newLifeButton" (tap)="goOnReading()">{{this.gameData.liveAgainText}}</div>-->\n\n  </ion-content>'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\lose-alert\lose-alert.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_game_data__["a" /* GameData */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
    ], LoseAlertPage);
    return LoseAlertPage;
}());
//# sourceMappingURL=lose-alert.js.map

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 268;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameData = (function () {
    function GameData(http, storage) {
        this.http = http;
        this.storage = storage;
        /* LANGUAGE */
        this.game_it = 'assets/json/gameData.json';
        this.inventory_it = 'assets/json/inventory.json';
        this.game_fur = 'assets/json/gameData_fur.json';
        this.inventory_fur = 'assets/json/inventory_fur.json';
        this.game_en = 'assets/json/gameData_en.json';
        this.inventory_en = 'assets/json/inventory_en.json';
        this.characterJson = 'assets/json/character.json';
        console.log('Hello GameData Provider');
        this.gameJson = this.game_it;
        this.inventoryJson = this.inventory_it;
    }
    GameData.prototype.getCharachtersStats = function () {
        var _this = this;
        this.http.get(this.gameJson).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.charDescription = data["shaiChararcter"]["charDescription"];
            _this.charLife = data["shaiChararcter"]["charLife"];
            console.log(_this.charLife);
            _this.charAttack = data["shaiChararcter"]["charAttack"];
            _this.charMoney = data["shaiChararcter"]["charMoney"];
            _this.charReputation = data["shaiChararcter"]["charReputation"];
            _this.charButtonText = data["shaiChararcter"]["charButtonText"];
        });
    };
    //get all the text for the chooseSkill page
    GameData.prototype.getSkillChoices = function () {
        var _this = this;
        this.http.get(this.gameJson).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.swim = data["skills"]["swim"];
            _this.swimText = data["skills"]["swimText"];
            _this.hide = data["skills"]["hide"];
            _this.hideText = data["skills"]["hideText"];
            _this.track = data["skills"]["track"];
            _this.trackText = data["skills"]["trackText"];
            _this.talk = data["skills"]["talk"];
            _this.talkText = data["skills"]["talkText"];
            _this.chooseSkillText = data["skills"]["chooseSkillText"];
            _this.chooseSkillTitle = data["skills"]["chooseSkillTitle"];
        });
    };
    /********************* HOME FUNCTIONS  */
    GameData.prototype.getHome = function () {
        var _this = this;
        this.storage.get("language").then(function (data) {
            switch (data) {
                case 'it':
                    _this.gameJson = _this.game_it;
                    _this.inventoryJson = _this.inventory_it;
                    _this.getHomeButtons();
                    break;
                case 'en':
                    _this.gameJson = _this.game_en;
                    _this.inventoryJson = _this.inventory_en;
                    _this.getHomeButtons();
                    break;
                case 'fur':
                    _this.gameJson = _this.game_fur;
                    _this.inventoryJson = _this.inventory_fur;
                    _this.getHomeButtons();
                    break;
            }
        });
    };
    GameData.prototype.getHomeButtons = function () {
        var _this = this;
        this.http.get(this.gameJson).map(function (res) { return res.json().home; }).subscribe(function (data) {
            _this.creditsButton = data["credits"];
            _this.rulesButton = data["rules"];
            _this.settingsButton = data["settings"];
        });
    };
    GameData.prototype.getLabelsName = function () {
        var _this = this;
        this.http.get(this.gameJson).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.swimLabel = data["skills"]["swim"];
            console.log("this.swimLabel " + _this.swimLabel);
            _this.hideLabel = data["skills"]["hide"];
            _this.trackLabel = data["skills"]["track"];
            _this.talkLabel = data["skills"]["talk"];
            _this.lifeLabel = data["labels"]["life"];
            _this.attackLabel = data["labels"]["attack"];
            _this.moneyLabel = data["labels"]["money"];
            _this.reputationLabel = data["labels"]["reputation"];
            _this.pointsLabel = data["labels"]["points"];
            _this.fightTextLabel = data["labels"]["fightText"];
            _this.fightMsg1 = data["labels"]["fightMsg1"];
            _this.fightMsg2 = data["labels"]["fightMsg2"];
            _this.fightMsg3 = data["labels"]["fightMsg3"];
            _this.fightMsg4 = data["labels"]["fightMsg4"];
            //ALERT
            _this.winTitle = data["labels"]["alert"]["winTitle"];
            _this.winText = data["labels"]["alert"]["winText"];
            _this.loseTitle = data["labels"]["alert"]["loseTitle"];
            _this.loseText = data["labels"]["alert"]["loseText"];
            _this.keepAdventureText = data["labels"]["alert"]["keepAdventureText"];
            _this.startOverText = data["labels"]["alert"]["startOverText"];
            _this.liveAgainText = data["labels"]["alert"]["liveAgainText"];
        });
    };
    GameData.prototype.getJsonData = function (chapter) {
        var _this = this;
        this.http.get(this.gameJson).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.beforeTextGood = data["story"][chapter]["beforeTextGood"];
            _this.beforeTextBad = data["story"][chapter]["beforeTextBad"];
            _this.text = data["story"][chapter]["text"];
            _this.afterTextGood = data["story"][chapter]["afterTextGood"];
            _this.afterTextBad = data["story"][chapter]["afterTextBad"];
            _this.choice1 = data["story"][chapter]["choice1"];
            _this.goTo1 = data["story"][chapter]["goTo1"];
            _this.choice2 = data["story"][chapter]["choice2"];
            _this.goTo2 = data["story"][chapter]["goTo2"];
            _this.choice3 = data["story"][chapter]["choice3"];
            _this.goTo3 = data["story"][chapter]["goTo3"];
            _this.fight = data["story"][chapter]["fight"];
            _this.itemAcquired = data["story"][chapter]["itemAcquired"];
            _this.skillAcquired = data["story"][chapter]["skillAcquired"];
            _this.chapter = data["story"][chapter]["chapter"];
            return data;
        });
    };
    GameData.prototype.getInitialStats = function () {
        var _this = this;
        console.log("initial stats retrieved");
        Promise.all([
            this.storage.get('life'),
            this.storage.get('attack'),
            this.storage.get('money'),
            this.storage.get('reputation'),
        ]).then(function (value) {
            _this.lifeValue = value[0],
                _this.attackValue = value[1],
                _this.moneyValue = value[2],
                _this.reputationValue = value[3];
        });
    };
    GameData.prototype.updateStat = function (stat, value) {
        switch (stat) {
            case 'life':
                this.updateLife(value);
                break;
            case 'attack':
                this.updateAttack(value);
                break;
            case 'money':
                //this.updateMoney(value);
                break;
            case 'reputation':
                console.log("stat = reputation");
                console.log("value to add " + value);
                this.updateReputation(value);
                break;
        }
    };
    GameData.prototype.updateMoney = function (operation, value) {
        var _this = this;
        this.storage.get('money').then(function (data) {
            if (operation == "+") {
                _this.moneyValue = +data + +value;
                // console.log(this.moneyValue);
                _this.storage.set("money", _this.moneyValue);
            }
            if (operation == "-") {
                _this.moneyValue = +data - +value;
                _this.storage.set("money", _this.moneyValue);
            }
        });
    };
    GameData.prototype.updateReputation = function (value) {
        var _this = this;
        this.storage.get('reputation').then(function (data) {
            //console.log("reputation value" +value)       ;
            _this.reputationValue = +data + +value;
            //console.log("new reputation value in game data "+this.reputationValue);
            _this.storage.set("reputation", _this.reputationValue);
        });
    };
    GameData.prototype.updateLife = function (value) {
        var _this = this;
        this.storage.get('life').then(function (data) {
            _this.lifeValue = +data + +value;
            _this.storage.set("life", _this.lifeValue);
        });
    };
    GameData.prototype.updateAttack = function (value) {
        var _this = this;
        this.storage.get('attack').then(function (data) {
            _this.attackValue = +data + +value;
            _this.storage.set("attack", _this.attackValue);
        });
    };
    GameData.prototype.getInventoryData = function () {
        this.http.get(this.inventoryJson).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
            //console.log ("inventory"+this.inventory);
            return data;
        });
    };
    GameData.prototype.getItemInventory = function (item) {
        var _this = this;
        //console.log('started getItemInventory function');  
        this.http.get(this.inventoryJson).map(function (res) { return res.json()[item]; }).subscribe(function (data) {
            data.toPromise();
            console.log(data);
            _this.nameItem = data["name"];
            console.log('getItem name' + _this.nameItem);
        });
    };
    GameData.prototype.getSkillsStats = function () {
        var _this = this;
        this.storage.get('hide').then(function (data) {
            _this.hide = data;
        });
        this.storage.get('swim').then(function (data) {
            _this.swim = data;
        });
        this.storage.get('talk').then(function (data) {
            _this.talk = data;
        });
        this.storage.get('track').then(function (data) {
            _this.track = data;
        });
    };
    //get the info for the alerts in the lair page
    GameData.prototype.getLairData = function () {
        var _this = this;
        this.http.get(this.gameJson).map(function (res) { return res.json()["lair"]; }).subscribe(function (data) {
            console.log(data);
            _this.buyText = data["buyText"];
            _this.closeText = data["closeText"];
            _this.noMoneyText = data["noMoneyText"];
            _this.noMoneyButtonText = data["noMoneyButtonText"];
            _this.armor = data["armor"];
            _this.treasure = data["treasure"];
            _this.bed = data["bed"];
            _this.wardrobe = data["wardrobe"];
            _this.table = data["table"];
            _this.bookshelves = data["bookshelves"];
        });
    };
    GameData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* Storage */]])
    ], GameData);
    return GameData;
}());
//# sourceMappingURL=game-data.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseCharacterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_data__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__choose_skills_choose_skills__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChooseCharacterPage = (function () {
    function ChooseCharacterPage(navCtrl, navParams, storage, gameData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.gameData = gameData;
        this.gameData.getCharachtersStats();
        this.gameData.getLabelsName();
        /*    this.life = navParams.get('life');
            this.attack = navParams.get('attack');
            this.money = navParams.get('money');
            this.reputation = navParams.get('reputation');*/
    }
    ChooseCharacterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseCharacterPage');
    };
    ChooseCharacterPage.prototype.setStats = function () {
        var resVal = 0;
        this.storage.set('life', this.gameData.charLife); //LIFE
        this.storage.set('attack', this.gameData.charAttack); // ATTACK 
        this.storage.set('reputation', this.gameData.charReputation); //REPUTATION 
        this.storage.set('money', this.gameData.charMoney); //MONEY
        return resVal;
    };
    ChooseCharacterPage.prototype.chooseChar = function () {
        this.setStats();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__choose_skills_choose_skills__["a" /* ChooseSkillsPage */]);
    };
    ChooseCharacterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-choose-character',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\choose-character\choose-character.html"*/'<ion-content padding>\n\n  <div>\n\n    <p class="charTitle">Shai</p>\n\n    <p>{{this.gameData.charDescription}}</p>\n\n    <p class="label">{{this.gameData.lifeLabel}}: <span class="value">{{this.gameData.charLife}}</span></p>\n\n    <p class="label">{{this.gameData.attackLabel}}: <span class="value">{{this.gameData.charAttack}}</span></p>\n\n    <p class="label">{{this.gameData.reputationLabel}}: <span class="value">{{this.gameData.charReputation}}</span></p>\n\n    <p class="label">{{this.gameData.moneyLabel}}: <span class="value">{{this.gameData.charMoney}}</span></p>\n\n    <div class="chooseButton" (tap)=chooseChar()>{{this.gameData.charButtonText}}</div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\choose-character\choose-character.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_game_data__["a" /* GameData */]])
    ], ChooseCharacterPage);
    return ChooseCharacterPage;
}());
//# sourceMappingURL=choose-character.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseSkillsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_data__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cap1_cap1__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChooseSkillsPage = (function () {
    function ChooseSkillsPage(navCtrl, navParams, storage, gameData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.gameData = gameData;
        //VARIABLES PAGES
        this.cap1Page = __WEBPACK_IMPORTED_MODULE_4__cap1_cap1__["a" /* Cap1Page */];
        this.selectedSkill = "";
        this.swimSelected = false;
        this.talkSelected = false;
        this.hideSelected = false;
        this.trackSelected = false;
        this.gameData.getSkillChoices();
    }
    ChooseSkillsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseSkillsPage');
    };
    ChooseSkillsPage.prototype.selectSwim = function () {
        console.log("selectSwim function");
        this.selectedSkill = "swim";
        this.swimSelected = true;
        this.hideSelected = false;
        this.talkSelected = false;
        this.trackSelected = false;
        console.log(this.swimSelected);
    };
    ChooseSkillsPage.prototype.selectHide = function () {
        this.selectedSkill = "hide";
        this.swimSelected = false;
        this.hideSelected = true;
        this.talkSelected = false;
        this.trackSelected = false;
    };
    ChooseSkillsPage.prototype.selectTrack = function () {
        this.selectedSkill = "track";
        this.swimSelected = false;
        this.hideSelected = false;
        this.talkSelected = false;
        this.trackSelected = true;
    };
    ChooseSkillsPage.prototype.selectTalk = function () {
        this.selectedSkill = "talk";
        this.swimSelected = false;
        this.hideSelected = false;
        this.talkSelected = true;
        this.trackSelected = false;
    };
    /*
    setSkills(variable){
      this.storage.set('swim', false);   //SWIM
      this.storage.set('track', false);  //TRACK
      this.storage.set('hide', false);   //HIDE
      this.storage.set('talk', false);   //
      this.storage.set(variable, true);
    }
  
    check() {
      console.log(
        this.storage.get('swim').then((val) => {
            console.log('swim ', val);
          }));
      console.log(
        this.storage.get('hide').then((val) => {
              console.log('hide ', val);
            }));
    }
  */
    ChooseSkillsPage.prototype.confirm = function () {
        this.storage.set(this.selectedSkill, true);
        this.goToPage(__WEBPACK_IMPORTED_MODULE_4__cap1_cap1__["a" /* Cap1Page */]);
    };
    ChooseSkillsPage.prototype.goToPage = function (page) {
        this.navCtrl.push(page);
    };
    ChooseSkillsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-choose-skills',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\choose-skills\choose-skills.html"*/'\n\n<ion-content padding>\n\n  <p class="title">{{this.gameData.chooseSkillTitle}}</p>\n\n  <p>{{this.gameData.chooseSkillText}}</p>\n\n  <div class="column">\n\n    <div class="skill" (tap)=selectSwim() [ngClass]="{\'skillSelected\': this.swimSelected }">\n\n      <div class="row">\n\n        <img class="imgSkill" src=\'assets/img/charPageReady/swim.png\' />\n\n        <div class="column">\n\n          <p class="skillTitle">{{this.gameData.swimLabel}}</p>\n\n          <p>{{this.gameData.swimText}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="skill" (tap)=selectHide() [ngClass]="{\'skillSelected\': this.hideSelected }">\n\n      <div class="row">\n\n        <img class="imgSkill" src=\'assets/img/charPageReady/hide.png\' />\n\n        <div class="column">\n\n          <p class="skillTitle">{{this.gameData.hideLabel}}</p>\n\n          <p>{{this.gameData.hideText}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="skill" (tap)=selectTrack() [ngClass]="{\'skillSelected\': this.trackSelected }">\n\n      <div class="row">\n\n        <img class="imgSkill" src=\'assets/img/charPageReady/track.png\' />\n\n        <div class="column">\n\n          <p class="skillTitle">{{this.gameData.trackLabel}}</p>\n\n          <p>{{this.gameData.trackText}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="skill" (tap)=selectTalk() [ngClass]="{\'skillSelected\': this.talkSelected }">\n\n      <div class="row">\n\n        <img class="imgSkill" src=\'assets/img/charPageReady/talk.png\' />\n\n        <div class="column">\n\n          <p class="skillTitle">{{this.gameData.talkLabel}}</p>\n\n          <p>{{this.gameData.talkText}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <!-- \n\n  <p>{{this.gameData.selectedSkillText}}</p>\n\n  <p class="selectedSkill">{{this.selectedSkill}}</p>\n\n  -->\n\n  <div class="button" (tap)=confirm()>Conferma</div>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\choose-skills\choose-skills.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_game_data__["a" /* GameData */]])
    ], ChooseSkillsPage);
    return ChooseSkillsPage;
}());
//# sourceMappingURL=choose-skills.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Credits page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CreditsPage = (function () {
    function CreditsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreditsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditsPage');
    };
    CreditsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-credits',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\credits\credits.html"*/'<!--\n\n  Generated template for the Credits page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>credits</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n credits page\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\credits\credits.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CreditsPage);
    return CreditsPage;
}());
//# sourceMappingURL=credits.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Rules page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var RulesPage = (function () {
    function RulesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RulesPage');
    };
    RulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-rules',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\rules\rules.html"*/'<!--\n\n  Generated template for the Rules page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>rules</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\rules\rules.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RulesPage);
    return RulesPage;
}());
//# sourceMappingURL=rules.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_data__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, storage, gameData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.gameData = gameData;
        this.it = ["Scegli la lingua", "Sei sicuro di voler leggere la storia in Italia?", "Sicuro"];
        this.en = ["Choose your language", "Are you sure you want to read the story in english?", "I'm sure"];
        this.fur = ["la to lenga", "Setu sigur chi tu vul gjei la storia par furlan?", "Sigur"];
        this.lang = this.it;
        /*this.storage.get("language").then((data) => {
          switch (data) {
            case 'it':
              this.lang = this.it;
              break;
            case 'en':
              this.lang = this.en;
              break;
            case 'fur':
              this.lang = this.fur;
              break;
          }
        });*/
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.setLanguageIt = function () {
        console.log('it');
        this.storage.set('language', 'it');
        this.lang = this.it;
        //this.gameData.getLanguage();
    };
    SettingsPage.prototype.setLanguageEn = function () {
        console.log('en');
        this.storage.set('language', 'en');
        this.lang = this.en;
    };
    SettingsPage.prototype.setLanguageFur = function () {
        this.storage.set('language', 'fur');
        this.lang = this.fur;
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\settings\settings.html"*/'<ion-content padding>\n\n  <back-bar></back-bar>\n\n  <div class="langChoices">\n\n    <p>{{this.lang[0]}}</p>\n\n    <div class="language" (tap)=setLanguageIt()>\n\n      <img class="imgLanguage" src=\'../assets/img/langReady/it.png\' />Italiano\n\n      </div>\n\n    <div class="language" (tap)=setLanguageEn()><img class="imgLanguage" src=\'../assets/img/langReady/en.png\' />Inglese</div>\n\n    <div class="language" (tap)=setLanguageFur()><img class="imgLanguage" src=\'../assets/img/langReady/fur.png\' />Friulano</div>\n\n  </div>\n\n  <div>\n\n    <div class="message">{{this.lang[1]}}</div>\n\n    <div class="confirmButton">{{this.lang[2]}}</div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\settings\settings.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_game_data__["a" /* GameData */]])
    ], SettingsPage);
    return SettingsPage;
}());
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_data__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inventory_inventory__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lair_lair__ = __webpack_require__(546);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CharacterPage = (function () {
    function CharacterPage(navCtrl, navParams, storage, gameData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.gameData = gameData;
        this.src = "assets/img/charPageReady/";
    }
    CharacterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CharacterPage');
        this.gameData.getLabelsName();
        this.gameData.getSkillsStats();
        this;
    };
    CharacterPage.prototype.goToInventory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inventory_inventory__["a" /* InventoryPage */]);
    };
    CharacterPage.prototype.goToLair = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__lair_lair__["a" /* LairPage */]);
    };
    CharacterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-character',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\character\character.html"*/'<ion-content>\n\n  <back-bar></back-bar>\n\n\n\n  <div class="characterPageImg">\n\n    <img src="assets/img/charPageReady/char.png">\n\n  </div>\n\n  <div class="columns">\n\n    <div>\n\n      <div class="label">{{this.gameData.lifeLabel}}:</div>\n\n      <div class="label">{{this.gameData.attackLabel}}:</div>\n\n      <div class="label">{{this.gameData.moneyLabel}}:</div>\n\n      <div class="label">{{this.gameData.reputationLabel}}:</div>\n\n    </div>\n\n    <div> \n\n      <div class="value">{{this.gameData.lifeValue}}</div>\n\n      <div class="value">{{this.gameData.attackValue}}</div>\n\n      <div class="value">{{this.gameData.moneyValue}}</div>\n\n      <div class="value">{{this.gameData.reputationValue}}</div>\n\n    </div>\n\n    <div class="extra">\n\n      <div class="inventary" (click)="goToInventory()"></div>\n\n      <div class="lair" (click)="goToLair()"></div>\n\n    </div>\n\n  </div>\n\n  <!-- <div class="skillsDisplay">\n\n    <div [ngSwitch]=swim>\n\n      <div class="skill" *ngSwitchCase=\'false\'>\n\n        <img src="../assets/img/charPageReady/swim_off.png" />\n\n      </div>\n\n      <div class="skill" *ngSwitchCase=\'true\'>\n\n        <img src="../assets/img/charPageReady/swim.png" />\n\n      </div>\n\n    </div>\n\n    <div [ngSwitch]=this.gameData.hide>\n\n      <div class="skill" *ngSwitchCase=\'false\'>\n\n        <img src="../assets/img/charPageReady/hide_off.png" />\n\n      </div>\n\n      <div class="skill" *ngSwitchCase=\'true\'>\n\n        <img src="../assets/img/charPageReady/hide.png" />\n\n      </div>\n\n    </div>\n\n    <div [ngSwitch]=track>\n\n      <div class="skill" *ngSwitchCase=\'false\'>\n\n        <img src="../assets/img/charPageReady/track_off.png" />\n\n      </div>\n\n      <div class="skill" *ngSwitchCase=\'true\'>\n\n        <img src="../assets/img/charPageReady/track.png" />\n\n      </div>\n\n    </div>\n\n    <div [ngSwitch]=talk>\n\n      <div class="skill" *ngSwitchCase=\'false\'>\n\n        <img src="../assets/img/charPageReady/talk_off.png" />\n\n      </div>\n\n      <div class="skill" *ngSwitchCase=\'true\'>\n\n        <img src="../assets/img/charPageReady/talk.png" />\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content> -->\n\n<div class="skillsDisplay">\n\n    <div [ngSwitch]=this.gameData.swim>\n\n      <div class="skill" *ngSwitchCase=\'false\'>\n\n        <img [src]=\'this.src+"swim_off.png"\' />\n\n        <p class="smallLabel off">{{this.gameData.swimLabel}}</p>\n\n      </div>\n\n      <div class="skill" *ngSwitchCase=\'true\'>\n\n        <img [src]=\'this.src+"swim.png"\' />\n\n        <p class="smallLabel">{{this.gameData.swimLabel}}</p>\n\n      </div>\n\n    </div>\n\n    <div [ngSwitch]=this.gameData.hide>\n\n      <div class="skill" *ngSwitchCase=\'false\'>\n\n        <img [src]=\'this.src+"hide_off.png"\' />\n\n        <p class="smallLabel off">{{this.gameData.hideLabel}}</p>\n\n      </div>\n\n      <div class="skill" *ngSwitchCase=\'true\'>\n\n        <img [src]=\'this.src+"hide.png"\' />\n\n        <p class="smallLabel">{{this.gameData.hideLabel}}</p>\n\n      </div>\n\n    </div>\n\n    <div [ngSwitch]=this.gameData.track>\n\n      <div class="skill" *ngSwitchCase=\'false\'>\n\n        <img [src]=\'this.src+"track_off.png"\' />\n\n        <p class="smallLabel off">{{this.gameData.trackLabel}}</p>\n\n      </div>\n\n      <div class="skill" *ngSwitchCase=\'true\'>\n\n        <img [src]= this.src+"track.png" />\n\n        <p class="smallLabel">{{this.gameData.trackLabel}}</p>\n\n      </div>\n\n    </div>\n\n    <div [ngSwitch]=this.gameData.talk>\n\n      <div class="skill" *ngSwitchCase=\'false\'>\n\n        <img [src]=\'this.src+"talk_off.png"\' />\n\n        <p class="smallLabel off">{{this.gameData.talkLabel}}</p>\n\n      </div>\n\n      <div class="skill" *ngSwitchCase=\'true\'>\n\n        <img [src]=\'this.src+"talk.png"\' />\n\n        <p class="smallLabel">{{this.gameData.talkLabel}}</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\character\character.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_game_data__["a" /* GameData */]])
    ], CharacterPage);
    return CharacterPage;
}());
/*
export class CharacterPage {

  //PARAMS
  public life: any;
  public attack: any;
  public money: any;
  public reputation: any;

  //SKILLS
  public swim: any;
  public hide: any;
  public track: any;
  public talk: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameData) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
    this.gameData.getLabelsName();
    this.gameData.getSkillsStats();
    // console.log('life '+this.life);

    //this.gameData.getJsonData();
  }

  goToInventory() {
    this.navCtrl.push(InventoryPage);
  }

  goToLair() {
    this.navCtrl.push(LairPage);
  }

}
*/ 
//# sourceMappingURL=character.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LairPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_data__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LairPage = (function () {
    function LairPage(navCtrl, navParams, gameData, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        this.storage = storage;
        this.alertValue = false;
        this.noMoneyAlert = false;
        this.alertText = "";
        this.acquiredObjects();
        this.gameData.getLairData();
    }
    //get all the objects data, ar ethey acquired or not
    LairPage.prototype.acquiredObjects = function () {
        var _this = this;
        this.storage.get("armor").then(function (val) {
            _this.armorValue = val;
            console.log("armorValue " + val);
        });
        this.storage.get("treasure").then(function (val) {
            _this.treasureValue = val;
            console.log("treasureValue " + val);
        });
        this.storage.get("bed").then(function (val) {
            _this.bedValue = val;
            console.log("bedValue " + val);
        });
        this.storage.get("wardrobe").then(function (val) {
            _this.wardrobeValue = val;
            console.log("wardrobeValue " + val);
        });
        this.storage.get("table").then(function (val) {
            _this.tableValue = val;
            console.log("tableValue " + val);
        });
        this.storage.get("bookshelves").then(function (val) {
            _this.bookshelvesValue = val;
            console.log("bookshelvesValue " + val);
        });
    };
    LairPage.prototype.showAlert = function () {
        this.alertValue = true;
    };
    LairPage.prototype.dismissAlert = function () {
        this.alertValue = false;
    };
    LairPage.prototype.dismissAlertNoMoney = function () {
        this.noMoneyAlert = false;
    };
    LairPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LairPage');
    };
    LairPage.prototype.getObjectDetails = function (name) {
        this.alertText = this.gameData[name]["text"];
        this.price = this.gameData[name]["price"];
        this.stat1 = this.gameData[name]["stat1"];
        //console.log("this.stat1 "+this.stat1)
        this.statValue1 = this.gameData[name]["statValue1"];
        //console.log("this.statValue1 "+this.statValue1)
        this.stat2 = this.gameData[name]["stat2"];
        //console.log("this.stat2 "+this.stat2)
        this.statValue2 = this.gameData[name]["statValue2"];
        //console.log("this.statValue2 "+this.statValue2)
        this.objectName = name;
        this.checkIfIHaveEnoughMoney(this.price);
    };
    LairPage.prototype.checkIfIHaveEnoughMoney = function (price) {
        var _this = this;
        this.storage.get("money").then(function (val) {
            console.log("money " + val);
            if (val >= price) {
                //se ho soldi mostro l'alert con i pulsanti per comprare
                console.log("hai abbastanza soldi");
                _this.showAlert();
            }
            else {
                //se non ho soldi mostro l'alert che dice che non ho soldi
                console.log("non hai abbastanza soldi");
                _this.noMoneyAlert = true;
            }
        });
    };
    LairPage.prototype.buy = function (price, stat1, value1, stat2, value2, object) {
        var _this = this;
        switch (object) {
            case 'armor':
                this.armorValue = true;
                break;
            case 'treasure':
                this.treasureValue = true;
                break;
            case 'bed':
                this.bedValue = true;
                break;
            case 'wardrobe':
                this.wardrobeValue = true;
                break;
            case 'table':
                this.tableValue = true;
                break;
            case 'bookshelves':
                this.bookshelvesValue = true;
                break;
        }
        this.storage.set(object, true).then(function () {
            console.log("val1 " + value1);
            console.log("val2 " + value2);
            console.log("stat1 " + stat1);
            console.log("stat2 " + stat2);
            _this.gameData.updateStat(stat1, value1);
            _this.gameData.updateStat(stat2, value2);
            _this.gameData.updateMoney("-", price);
        }).then(function () {
            _this.dismissAlert();
        });
    };
    LairPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-lair',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\pages\lair\lair.html"*/'<ion-content>\n\n  <back-bar></back-bar>\n\n  <div id="bg"></div>\n\n  <div id="objects">\n\n    <!-- ARMOR -->\n\n    <div *ngIf="armorValue" id="armor" ></div>\n\n    <div *ngIf="!armorValue" id="armorOff" (tap)="getObjectDetails(\'armor\')"></div>\n\n    <!-- TREASURE -->\n\n    <div *ngIf="treasureValue" id="treasure" ></div>\n\n    <div *ngIf="!treasureValue" id="treasureOff" (tap)="getObjectDetails(\'treasure\')"></div>\n\n    <!-- BED -->\n\n    <div *ngIf="bedValue" id="bed" ></div>\n\n    <div *ngIf="!bedValue" id="bedOff" (tap)="getObjectDetails(\'bed\')"></div>\n\n    <!-- WARDROBE -->\n\n    <div *ngIf="wardrobeValue" id="wardrobe" ></div>\n\n    <div *ngIf="!wardrobeValue" id="wardrobeOff" (tap)="getObjectDetails(\'wardrobe\')"></div>\n\n    <!-- TABLE -->\n\n    <div *ngIf="tableValue" id="table" ></div>\n\n    <div *ngIf="!tableValue" id="tableOff" (tap)="getObjectDetails(\'table\')"></div>\n\n    <!-- BOOKSHELVES -->\n\n    <div *ngIf="bookshelvesValue" id="bookshelves" ></div>\n\n    <div *ngIf="!bookshelvesValue" id="bookshelvesOff" (tap)="getObjectDetails(\'bookshelves\')"></div>\n\n\n\n\n\n\n\n\n\n    <div *ngIf="alertValue" class="alert" >\n\n        <p>{{this.alertText}}</p>\n\n        <div class="greenButton" (tap)="buy(this.price, this.stat1, this.statValue1, this.stat2, this.statValue2, this.objectName)">{{this.gameData.buyText}}</div>\n\n        <div class="button" (tap)="dismissAlert()">{{this.gameData.closeText}}</div>\n\n    </div>\n\n    <div *ngIf="noMoneyAlert" class="alertNoMoney" >\n\n        <p>{{this.gameData.noMoneyText}}</p>\n\n        <div class="whiteButton" (tap)="dismissAlertNoMoney()">{{this.gameData.noMoneyButtonText}}</div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\pages\lair\lair.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_game_data__["a" /* GameData */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
    ], LairPage);
    return LairPage;
}());
//# sourceMappingURL=lair.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(641);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_bottom_bar_bottom_bar__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_top_bar_top_bar__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_back_bar_back_bar__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_choices_choices__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_game_data__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_credits_credits__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_rules_rules__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_choose_character_choose_character__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_choose_skills_choose_skills__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cap1_cap1__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_character_character__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_fight_fight__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_win_alert_win_alert__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_lose_alert_lose_alert__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_inventory_inventory__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lair_lair__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__ = __webpack_require__(544);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__components_bottom_bar_bottom_bar__["a" /* BottomBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_top_bar_top_bar__["a" /* TopBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_back_bar_back_bar__["a" /* BackBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_choices_choices__["a" /* ChoicesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_credits_credits__["a" /* CreditsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_rules_rules__["a" /* RulesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_choose_character_choose_character__["a" /* ChooseCharacterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_choose_skills_choose_skills__["a" /* ChooseSkillsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cap1_cap1__["a" /* Cap1Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_character_character__["a" /* CharacterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_fight_fight__["a" /* FightPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_win_alert_win_alert__["a" /* WinAlertPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_lose_alert_lose_alert__["a" /* LoseAlertPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_inventory_inventory__["a" /* InventoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_lair_lair__["a" /* LairPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_credits_credits__["a" /* CreditsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_rules_rules__["a" /* RulesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_choose_character_choose_character__["a" /* ChooseCharacterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_choose_skills_choose_skills__["a" /* ChooseSkillsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cap1_cap1__["a" /* Cap1Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_character_character__["a" /* CharacterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_fight_fight__["a" /* FightPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_win_alert_win_alert__["a" /* WinAlertPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_lose_alert_lose_alert__["a" /* LoseAlertPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_inventory_inventory__["a" /* InventoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_lair_lair__["a" /* LairPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */],
                },
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */],
                __WEBPACK_IMPORTED_MODULE_8__providers_game_data__["a" /* GameData */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_data__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
import { enableProdMode } from '@angular/core';

enableProdMode();
*/
var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_game_data__["a" /* GameData */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_inventory_inventory__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_data__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BottomBarComponent = (function () {
    function BottomBarComponent(navCtrl, navParams, gameData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameData = gameData;
        this.gameData.getInitialStats();
    }
    BottomBarComponent.prototype.goToInventory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_inventory_inventory__["a" /* InventoryPage */]);
    };
    BottomBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'bottom-bar',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\components\bottom-bar\bottom-bar.html"*/'<div class="chapterFooter">\n\n  <div class="stats">\n\n      <div class="bottomStats">\n\n          <img src="../assets/img/bottomBar/life.png" />\n\n          <p>{{this.gameData.lifeValue}}</p>\n\n      </div>\n\n      <div class="bottomStats">\n\n          <img src="../assets/img/bottomBar/attack.png" />\n\n          <p>{{this.gameData.attackValue}}</p>\n\n      </div>\n\n      <div class="bottomStats">\n\n          <img src="../assets/img/bottomBar/money.png" />\n\n          <p>{{this.gameData.moneyValue}}</p>\n\n      </div>\n\n      <div class="bottomStats">\n\n          <img src="../assets/img/bottomBar/reputation.png" />\n\n          <p>{{this.gameData.reputationValue}}</p>\n\n      </div>\n\n  </div>\n\n  <p (click)=\'goToInventory()\' class="inventory"><img src="../assets/img/iconsReady/inventory.png"/></p>\n\n</div>'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\components\bottom-bar\bottom-bar.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_game_data__["a" /* GameData */]])
    ], BottomBarComponent);
    return BottomBarComponent;
}());
//# sourceMappingURL=bottom-bar.js.map

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_character_character__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopBarComponent = (function () {
    function TopBarComponent(navCtrl, novParams, storage) {
        this.navCtrl = navCtrl;
        this.novParams = novParams;
        this.storage = storage;
    }
    TopBarComponent.prototype.goToCharacterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_character_character__["a" /* CharacterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('chapNum'), 
        __metadata('design:type', Object)
    ], TopBarComponent.prototype, "chapterNumber", void 0);
    TopBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'top-bar',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\components\top-bar\top-bar.html"*/'<div class="chapterHeader">\n\n  <div class="settings"></div>\n\n  <p class="thirdColor">Capitolo <span class="primaryColor">{{chapterNumber}}</span></p>\n\n  <div (click)=\'goToCharacterPage()\' class="topRightMenu"></div>\n\n</div>'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\components\top-bar\top-bar.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
    ], TopBarComponent);
    return TopBarComponent;
}());
//# sourceMappingURL=top-bar.js.map

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackBarComponent = (function () {
    function BackBarComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BackBarComponent.prototype.back = function () {
        console.log('clicked back');
        this.navCtrl.pop();
    };
    BackBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'back-bar',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\components\back-bar\back-bar.html"*/'<div (click)=\'back()\' class="topRightBack"></div>'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\components\back-bar\back-bar.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], BackBarComponent);
    return BackBarComponent;
}());
//# sourceMappingURL=back-bar.js.map

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_data__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_fight_fight__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChoicesComponent = (function () {
    function ChoicesComponent(gameData, storage, navCtrl) {
        this.gameData = gameData;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.fightPage = __WEBPACK_IMPORTED_MODULE_4__pages_fight_fight__["a" /* FightPage */];
        console.log('Hello Choices Component');
    }
    ChoicesComponent.prototype.ionViewDidLoad = function (chapterNumber) {
        //this.isThereAChoice();
        //this.gameData.getJsonData(this.chapterNumber)
    };
    ChoicesComponent.prototype.acquireObject = function (itemName) {
        this.storage.set("acquired" + itemName, true);
    };
    ChoicesComponent.prototype.choice1Function = function () {
        console.log('choice function 1');
        //check if something is aquired with choice 1 add it as aquired
        if (this.newItem[0] = 1) {
            console.log("item acquired with choice 2 item= " + this.newItem[1]);
            this.storage.set("acquired" + this.newItem[1], true);
        }
        //check if some skill is itemAquired
        if (this.newSkill[0] = 1) {
            this.storage.set(this.newSkill[1], true);
        }
        //this.gameData.getJsonData(this.goTo1);
        if (this.goTo1 == "Fight") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_fight_fight__["a" /* FightPage */], {
                fightParams: this.fightParams
            });
        }
        else {
            this.storage.set("chapter", this.goTo1);
            this.gameData.getJsonData(this.goTo1);
        }
    };
    ChoicesComponent.prototype.choice2Function = function () {
        //console.log('choice function 2');
        if (this.newItem[0] = 2) {
            console.log('choice function 2 new item');
            this.storage.set("acquired" + this.newItem[1], true);
        }
        if (this.newSkill[0] = 2) {
            console.log('choice function 2 new skill');
            this.storage.set(this.newSkill[1], true);
        }
        if (this.goTo2 == "Fight") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_fight_fight__["a" /* FightPage */], {
                fightParams: this.fightParams
            });
        }
        else {
            //console.log('choice function 2');
            this.storage.set("chapter", this.goTo2);
            this.gameData.getJsonData(this.goTo2);
        }
    };
    ChoicesComponent.prototype.choice3Function = function () {
        console.log('choice function 3');
        if (this.newItem[0] = 3) {
            this.storage.set("acquired" + this.newItem[1], true);
        }
        if (this.newSkill[0] = 3) {
            this.storage.set(this.newSkill[1], true);
        }
        if (this.goTo3 == "Fight") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_fight_fight__["a" /* FightPage */], {
                fightParams: this.fightParams
            });
        }
        else {
            this.storage.set("chapter", this.goTo3);
            this.gameData.getJsonData(this.goTo3);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('chapNum'), 
        __metadata('design:type', Object)
    ], ChoicesComponent.prototype, "chapterNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('choice1'), 
        __metadata('design:type', Object)
    ], ChoicesComponent.prototype, "choice1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('choice2'), 
        __metadata('design:type', Object)
    ], ChoicesComponent.prototype, "choice2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('choice3'), 
        __metadata('design:type', Object)
    ], ChoicesComponent.prototype, "choice3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('goTo1'), 
        __metadata('design:type', Object)
    ], ChoicesComponent.prototype, "goTo1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('goTo2'), 
        __metadata('design:type', Object)
    ], ChoicesComponent.prototype, "goTo2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('goTo3'), 
        __metadata('design:type', Object)
    ], ChoicesComponent.prototype, "goTo3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('itemAcquired'), 
        __metadata('design:type', Object)
    ], ChoicesComponent.prototype, "newItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('skillAcquired'), 
        __metadata('design:type', Object)
    ], ChoicesComponent.prototype, "newSkill", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])('fightParams'), 
        __metadata('design:type', Object)
    ], ChoicesComponent.prototype, "fightParams", void 0);
    ChoicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'choices',template:/*ion-inline-start:"C:\Users\user\Documents\app_project\bookgame\src\components\choices\choices.html"*/'<div class="choicesContainer">\n\n  <div class="choiceDiv" *ngIf="this.goTo1 !== undefined">\n\n      <button class="choiceButton" (click)=\'choice1Function()\'>{{this.choice1}}</button>\n\n  </div>\n\n  <div class="choiceDiv" *ngIf="this.goTo2 !== undefined">\n\n      <button class="choiceButton" (click)=\'choice2Function()\'>{{this.choice2}}</button>\n\n    </div>\n\n  <div class="choiceDiv" *ngIf="this.goTo3 !== undefined">\n\n      <button class="choiceButton" (click)=\'choice3Function()\'>{{this.choice3}}</button>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Users\user\Documents\app_project\bookgame\src\components\choices\choices.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3__providers_game_data__["a" /* GameData */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChoicesComponent);
    return ChoicesComponent;
}());
//# sourceMappingURL=choices.js.map

/***/ })

},[547]);
//# sourceMappingURL=main.js.map