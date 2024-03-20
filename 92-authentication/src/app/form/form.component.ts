import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employees.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  initialForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeeService
  ) {
    this.initialForm = this.formBuilder.group({
      name: '',
      email: '',
      salary: '',
    });
  }

  async handleSubmit() {
    let newUser = {
      ...this.initialForm.value,
      id: new Date().getTime(),
    };
    await this.employeesService.addEmployee(newUser);
    this.initialForm.reset();
  }
}
