import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  form!: FormGroup;
  constructor() {
    this.form = new FormGroup({
      cardName: new FormControl('', Validators.required),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
      expMonth: new FormControl('', Validators.required),
      expYear: new FormControl('', Validators.required),
      cvc: new FormControl('', Validators.required),
    });
  }

  showErrorMsg(formName: string, formName2?: string): boolean {
    if (!formName2) {
      return (
        this.form.controls[formName].invalid &&
        (this.form.controls[formName].dirty ||
          this.form.controls[formName].touched)
      );
    }
    return (
      (this.form.controls[formName].invalid &&
        (this.form.controls[formName].dirty ||
          this.form.controls[formName].touched)) ||
      (this.form.controls[formName2].invalid &&
        (this.form.controls[formName2].dirty ||
          this.form.controls[formName2].touched))
    );
  }
}
