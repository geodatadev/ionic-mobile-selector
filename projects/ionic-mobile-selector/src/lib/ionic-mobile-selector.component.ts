import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'ionic-mobile-selector',
	templateUrl: './ionic-mobile-selector.component.html',
	styleUrls: ['./ionic-mobile-selector.component.scss'],
})
export class IonicMobileSelectorComponent implements OnInit {

	@ViewChild('libImsSelectorItem') private selectRef?: any;

	@Input() list: any;
	@Input() placeholder?:string;
	@Input() singleSelection?:boolean;
	@Input() hideDismiss?:boolean;
	@Input() labelSelectAll: any;
	public selectedText: string;
	@Output() imsChange = new EventEmitter;
	constructor() { 		

		this.selectedText = '';
	}

	ngOnInit() {
		
	}

	ngAfterViewInit() {
	
		
	}

	/**
	 * Função para mostrar itens selecionados e emití-los
	 * @param data 
	 */
	public change(data: any) {

		if (data.length && !this.singleSelection) {

			this.selectedText = '';

			let result = data.filter((item:any) => item.id != "all")
				.map((item: any) => {
					this.selectedText += `${item.name}, `
					return item;
				});
						
			this.selectedText = this.selectedText.slice(0, this.selectedText.length - 2);

			this.imsChange.emit( JSON.parse(JSON.stringify(result)) );

		} else {

			this.selectedText = data.name
			this.imsChange.emit(JSON.parse(JSON.stringify(data)));
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

	/**
	 * Abre o modal dinâmicamentes
	 */
	public open() {		
		this.selectRef.openModal();
	}


	public hardwareDismiss(){

	}
	

}
