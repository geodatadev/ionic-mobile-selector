import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicMobileSelectorComponent } from 'projects/ionic-mobile-selector/src/public-api';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	public placeholder: string;
	public labelSelectAll: string;
	public selected: any;
	public list: any = [];
	public singleSelection:boolean;
	public hideDismiss:boolean;

	@ViewChild('mySelector') mySelector!: IonicMobileSelectorComponent;

	constructor(
		private modalCtrl: ModalController
	) {
		this.singleSelection = true;
		this.hideDismiss = true;
		this.placeholder = "Selecione um produtor";
		this.labelSelectAll = "Selecionar varios euris";


		for (let i = 0; i < 50; i++) {
			this.list.push({
				id: i+1,
				name: `Geodata - ${i}`
			});

		}

	}

	ngOnInit() {

	}

	ngAfterViewInit() {

		// this.mySelector.open();
	}

	clearS() {

		this.mySelector.clear();

	}

	imsChange(dataSelected: any) {


	}

	// async openModal() {

	// 	const modal: any = await this.modalCtrl.create(({
	// 		component: SelectableGeodataComponent,
	// 		componentProps: {
	// 			list: this.list,
	// 			singleSelect: false,
	// 			// canDismiss: false
	// 		},
	// 		// backdropDismiss: false
	// 	}));


	// 	modal.onDidDismiss().then((info: any) => {

	// 		if (info.data) {

	// 			this.selected = info.data;
	// 		}

	// 	})

	// 	await modal.present();
	// }

}
