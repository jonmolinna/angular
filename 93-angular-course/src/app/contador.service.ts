import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContadorService {
  private contador: number = 0;

  constructor() {}

  getNumber(): number {
    return this.contador;
  }

  setAddNumber(number: number): void {
    this.contador = this.contador + number;
  }

  setRestNumber(number: number): void {
    this.contador = this.contador - number;
  }

  setResetNumber(): void {
    this.contador = 0;
  }
}
