import { Injectable } from '@angular/core';

import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (
    formControl: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> => {
    const { value } = formControl;

    return this.authService.usernameAvailable(value).pipe(
      map((_value) => {
        // If there is a value value we return null (it is a 200 code response)
        return null;
      }),
      catchError((err) => {
        // Catch error must return a new observable
        if (err.error.username) {
          // Creates an observable and emits the passed value immediatelly
          return of({
            nonUniqueUserName: true,
          });
        }

        return of({ noConnection: false });
      })
    );
  };
}
