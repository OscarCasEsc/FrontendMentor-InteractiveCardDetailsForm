import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../card.service';
import { noLettersValidator } from '../core/validators/noContainsLetters.validator';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  form!: FormGroup;
  constructor(private cardSevice: CardService) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', [
        Validators.required,
        noLettersValidator(),
        Validators.pattern('([0-9]{4}\\s){3}[0-9]{4}'),
      ]),
      expMonth: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(12),
      ]),
      expYear: new FormControl('', [
        Validators.required,
        Validators.min(23),
        Validators.max(99),
      ]),
      cvc: new FormControl('', [
        Validators.required,
        Validators.min(100),
        Validators.max(999),
      ]),
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

  nameChange() {
    this.cardSevice.setFormValue({ name: this.form.controls['name'].value });
  }
  numberChange() {
    this.cardSevice.setFormValue({
      number: this.form.controls['number'].value,
    });
  }

  cvcChange() {
    this.cardSevice.setFormValue({ cvc: this.form.controls['cvc'].value });
  }
  expirationChange() {
    const expMonth = this.form.controls['expMonth'].value;
    const expYear = this.form.controls['expYear'].value;
    console.log('variables', expMonth, expYear);
    if (expMonth && expYear && expMonth == '' && expYear == '') {
      this.cardSevice.setFormValue({ expiration: '' });
    } else if (expMonth && expYear && expMonth != '' && expYear != '') {
      this.cardSevice.setFormValue({ expiration: `${expMonth}/${expYear}` });
    } else {
      this.cardSevice.setFormValue({
        expiration: `${expMonth != null ? expMonth : ''}${
          expYear != null ? expYear : ''
        }`,
      });
    }
  }

  getExpMonth() {
    this.form.controls['expMonth'];
  }

  getExpYear() {
    this.form.controls['expYear'];
  }
}
