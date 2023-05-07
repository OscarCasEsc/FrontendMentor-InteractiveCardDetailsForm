import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.scss'],
})
export class CardFrontComponent {
  @Input() name: string = 'Oscar Castro Escobar';
  @Input() cardNumber: string = '4482 4565 1435 4844';
  @Input() expiration: string = '02/23';
}
