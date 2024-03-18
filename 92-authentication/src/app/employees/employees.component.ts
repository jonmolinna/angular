import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employees.service';
import { EmployeeInterface } from '../employee.interface';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {
  employees: EmployeeInterface[] = [];

  constructor(private employeesService: EmployeeService) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }
}
