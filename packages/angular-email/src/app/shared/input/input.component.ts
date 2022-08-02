import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label: string | null = null;
  @Input() control!: FormControl | null;
  @Input() inputType: string = 'text';

  constructor() {}

  checkForErrors = () => {
    return (
      this.control &&
      this.control.dirty &&
      this.control.touched &&
      this.control.errors
    );
  };
}
