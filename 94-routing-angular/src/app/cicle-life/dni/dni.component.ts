import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
})
export class DniComponent implements OnChanges {
  @Input() typeDni: string = 'DNI';
  formDni: FormGroup;
  variableNueva: string = '';

  constructor(private form: FormBuilder) {
    this.formDni = this.form.group({
      dni: [''],
    });
  }

  // Se ejecuta cuando escucha un cambio
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('CAMBIOS >>>', changes);
    console.log(changes?.['typeDni'].currentValue);
    this.variableNueva = !changes?.['typeDni'].firstChange
      ? changes?.['typeDni'].currentValue
      : 'Kendra Contreras';
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.formDni.get(controlName)?.hasError(errorType) &&
      this.formDni.get(controlName)?.touched
    );
  }
}
