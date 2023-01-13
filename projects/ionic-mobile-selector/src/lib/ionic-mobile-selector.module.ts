import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ImsPageComponent } from './components/ims-page/ims-page.component';
import { ImsSelectorComponent } from './components/ims-selector/ims-selector.component';
import { IonicMobileSelectorComponent } from './ionic-mobile-selector.component';

@NgModule({
	declarations: [
		IonicMobileSelectorComponent,
		ImsPageComponent,
		ImsSelectorComponent
	],
	imports: [
		IonicModule,
		CommonModule 
	],
	exports: [
		IonicMobileSelectorComponent
	]
})
export class IonicMobileSelectorModule { }
