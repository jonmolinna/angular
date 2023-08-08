import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario4',
  templateUrl: './formulario4.component.html',
  styleUrls: ['./formulario4.component.css'],
})
export class Formulario4Component {
  constructor(private fb: FormBuilder) {}

  // getters
  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this, this.formUser.get('email') as FormControl;
  }

  formUser = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  handleSubmit() {
    console.log(this.formUser.value);
  }
}
