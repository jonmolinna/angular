import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cicle-life',
  templateUrl: './cicle-life.component.html',
})
export class CicleLifeComponent implements OnInit, OnDestroy {
  initialForm: FormGroup;
  typeDni: string = '';
  mostrarDni: boolean = false;

  constructor(private form: FormBuilder) {
    this.initialForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      typesDni: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Se ejecuta cuando inicializa el componente
  ngOnInit(): void {
    this.initialForm.get('typesDni')?.valueChanges.subscribe((value) => {
      this.typeDni = value;
      this.mostrarDni = value != '';
    });
  }

  // Se ejecuta cuando se cierra el componente
  ngOnDestroy(): void {
    console.log('Se destruyo el componente');
    // aqui se desuscribe el rjx
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.initialForm.get(controlName)?.hasError(errorType) &&
      this.initialForm.get(controlName)?.touched
    );
  }

  handleSubmit() {
    console.log(this.initialForm);
  }
}
