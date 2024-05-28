import { Component, OnInit, computed, effect, signal } from '@angular/core';
import cartInterface from 'src/app/interface/cart.interface';
import productInterface from 'src/app/interface/product.iterface';
import productData from 'src/app/data/product.data';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
})
export class VariablesComponent implements OnInit {
  numero1 = signal(5);
  numero2 = signal(10);
  sumaNumero = computed(() => this.numero1() + this.numero2());

  name = signal('kendra');
  surname = signal('Contreras');

  names = computed(() => `${this.name()} ${this.surname()}`);

  products: productInterface[] = [];
  cart = signal<cartInterface[]>([]);

  // constructor() {
  //   effect(() => this.sumaNumero());
  // }

  setNumero1(num: number) {
    // this.numero1.set(num);
    this.numero1.update((value) => value + num);
  }

  setNumero2(num: number) {
    this.numero2.update((value) => value + num);
  }

  setNombre(name: string) {
    this.name.set(name);
  }
  //  -------------------------------------------------------------------
  ngOnInit(): void {
    this.products = productData;
  }

  handleAddProductToCart(product: productInterface) {
    const productItem = this.cart().find((item) => item.id === product.id);

    if (productItem) {
      this.cart.update((value) =>
        value.map((item) =>
          item.id === productItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.cart.update((value) => [...value, { ...product, quantity: 1 }]);
    }
  }

  handleDeleteProductToCart(id: number) {
    this.cart.update((value) => value.filter((item) => item.id !== id));
  }

  handleAddQuantityToProduct(id: number) {
    this.cart.update((value) =>
      value.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  handleRestQuantityToProduct(id: number) {
    this.cart.update((value) =>
      value.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity < 2 ? 1 : item.quantity - 1 }
          : item
      )
    );
  }
}
