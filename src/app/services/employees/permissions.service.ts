import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EmployeePermissions } from 'src/app/classes/employee/employee-permissions';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private employeeAccountURL = `${environment.apiUrl}/employeePermissions`;

  constructor(private http: HttpClient) { }

  getEmployeesPermissions(): Observable<EmployeePermissions[]> {
    return this.http.get<EmployeePermissions[]>(this.employeeAccountURL)
      .pipe(
        tap(_ => console.log('retrieved employees permissions'))
      );
  }

  getEmployeePermissions(id: number): Observable<EmployeePermissions> {
    const url = `${this.employeeAccountURL}/${id}`;
    return this.http.get<EmployeePermissions>(url)
      .pipe(
        tap(_ => console.log('retrived employee permissions'))
      );
  }

  addEmployeePermissions(employeeAccount: EmployeePermissions): Observable<EmployeePermissions> {
    return this.http.post<EmployeePermissions>(this.employeeAccountURL, employeeAccount, httpOptions)
      .pipe(
        tap(_ => console.log('added employee permissions'))
      );
  }

  deleteEmployeePermissions(employeeId: number): Observable<EmployeePermissions> {
    const url = `${this.employeeAccountURL}/${employeeId}`;
    return this.http.delete<EmployeePermissions>(url, httpOptions)
      .pipe(
        tap(_ => console.log('deleted employee permissions'))
      );
  }

  updateEmployeePermissions(employeeAccount: EmployeePermissions): Observable<any> {
    const url = `${this.employeeAccountURL}/${employeeAccount.userLink}`;
    return this.http.put(url, employeeAccount, httpOptions)
      .pipe(
        tap(_ => console.log('updated employee permissions'))
      );
  }
}
