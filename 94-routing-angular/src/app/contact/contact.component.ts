import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // Formulario de Tipo Plantilla
  public user: any = {
    name: '',
    email: '',
  };

  handleEnviar() {
    console.log('YOOO', this.user);
  }

  // Formulario de tipo Reactivo
  formInitial: FormGroup;

  constructor(private form: FormBuilder) {
    this.formInitial = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  handleSubmit() {
    console.log('YOOOO', this.formInitial);
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formInitial.get(controlName)?.hasError(errorType) &&
      this.formInitial.get(controlName)?.touched
    );
  }
}
