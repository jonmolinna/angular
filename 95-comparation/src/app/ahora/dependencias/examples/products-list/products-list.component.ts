import { Component, OnInit, inject } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import productInterface from 'src/app/interface/product.iterface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {
  private productService = inject(ShoppingService);

  get products(): productInterface[] {
    return this.productService.products;
  }

  addProductToCart(product: productInterface) {
    this.productService.addProductCart(product);
  }
}
