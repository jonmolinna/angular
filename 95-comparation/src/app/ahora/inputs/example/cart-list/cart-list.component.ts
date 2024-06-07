import { Component, EventEmitter, Input, Output } from '@angular/core';
import cartInterface from 'src/app/interface/cart.interface';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  @Input({ required: true }) carts: cartInterface[] = [];
  @Output() addQuantityEvent = new EventEmitter<number>();
  @Output() restQuantityEvent = new EventEmitter<number>();
  @Output() deleteCartEvent = new EventEmitter<number>();

  addQuantityToCart(id: number) {
    this.addQuantityEvent.emit(id);
  }

  restQuantityToCart(id: number) {
    this.restQuantityEvent.emit(id);
  }

  deleteCart(id: number) {
    this.deleteCartEvent.emit(id);
  }
}
