import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { EmployeeInterface } from '../employee.interface';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {
  employees: EmployeeInterface[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }
}
