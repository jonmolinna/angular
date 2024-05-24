import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
})
export class VariablesComponent {
  numero1 = signal(5);
  numero2 = signal(10);
  sumaNumero = computed(() => this.numero1() + this.numero2());

  name = signal('kendra');
  surname = signal('Contreras');

  names = computed(() => `${this.name()} ${this.surname()}`);

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
}
