import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  initialForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService
  ) {
    this.initialForm = this.formBuilder.group({
      name: '',
      salary: '',
      email: '',
    });
  }

  ngOnInit(): void {
    let employee = this.employeesService.employee;
    console.log('AQUI >>>>', employee);
  }

  async handleSubmit() {
    let newUser = {
      ...this.initialForm.value,
      id: new Date().getTime(),
    };

    const response = await this.employeesService.addEmployee(newUser);
    this.initialForm.reset();
  }
}
