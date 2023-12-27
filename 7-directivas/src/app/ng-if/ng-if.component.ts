import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent {
  title: string = 'Directiva ngIf';
  message: string = '';
  register = false;

  name: string = '';
  surname: string = '';

  handleSubmit() {
    this.message = 'Usuario Registrado';
    this.register = true;
  }
}
