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
	@Input() public labelSelectAll: any;
	@Input() selectedText!: string;
	@Input() public hideDismiss?:boolean;
	@Output() imsChange = new EventEmitter();
	public data: any[]

	constructor(
		private modalCtrl: ModalController
	) {
		
		this.data = [];
	}

	ngOnInit() {
				
	}

	ngAfterViewInit(){
	}

	/**
	 * Abre o modal
	 */
	async openModal(data:any = null) {

		this.list.forEach((item: any) => {
			item.hide = false;
		})

		const modal: any = await this.modalCtrl.create(({
			component: ImsPageComponent,
			componentProps: {
				list: this.list,
				singleSelection: this.singleSelection,
				labelSelectAll:this.labelSelectAll,
				canDismiss: this.hideDismiss,
			},
			backdropDismiss: this.hideDismiss
		}));

		modal.onDidDismiss().then((info: any) => {

			if (info.data) {				

				this.imsChange.emit(info.data);
			}
		})

		await modal.present();
	}

}
