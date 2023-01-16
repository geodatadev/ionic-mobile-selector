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
	@Output() imsChange = new EventEmitter;

	constructor() { 
	}

	ngOnInit() { 
		
	}

	// TODO comentar
	change(e: any) {

		this.imsChange.emit(e);
	}

}
