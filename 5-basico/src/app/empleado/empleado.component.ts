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
  isRegisted = false;
  universidad: String = 'UTP';
  carreras: String = 'Ing. Informatica';

  getCodigo() {
    return this.codigo;
  }

  getRegisterUser() {
    this.isLogged = !this.isLogged;
  }

  setUserRegister() {
    alert('El usuario se acaba de registrar');
  }

  login(event: Event) {
    this.isRegisted = true;

    // if ((<HTMLInputElement>event.target).value === 'Si') {
    //   this.isRegisted = true
    // } else {
    //   this.isRegisted = false;
    // }
  }

  logout() {
    this.isRegisted = false;
  }

  changeUniversity(event: Event) {
    this.universidad = (<HTMLInputElement>event.target).value;
  }

  // handleClick(value: String) {
  //   console.log('Holaaaa', value);
  // }
}
