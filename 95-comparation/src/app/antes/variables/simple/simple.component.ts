import { Component, OnInit } from '@angular/core';
import productData from 'src/app/data/product.data';
import cartInterface from 'src/app/interface/cart.interface';
import productInterface from 'src/app/interface/product.iterface';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
})
export class SimpleComponent implements OnInit {
  number1: number = 5;
  number2: number = 10;
  sumNumber = this.number1 + this.number2;

  cambiarNumberOne() {
    this.number1 = this.number1 + 5;
    // this.sumNumber = this.number1 + this.number2;
  }

  cambiarNumberTwo() {
    this.number2 = this.number2 + 10;
  }

  // ---------------------------------------------------------------
  products: productInterface[] = [];
  carts: cartInterface[] = [];

  ngOnInit(): void {
    this.products = productData;
  }

  handleAddProductToCart(product: productInterface) {
    const cart = this.carts.find((item) => item.id === product.id);

    if (cart) {
      this.carts = this.carts.map((item) =>
        item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      this.carts = [...this.carts, { ...product, quantity: 1 }];
    }
  }

  addStockProduct(product: productInterface) {
    const cart = this.carts.find((item) => item.id === product.id);

    if (cart) {
      this.carts = this.carts.map((item) =>
        item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
  }

  restStockProduct(product: productInterface) {
    const cart = this.carts.find((item) => item.id === product.id);

    if (cart) {
      this.carts = this.carts.map((item) =>
        item.id === cart.id
          ? { ...item, quantity: item.quantity < 2 ? 1 : item.quantity - 1 }
          : item
      );
    }
  }

  deleteToCartProduct(id: number) {
    this.carts = this.carts.filter((item) => item.id !== id);
  }

  getProductTotal(): number {
    return this.carts.reduce((number, obj) => number + obj.quantity, 0);
  }

  getPriceTotalCart(): number {
    return this.carts.reduce(
      (number, obj) => number + obj.price * obj.quantity,
      0
    );
  }
}
