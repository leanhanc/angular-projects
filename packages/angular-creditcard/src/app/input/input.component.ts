import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
	constructor() {}

	@Input() control!: FormControl | null;
	@Input() label = '';

	checkForErrors = () => {
		return (
			this.control &&
			this.control.dirty &&
			this.control.touched &&
			this.control.errors
		);
	};

	ngOnInit(): void {}
}
