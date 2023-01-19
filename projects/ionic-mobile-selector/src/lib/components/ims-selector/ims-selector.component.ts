import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { info } from 'console';
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
	public selected: string = '';

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

			this.selected = '';
						
			if (info.data && !this.singleSelection) {
				
				info.data.forEach((item:any) =>{
					this.selected += `${item.name}, `
				});
				
				this.selected = this.selected.slice(0,this.selected.length - 2);
				
				this.placeholder = '';
				
				this.imsChange.emit(info.data);
			}

			else{
				this.selected = info.data.name
				this.imsChange.emit(info.data);
			}

		})

		await modal.present();
	}

}
