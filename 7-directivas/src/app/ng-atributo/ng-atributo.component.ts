import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ng-atributo',
  templateUrl: './ng-atributo.component.html',
})
export class NgAtributoComponent {
  numbers: Array<number> = [20, 14, 27, 10, 11, 27];
  initialForm;

  constructor(private formBuilder: FormBuilder) {
    this.initialForm = this.formBuilder.group({
      number: '',
    });
  }

  handleSubmit() {
    let newNumber: number = this.initialForm.value.number
      ? parseInt(this.initialForm.value.number)
      : 0;

    this.numbers = [...this.numbers, newNumber];
    this.initialForm.reset();
  }
}
