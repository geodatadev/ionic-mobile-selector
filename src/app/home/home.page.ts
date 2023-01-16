import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectableGeodataComponent } from 'projects/selectable-geodata/src/public-api';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	public placeholder: string;
	public selected: any;
	public list: any = [];
	public singleSelection:boolean;

	constructor(
		private modalCtrl: ModalController
	) { 
		this.singleSelection = true;
		this.placeholder = "Selecione um produtor"

		for (let i = 0; i < 50; i++) {
			this.list.push({
				id: i+1,
				name: `Geodata - ${i}`
			});
			
		}

	}

	ngOnInit(){
		
	}

	imsChange(dataSelected: any) {

		console.log('dataSelected', dataSelected);

	}

	// async openModal() {

	// 	const modal: any = await this.modalCtrl.create(({
	// 		component: SelectableGeodataComponent,
	// 		componentProps: {
	// 			list: this.list,
	// 			singleSelect: false
	// 		}
	// 	}));


	// 	modal.onDidDismiss().then((info: any) => {

	// 		if (info.data) {				
				
	// 			this.selected = info.data;
	// 		}

	// 	})

	// 	await modal.present();
	// }

}
