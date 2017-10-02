import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';

import { BottomBarComponent } from '../components/bottom-bar/bottom-bar';
import { TopBarComponent } from '../components/top-bar/top-bar';
import { BackBarComponent } from '../components/back-bar/back-bar';
import { ChoicesComponent } from '../components/choices/choices';

import { GameData } from '../providers/game-data';

import { HomePage } from '../pages/home/home';
import { CreditsPage } from '../pages/credits/credits';
import { RulesPage } from '../pages/rules/rules';
import { ChooseCharacterPage } from '../pages/choose-character/choose-character';
import { ChooseSkillsPage } from '../pages/choose-skills/choose-skills';
import { Cap1Page } from '../pages/cap1/cap1';
import { CharacterPage } from '../pages/character/character';
import { FightPage } from '../pages/fight/fight';
import { WinAlertPage } from '../pages/win-alert/win-alert';
import { LoseAlertPage } from '../pages/lose-alert/lose-alert';
import { InventoryPage } from '../pages/inventory/inventory';
import { LairPage } from '../pages/lair/lair';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    BottomBarComponent,
    TopBarComponent,
    BackBarComponent,
    ChoicesComponent,
    HomePage,
    CreditsPage,
    RulesPage,
    ChooseCharacterPage,
    ChooseSkillsPage,
    Cap1Page,
    CharacterPage,
    FightPage,
    WinAlertPage,
    LoseAlertPage,
    InventoryPage,
    LairPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreditsPage,
    RulesPage,
    ChooseCharacterPage,
    ChooseSkillsPage,
    Cap1Page,
    CharacterPage,
    FightPage,
    WinAlertPage,
    LoseAlertPage,
    InventoryPage,
    LairPage,
    SettingsPage
  ],
  providers: [
    {
    provide: ErrorHandler, 
    useClass: IonicErrorHandler,
    },
    Storage,
    GameData
    ]
})
export class AppModule {}
