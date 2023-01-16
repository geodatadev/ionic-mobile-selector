import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImsPageComponent } from '../ims-page/ims-page.component';

@Component({
	selector: 'lib-ims-selector',
	templateUrl: './ims-selector.component.html',
	styleUrls: ['./ims-selector.component.scss'],
})
export class ImsSelectorComponent implements OnInit {

	@Input() public placeholder?:string;
	@Input() public singleSelection?:boolean;
	@Input() public list: any;
	@Output() imsChange = new EventEmitter();

	constructor(
		private modalCtrl: ModalController
	) {}

	ngOnInit() {

	}

	/**
	 * Abre o modal
	 */
	async openModal() {

		const modal: any = await this.modalCtrl.create(({
			component: ImsPageComponent,
			componentProps: {
				list: this.list,
				singleSelection: this.singleSelection
			}
		}));


		modal.onDidDismiss().then((info: any) => {
						
			if (info.data) {

				this.imsChange.emit(info.data);
			}

		})

		await modal.present();
	}

}
