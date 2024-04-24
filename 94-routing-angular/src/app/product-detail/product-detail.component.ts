import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  products: Product[] = productsList;
  loading: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.route.params.subscribe((params) => {
        let id = params['productId'];
        this.product = this.products.find((product) => product.id == id);
        this.loading = false;
      });
    }, 1500);
  }

  // ngOnInit(): void {
  //   this.route.params.subscribe((params) => {
  //     let id = params['productId'];
  //     this.product = this.products.find((product) => product.id == id);
  //   });
  // }
}
