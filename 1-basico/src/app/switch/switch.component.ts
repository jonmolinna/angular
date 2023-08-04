import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {
  dia: number = 10;

  add() {
    if (this.dia >= 7) {
      this.dia = 7;
    } else {
      this.dia += 1;
    }
  }
  restar() {
    if (this.dia <= 1) {
      this.dia = 1;
    } else {
      this.dia -= 1;
    }
  }
}
