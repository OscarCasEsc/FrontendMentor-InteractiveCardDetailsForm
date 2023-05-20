import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormChange } from './core/models/formChange.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private name: string = '';
  private number: string = '';
  private cvc: number | undefined;
  private form$ = new Subject<FormChange>();
  constructor() {}

  getForm$(): Observable<FormChange> {
    return this.form$.asObservable();
  }
  setFormValue(value: any) {
    this.form$.next(value);
  }
}
