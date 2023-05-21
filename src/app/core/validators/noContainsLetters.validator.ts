import { AbstractControl, ValidatorFn } from '@angular/forms';

export function noLettersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;

    if (value && /[a-zA-Z]/.test(value)) {
      return { noLetters: true };
    }

    return null;
  };
}
