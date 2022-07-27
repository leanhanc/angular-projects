import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
	selector: 'app-card-form',
	templateUrl: './card-form.component.html',
	styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
	constructor() {}

	cardForm = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.minLength(3)]),
		cardNumber: new FormControl('', [
			Validators.required,
			Validators.minLength(16),
			Validators.maxLength(16),
		]),
		epxiration: new DateFormControl('', [
			Validators.required,
			Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
		]),
		securityCode: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(3),
		]),
	});

	onSubmit() {}

	onReset() {
		this.cardForm.reset();
	}

	ngOnInit(): void {}
}
