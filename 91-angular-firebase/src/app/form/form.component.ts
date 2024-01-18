import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  initialForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private data: DataService) {
    this.initialForm = this.formBuilder.group({
      name: '',
      surname: '',
      salary: '',
    });
  }

  handleSubmit() {
    let key = new Date().getTime();
    this.data.addEmployee({ ...this.initialForm.value, id: key });
    this.initialForm.reset();
  }
}
