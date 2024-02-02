import { Component, Input } from '@angular/core';
import { EmployeeInterface } from '../employee.interface';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent {
  @Input() employees: EmployeeInterface[] = [];

  constructor(private employeesService: EmployeesService) {}

  async handleDelete(employee: EmployeeInterface) {
    await this.employeesService.deleteEmployee(employee);
  }

  async handleUpdate(id: number) {
    await this.employeesService.findOneEmployeeById(id);
  }
}
