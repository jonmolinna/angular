import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  numero: number = 0;
  message: string = 'Message desde Home';

  recibeMessage: string = '';

  incrementar() {
    this.numero++;
  }

  decrementar() {
    this.numero--;
  }

  recibirMessage($event: string) {
    this.recibeMessage = $event;
  }
}
