import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
})
export class SimpleComponent {
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
}
