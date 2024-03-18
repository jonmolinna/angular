import { Component, Input, OnInit } from '@angular/core';
import { EmployeeInterface } from '../employee.interface';
import { EmployeeService } from '../service/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent {
  @Input() employee?: EmployeeInterface;

  constructor(private employeeService: EmployeeService) {}

  async handleDelete(employee: EmployeeInterface | any) {
    await this.employeeService.deleteEmployee(employee);
  }
}
