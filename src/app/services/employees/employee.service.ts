import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Employee } from 'src/app/classes/employee/employee';
import { EmployeeKin } from 'src/app/classes/employee/employee-kin';
import { EmployeeAccount } from 'src/app/classes/employee/employee-account';
import { EmployeePermissions } from 'src/app/classes/employee/employee-permissions';

@Injectable()
export class EmployeeService {

  private employeeSubject = new Subject<Employee>();
  private employeeKinSubject = new Subject<EmployeeKin>();
  private employeeAccountSubject = new Subject<EmployeeAccount>();
  private employeePermissionsSubject = new Subject<EmployeePermissions>();

  storeEmployee(employee: Employee): void {
    this.employeeSubject.next(employee);
  }

  getEmployee(): Observable<Employee> {
    return this.employeeSubject.asObservable();
  }

  storeEmployeeKin(employeeKin: EmployeeKin): void {
    this.employeeKinSubject.next(employeeKin);
  }

  getEmployeeKin(): Observable<EmployeeKin> {
    return this.employeeKinSubject.asObservable();
  }

  storeEmployeeAccount(employeeAccount: EmployeeAccount): void {
    this.employeeAccountSubject.next(employeeAccount);
  }

  getEmployeeAccount(): Observable<EmployeeAccount> {
    return this.employeeAccountSubject.asObservable();
  }

  storeEmployeePermissions(employeePermissions: EmployeePermissions): void {
    this.employeePermissionsSubject.next(employeePermissions);
  }

  getEmployeePermissions(): Observable<EmployeePermissions> {
    return this.employeePermissionsSubject.asObservable();
  }
}
