import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';

import { HeaderChaptersComponent } from '../components/header-chapters/header-chapters';
import { BottomBarComponent } from '../components/bottom-bar/bottom-bar';

import { MySettings } from './mySettings';
import { BookNavigation } from '../providers/book-navigation';

import { HomePage } from '../pages/home/home';
import { CreditsPage } from '../pages/credits/credits';
import { RulesPage } from '../pages/rules/rules';
import { ChooseCharacterPage } from '../pages/choose-character/choose-character';
import { ChooseSkillsPage } from '../pages/choose-skills/choose-skills';
import { Cap1Page } from '../pages/cap1/cap1';
import { CharacterPage } from '../pages/character/character';
//import { FightPage } from '../pages/fight/fight';
import { InventoryPage } from '../pages/inventory/inventory';
import { LairPage } from '../pages/lair/lair';

@NgModule({
  declarations: [
    MyApp,
    HeaderChaptersComponent,
    BottomBarComponent,
    HomePage,
    CreditsPage,
    RulesPage,
    ChooseCharacterPage,
    ChooseSkillsPage,
    Cap1Page,
    CharacterPage,
    //FightPage,
    InventoryPage,
    LairPage,
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
    //FightPage,
    InventoryPage,
    LairPage,
  ],
  providers: [
    {
    provide: ErrorHandler, 
    useClass: IonicErrorHandler,
    },
    Storage, 
    BookNavigation,
    ]
})
export class AppModule {}
