import { Component } from '@angular/core';
import { productsList } from './products.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products = productsList;
}
