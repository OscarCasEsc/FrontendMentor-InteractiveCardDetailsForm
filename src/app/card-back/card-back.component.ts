import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { FormChange } from '../core/models/formChange.model';

@Component({
  selector: 'app-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.scss'],
})
export class CardBackComponent implements OnInit {
  cvc: string;
  constructor(public cardService: CardService) {
    this.cvc = '000';
  }

  ngOnInit(): void {
    this.cardService.getForm$().subscribe((form: FormChange) => {
      const { cvc } = form;
      console.log('cvc', cvc);
      cvc ? (this.cvc = cvc) : (this.cvc = '');
    });
  }
}
