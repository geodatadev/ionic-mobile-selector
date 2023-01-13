import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SelectableGeodataComponent, SelectableGeodataModule } from 'projects/selectable-geodata/src/public-api';
import { IonicMobileSelectorModule } from 'projects/ionic-mobile-selector/src/public-api';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicMobileSelectorModule,
    // SelectableGeodataModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
