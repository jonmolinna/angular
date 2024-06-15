import { Component, inject } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
})
export class ShoppingComponent {
  private productService = inject(ShoppingService);

  get totalPrice(): number {
    return this.productService.totalPrice;
  }

  get totalProducts(): number {
    return this.productService.totalProducts;
  }
}
