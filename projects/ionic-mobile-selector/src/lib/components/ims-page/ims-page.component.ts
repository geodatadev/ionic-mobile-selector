import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Platform } from '@ionic/angular';

@Component({
	selector: 'lib-ims-page',
	templateUrl: './ims-page.component.html',
	styleUrls: ['./ims-page.component.scss'],
})
export class ImsPageComponent implements OnInit {

	public searchInput: string = '';
	public list: any[];
	public data: any;
	public singleSelection?: any;
	public hideDismiss?: boolean;
	public labelSelectAll: string = "Selecionar todos";

	constructor(
		private modalCtrl: ModalController,
		private navParams: NavParams,
		private platform: Platform
	) {

		this.singleSelection = this.navParams.get('singleSelection');

		this.list = [];
		this.list = this.navParams.get('list');
		
		this.hideDismiss = this.navParams.get('canDismiss');

		if(this.hideDismiss){
			
			this.platform.backButton.subscribeWithPriority(10, () => {
				return
			  })
		}
	}
	
	ngOnInit() {
		
		if(!this.singleSelection && !this.list.find(item => item.id == 'all')) {

			let optionAll = {
				id: 'all',
				name: this.labelSelectAll,
				hide: false,
				is_selected:this.list.filter(item => item.is_selected).length == this.list.length
			}

			this.list = [optionAll, ...this.list];

		}		
	}

	ngAfterViewInit(){}

	/**
	 * Atualiza lista ao digitar o input
	 * @param e 
	 */
	search(e: any) {

		const key = e.target.value.toLowerCase();

		for (let i = 0; i < this.list.length; i++) {

			let sanitizedTitle = this.removeAccents(this.list[i].name).toLowerCase();
			let sanitizedInput = this.removeAccents(key).toLowerCase();

			if (sanitizedInput) {

				if (!sanitizedTitle.includes(sanitizedInput)) {
					this.list[i].hide = true;
				} else {
					this.list[i].hide = false;
				}
			} else {
				this.list[i].hide = false;
			}

		}

	}

	removeAccents(str: string): string {
		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	}

	/**
	 * Coloca todas opções como selecionada
	 */
	selectAll() {

		this.list[0].is_selected = !this.list[0].is_selected;

		for (let index = 0; index < this.list.length; index++) {
			this.list[index].is_selected = this.list[0].is_selected;
		}
	}

	/**
	 * Aplica ação de selecionar em um determinado item
	 * 
	 * @param index 
	 */
	select(index: number) {
		
		if (this.singleSelection) {
			this.list.forEach(item => item.is_selected = false);
			this.list[index].is_selected = !this.list[index].is_selected;

			this.dismiss(this.list[index])
		} else {

			if(index) {
				this.list[index].is_selected = !this.list[index].is_selected;

			} else {
				
				this.selectAll();
			}
		}

	}

	/**
	 * Fechar modal enviando informações
	 * @param data 
	 * @returns 
	 */
	dismiss(data: any = null, forceClose: boolean = false) {

		if (!data && !forceClose) {

			let dataSelected = this.list.filter((item: any) => item.is_selected);
			return this.modalCtrl.dismiss(dataSelected);

		}

		return this.modalCtrl.dismiss(data);
	}
}
