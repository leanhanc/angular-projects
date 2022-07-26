import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
	constructor() {}

	// Properties
	@Output() submitted = new EventEmitter<string>();
	term = '';

	// Hooks
	ngOnInit(): void {}

	// Methods
	onInput(value: string) {
		this.term = value;
	}
	onFormSubmit(event: SubmitEvent) {
		event.preventDefault();
		this.submitted.emit(this.term);
	}
}
