import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Basico';
  fullName: string = 'Kendra Contreras Saenz';
  age: number = 27;
  count: number = 0;
  numero: number = 0;

  addCount() {
    this.count = this.count + 1;
  }
  resCount() {
    this.count = this.count - 1;
  }

  reciveNumber($event: number) {
    this.numero = $event;
  }
}
