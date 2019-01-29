import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Employee } from 'src/app/classes/employee/employee';

@Injectable()
export class EmployeeService {

  private employeeSubject = new Subject<Employee>();

  storeEmployee(employee: Employee): void {
    this.employeeSubject.next(employee);
  }

  getEmployee(): Observable<Employee> {
    return this.employeeSubject.asObservable();
  }
}
