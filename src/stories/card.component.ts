import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-card',
  template: `<div class="card">
    <img [src]="card.imagePath" alt="user card sample image" />
    <div class="card-details">
      <span>Type</span>

      <span>{{ card.cardClass }}</span>
    </div>
    <div class="card-details">
      <span>Quantity</span>

      <span>{{ card.quantity }}</span>
    </div>
    <div class="card-details">
      <span>Price</span>

      <span>Rs.{{ card.price }}</span>
    </div>
  </div>`,
  styleUrls: ['./card.css'],
})
export default class CardComponent {
  @Input()
  card: any = null;
}
