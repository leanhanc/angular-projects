import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  authForm = new FormGroup(
    {
      userName: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    {
      validators: [this.matchPassword.validate],
    }
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (
      !this.authForm ||
      !this.authForm.value ||
      !this.authForm.value.userName ||
      !this.authForm.value.password ||
      !this.authForm.value.passwordConfirmation ||
      this.authForm.invalid
    ) {
      return;
    }
    this.authService
      .signup({
        userName: this.authForm.value.userName,
        password: this.authForm.value.password,
        passwordConfirmation: this.authForm.value.passwordConfirmation,
      })
      .subscribe({
        next: (response) => {
          // Redirect
        },
        error: (err) => {
          if (!err.status) {
            this.authForm.setErrors({ noConnection: true });
            return;
          }
          this.authForm.setErrors({ unknownError: true });
        },
      });
  }

  ngOnInit(): void {}
}
