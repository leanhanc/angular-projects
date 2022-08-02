import { AbstractControl } from '@angular/forms';

export class MathValidators {
	static addition(target: string, sourceOne: string, sourceTwo: string) {
		return (form: AbstractControl) => {
			const sum = form.value[target];
			const firstNum = form.value[sourceOne];
			const secondNum = form.value[sourceTwo];

			if (firstNum + secondNum === Number(sum)) {
				return null;
			}

			return { addion: true };
		};
	}
}
