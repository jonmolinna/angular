import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { employeeInterface } from '../employee.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  constructor(private data: DataService) {}

  employees: employeeInterface[] = [];

  ngOnInit(): void {
    this.data.getAllEmployees().subscribe((employee) => {
      this.employees = Object.values(employee);
    });
  }

  // Subscribe => Observable
}
