import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmployeeInterface } from '../employee.interface';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private firestore: Firestore) {}

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

  addEmployee(employee: EmployeeInterface) {
    const employeeRef = collection(this.firestore, 'employees');
    return addDoc(employeeRef, employee);
  }
}
