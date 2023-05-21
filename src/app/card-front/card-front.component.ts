import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { FormChange } from '../core/models/formChange.model';

@Component({
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.scss'],
})
export class CardFrontComponent implements OnInit {
  name: string;
  number: string[];
  expiration: string;
  constructor(public cardService: CardService) {
    this.name = 'Jane Appleseed';
    this.number = ['0000', '0000', '0000', '0000'];
    this.expiration = '00/00';
  }
  ngOnInit(): void {
    this.cardService.getForm$().subscribe((form: FormChange) => {
      const { name, number, expiration } = form;
      console.log(expiration);
      if (name || name == '') {
        this.name = name;
      } else if (number || number == '') {
        this.number = [];
        number.split(' ').forEach((chunk) => this.number.push(chunk));
      } else if (expiration || expiration == '') {
        this.expiration = expiration;
      }
    });
  }
}
