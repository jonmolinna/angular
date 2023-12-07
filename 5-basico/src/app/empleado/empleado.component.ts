import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent {
  name = 'Kendra';
  lastName = 'Contreras';
  age = 27;
  company = 'Dallase';
  private codigo = 283284847;
  isActivInput = true;
  isLogged = false;

  getCodigo() {
    return this.codigo;
  }

  getRegisterUser() {
    this.isLogged = !this.isLogged;
  }

  // handleClick(value: String) {
  //   console.log('Holaaaa', value);
  // }
}
