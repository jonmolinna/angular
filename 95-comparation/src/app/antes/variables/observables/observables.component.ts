import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

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
  }
}
