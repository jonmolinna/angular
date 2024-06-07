import { Component, OnInit } from '@angular/core';
import productData from 'src/app/data/product.data';
import cartInterface from 'src/app/interface/cart.interface';
import productInterface from 'src/app/interface/product.iterface';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit {
  products: productInterface[] = [];
  carts: cartInterface[] = [];

  ngOnInit(): void {
    this.products = productData;
  }

  addCart(product: productInterface) {
    const cart = this.carts.find((item) => item.id === product.id);
    if (cart) {
      this.carts = this.carts.map((item) =>
        item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      this.carts = [...this.carts, { ...product, quantity: 1 }];
    }
  }

  addQuantityCart(id: number) {
    const cart = this.carts.find((item) => item.id === id);
    if (cart) {
      this.carts = this.carts.map((item) =>
        item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
  }

  restQuantityCart(id: number) {
    const cart = this.carts.find((item) => item.id === id);
    if (cart) {
      this.carts = this.carts.map((item) =>
        item.id === cart.id
          ? { ...item, quantity: item.quantity < 2 ? 1 : item.quantity - 1 }
          : item
      );
    }
  }

  deleteCart(id: number) {
    this.carts = this.carts.filter((item) => item.id !== id);
  }
  quantityProduct(): number {
    return this.carts.reduce((number, obj) => number + obj.quantity, 0);
  }

  priceTotalCart(): number {
    return this.carts.reduce(
      (number, obj) => number + obj.price * obj.quantity,
      0
    );
  }
}
