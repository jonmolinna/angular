import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeInterface } from './employee.interface';

const URI =
  'https://angular-firebase-9b19e-default-rtdb.firebaseio.com/datos.json';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  employees: employeeInterface[] = [];

  //  subscribe = observable
  addEmployee(employee: employeeInterface) {
    this.httpClient
      .post(URI, employee)
      .subscribe((response) => console.log(response));
  }

  getAllEmployees() {
    return this.httpClient.get(URI);
  }
}
