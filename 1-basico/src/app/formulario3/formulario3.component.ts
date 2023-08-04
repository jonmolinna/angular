import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css'],
})
export class Formulario3Component {
  // Getters
  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this.formUser.get('email');
  }

  formUser = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    console.log(this.formUser.value);
  }

  // name = new FormControl('', Validators.required); // validaciones
  // email = new FormControl('', [Validators.required, Validators.email]);
}
