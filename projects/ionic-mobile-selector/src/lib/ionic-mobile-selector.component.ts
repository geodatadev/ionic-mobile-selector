import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'ionic-mobile-selector',
	templateUrl: './ionic-mobile-selector.component.html',
	styleUrls: ['./ionic-mobile-selector.component.scss'],
})
export class IonicMobileSelectorComponent implements OnInit {

	@Input() list: any;
	@Input() placeholder?:string;
	@Input() singleSelection?:boolean;
	public selectedText: string = '';
	@Output() imsChange = new EventEmitter;


	constructor() { 
	}

	ngOnInit() { 
		
	}

	/**
	 * Função para mostrar itens selecionados e emití-los
	 * @param data 
	 */
	public change(data: any) {

		if (data.length && !this.singleSelection) {

			this.selectedText = '';
			
			data.forEach((item: any) => {
				this.selectedText += `${item.name}, `
			});

			this.selectedText = this.selectedText.slice(0, this.selectedText.length - 2);
			this.imsChange.emit(data);

		} else {
			this.selectedText = data.name
			this.imsChange.emit(data);
		}

	}

	/**
	 * Limpa o seletor
	 */
	public clear() {
		
		if(this.list && this.list.length) {
			
			for (let i = 0; i < this.list.length; i++) {
				
				this.list[i].is_selected = false;
				this.list[i].hide = false;
				
			}
			
		}

		this.selectedText = '';

	}

}
