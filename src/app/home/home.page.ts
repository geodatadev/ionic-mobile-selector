import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectableGeodataComponent } from 'projects/selectable-geodata/src/public-api';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	public selected: any;

	public list: any = [
	];

	constructor(
		private modalCtrl: ModalController
	) { 

		for (let i = 0; i < 50; i++) {
			this.list.push({
				id: i+1,
				name: `Geodata - ${i}`
			});
			
		}

	}

	imsChange(dataSelected: any) {

		console.log('dataSelected', dataSelected);

	}

	async openModal() {

		const modal: any = await this.modalCtrl.create(({
			component: SelectableGeodataComponent,
			componentProps: {
				list: this.list,
				singleSelect: false
			}
		}));


		modal.onDidDismiss().then((info: any) => {

			if (info.data) {				
				
				this.selected = info.data;
			}

		})

		await modal.present();
	}

}
