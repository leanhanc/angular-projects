import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
	override setValue(value: string | null, options: any) {
		if (!value) {
			super.setValue('', { ...options, emitModelToViewChange: true });
			return;
		}
		// Disregard anything that is not a number using the current value
		if (value.match(/[^0-9|\/]/gi)) {
			super.setValue(this.value, { ...options, emitModelToViewChange: true });
			return;
		}
		if (value.length > 5) {
			super.setValue(this.value, { ...options, emitModelToViewChange: true });
			return;
		}

		// Compare input value with current value on input
		if (value.length === 2 && this.value.length === 3) {
			super.setValue(value, { ...options, emitModelToViewChange: true });
			return;
		}

		if (value.length === 2) {
			super.setValue(value + '/', { ...options, emitModelToViewChange: true });
			return;
		}

		super.setValue(value, { ...options, emitModelToViewChange: true });
	}
}
