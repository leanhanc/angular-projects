import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { delay, filter, scan } from 'rxjs';
import { MathValidators } from '../math-validators';

@Component({
	selector: 'app-equation',
	templateUrl: './equation.component.html',
	styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
	constructor() {}

	secondsPerSolution = 0;
	mathForm = new FormGroup(
		{
			a: new FormControl(this.randomNumber()),
			b: new FormControl(this.randomNumber()),
			answer: new FormControl(''),
		},
		[MathValidators.addition('answer', 'a', 'b')] // form automatically passed
	);

	get a() {
		return this.mathForm.value.a;
	}

	get b() {
		return this.mathForm.value.b;
	}

	randomNumber() {
		return Math.floor(Math.random() * 10);
	}

	ngOnInit(): void {
		this.mathForm.statusChanges
			.pipe(
				filter((val) => val === 'VALID'),
				delay(250),
				scan(
					(acc) => {
						return {
							numberSolved: acc.numberSolved + 1,
							startTime: acc.startTime,
						};
					},
					{
						numberSolved: 0,
						startTime: new Date(),
					}
				)
			)
			.subscribe(({ numberSolved, startTime }) => {
				this.secondsPerSolution =
					(new Date().getTime() - startTime.getTime()) / numberSolved;
				this.mathForm.patchValue({
					a: this.randomNumber(),
					b: this.randomNumber(),
					answer: '',
				});
			});
	}
}
