import { Component, inject } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import cartInterface from 'src/app/interface/cart.interface';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
})
export class ShoppingListsComponent {
  private productService = inject(ShoppingService);

  get carts(): cartInterface[] {
    return this.productService.carts;
  }

  deleteCart(id: number): void {
    this.productService.deleteProductCart(id);
  }

  addQuantityProduct(id: number): void {
    this.productService.addQuantityCart(id);
  }

  resQuantityProduct(id: number): void {
    this.productService.resQuantityCart(id);
  }
}
