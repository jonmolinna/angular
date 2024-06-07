import { trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import productInterface from 'src/app/interface/product.iterface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  @Input({ required: true }) products: productInterface[] = [];
  @Output() newCartEvent = new EventEmitter<productInterface>();

  addNewCart(product: productInterface) {
    this.newCartEvent.emit(product);
  }
}
