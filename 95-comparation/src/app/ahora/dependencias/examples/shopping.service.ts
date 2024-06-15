import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import productData from 'src/app/data/product.data';
import cartInterface from 'src/app/interface/cart.interface';
import productInterface from 'src/app/interface/product.iterface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  products: productInterface[] = productData;
  carts: cartInterface[] = [];

  constructor() {}

  get totalPrice(): number {
    return this.carts.reduce(
      (number, obj) => number + obj.quantity * obj.price,
      0
    );
  }

  get totalProducts(): number {
    return this.carts.reduce((number, obj) => number + obj.quantity, 0);
  }

  addProductCart(product: productInterface) {
    const cart = this.carts.find((item) => item.id === product.id);

    if (cart) {
      this.carts = this.carts.map((item) =>
        item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      this.carts = [...this.carts, { ...product, quantity: 1 }];
    }
  }

  deleteProductCart(id: number): void {
    this.carts = this.carts.filter((item) => item.id !== id);
  }

  addQuantityCart(id: number): void {
    const cart = this.carts.find((item) => item.id === id);

    if (cart) {
      this.carts = this.carts.map((item) =>
        item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
  }

  resQuantityCart(id: number): void {
    const cart = this.carts.find((item) => item.id === id);

    if (cart) {
      this.carts = this.carts.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity < 2 ? 1 : item.quantity - 1 }
          : item
      );
    }
  }
}
