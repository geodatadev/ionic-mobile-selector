import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
	selector: 'lib-ims-page',
	templateUrl: './ims-page.component.html',
	styleUrls: ['./ims-page.component.scss'],
})
export class ImsPageComponent implements OnInit {


	public searchInput: string = '';
	public list: any[];
	public data: any;
	public singleSelect?: any
	public openDismiss: boolean = false;

	constructor(
		private modalCtrl: ModalController,
		private navParams: NavParams
	) {

		this.singleSelect = this.navParams.get('one_selection');

		this.list = this.navParams.get('list');

	}

	ngOnInit() {

	}

	/**
	 * Atualiza lista ao digitar no campo de
	 * @param e 
	 */
	search(e: any) {

		const key = e.target.value.toLowerCase();

		for (let i = 0; i < this.list.length; i++) {

			if (key) {

				if (!this.list[i].name.toLowerCase().includes(key)) {
					this.list[i].hide = true;
				} else {
					this.list[i].hide = false;
				}
			} else {
				this.list[i].hide = false;
			}

		}

	}

	/**
	 * Aplica ação de selecionar em um determinado item
	 * 
	 * @param index 
	 */
	select(index: number) {

		if (this.singleSelect) {
			this.dismiss(this.list[index])
		}
		
		this.list[index].is_selected = !this.list[index].is_selected;
	}

	/**
	 * Fechar modal enviando informações
	 * @param data 
	 * @returns 
	 */
	dismiss(data: any = null, forceClose: boolean = false) {

		if (!data && !forceClose) {

			let data = this.list.filter((item: any) => item.is_selected);
			return this.modalCtrl.dismiss(data);

		}

		return this.modalCtrl.dismiss();
	}

}
