import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
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
  // userActiv: any = {
  //   name: 'Kendra',
  //   surname: 'Contreras',
  //   dni: '74382349',
  // };
  typeDni: string = 'DNI';

  constructor(private form: FormBuilder) {
    this.formInitial = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      typeDni: [''],
      dni: [''],
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

  // ngOnInit(): void {
  //   // this.formInitial.get('name')?.setValue(this.nameUser);
  //   this.formInitial
  //     .get('dni')
  //     ?.setValidators([Validators.required, Validators.minLength(3)]);

  //   this.formInitial.patchValue({
  //     name: this.userActiv.name,
  //     surname: this.userActiv.surname,
  //     dni: this.userActiv.dni,
  //   });
  //   this.formInitial.get('name')?.disable();
  //   this.formInitial.get('surname')?.disable();
  //   this.formInitial.get('dni')?.disable();
  // }

  ngOnInit(): void {
    // subscribe -> el formulario escucha cada cambio
    // Igual que react en el formulario
    // this.formInitial.valueChanges.subscribe((valor) => {
    //   console.log('toooo', valor);
    // });

    this.formInitial.get('typeDni')?.valueChanges.subscribe((value) => {
      this.typeDni = value;
    });
  }
}
