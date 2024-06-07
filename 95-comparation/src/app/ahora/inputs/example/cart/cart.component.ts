import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  @Input({ required: true }) quantityProduct: number = 0;
  @Input({ required: true }) priceTotalCart: number = 0;
}
