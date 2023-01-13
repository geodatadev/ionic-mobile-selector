import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsmpPageRoutingModule } from './asmp-routing.module';

import { AsmpPage } from './asmp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsmpPageRoutingModule
  ],
  declarations: [AsmpPage]
})
export class AsmpPageModule {}
