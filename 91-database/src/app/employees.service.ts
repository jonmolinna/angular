import { Injectable, OnInit } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  getDoc,
} from '@angular/fire/firestore';
import { EmployeeInterface } from './employee.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private firestore: Firestore) {}

  employee?: EmployeeInterface;

  addEmployee(employee: EmployeeInterface) {
    const employeeRef = collection(this.firestore, 'employees');
    return addDoc(employeeRef, employee);
  }

  getEmployees(): Observable<EmployeeInterface[]> {
    const employeeRef = collection(this.firestore, 'employees');
    return collectionData(employeeRef, { idField: 'id' }) as Observable<
      EmployeeInterface[]
    >;
  }

  deleteEmployee(employee: EmployeeInterface) {
    const employeeRef = doc(this.firestore, `employees/${employee.id}`);
    return deleteDoc(employeeRef);
  }

  async findOneEmployeeById(id: number) {
    const employeeRef = doc(this.firestore, `employees/${id}`);
    const employee = (await getDoc(employeeRef)).data() as EmployeeInterface;
    this.employee = employee;
  }
}
