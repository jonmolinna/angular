import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import productData from 'src/app/data/product.data';
import cartInterface from 'src/app/interface/cart.interface';
import productInterface from 'src/app/interface/product.iterface';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
})
export class ObservablesComponent implements OnInit {
  private number1: BehaviorSubject<any> = new BehaviorSubject<any>(5);
  private number2: BehaviorSubject<any> = new BehaviorSubject<any>(10);
  private name: BehaviorSubject<any> = new BehaviorSubject<any>(
    'Kendra Contreras'
  );

  sumNumber: number = 0;
  nombreModificado: string = '';

  numeroObservable1: Observable<any> = this.number1.asObservable();
  private numeroSubscription1?: Subscription;

  numeroObservable2: Observable<any> = this.number2.asObservable();
  private numeroSubscription2?: Subscription;

  nombreObservable: Observable<any> = this.name.asObservable();
  private nombreSubscription?: Subscription;

  // ------------------------------------------------------------------------
  private products: BehaviorSubject<productInterface[]> =
    new BehaviorSubject<any>([]);

  private carts: BehaviorSubject<cartInterface[]> = new BehaviorSubject<any>(
    []
  );
  // ------------------------------------------------------------------------

  get numberOne(): any {
    return this.number1.getValue();
  }

  set numberOne(value: any) {
    this.number1.next(value);
  }

  get numberTwo(): any {
    return this.number2.getValue();
  }

  set numberTwo(value: any) {
    this.number2.next(value);
  }

  get nombre(): any {
    return this.name.getValue();
  }

  set nombre(value: any) {
    this.name.next(value);
  }

  cambiarNumeroOne(data: number) {
    this.numberOne = this.numberOne + data;
  }

  cambiarNumeroTwo(data: number) {
    this.numberTwo = this.numberTwo + data;
  }

  cambiarNombre(data: string) {
    this.nombre = data;
  }

  // ---------------------------------------------------------------------
  get getProducts(): productInterface[] {
    return this.products.getValue();
  }

  get getCart(): cartInterface[] {
    return this.carts.getValue();
  }

  set setCart(value: any) {
    this.carts.next(value);
  }

  get getQuantityProductsToCart(): number {
    return this.getCart.reduce((number, obj) => number + obj.quantity, 0);
  }

  get getPriceTotalCart(): number {
    return this.getCart.reduce(
      (number, obj) => number + obj.quantity * obj.price,
      0
    );
  }
  // ---------------------------------------------------------------------

  ngOnInit(): void {
    this.numeroSubscription1 = this.numeroObservable1.subscribe((newNumber) => {
      this.sumNumber = this.numberOne + this.numberTwo;
    });

    this.numeroSubscription2 = this.numeroObservable2.subscribe((newNumber) => {
      this.sumNumber = this.numberOne + this.numberTwo;
    });

    this.nombreSubscription = this.nombreObservable.subscribe((newName) => {
      this.nombreModificado = this.nombre;
    });

    // -------------------------------------------------
    this.products.next(productData);
  }

  handleAddProductToCart(product: productInterface) {
    const cart = this.getCart.find((item) => item.id === product.id);

    if (cart) {
      this.setCart = this.getCart.map((item) =>
        item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      this.setCart = [...this.getCart, { ...product, quantity: 1 }];
    }
  }

  addStockProduct(product: productInterface) {
    const cart = this.getCart.find((item) => item.id === product.id);

    if (cart) {
      this.setCart = this.getCart.map((item) =>
        item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
  }

  restStockProduct(product: productInterface) {
    const cart = this.getCart.find((item) => item.id === product.id);

    if (cart) {
      this.setCart = this.getCart.map((item) =>
        item.id === cart.id
          ? { ...item, quantity: item.quantity < 2 ? 1 : item.quantity - 1 }
          : item
      );
    }
  }

  deleteProductToCart(id: number) {
    this.setCart = this.getCart.filter((item) => item.id !== id);
  }
}
