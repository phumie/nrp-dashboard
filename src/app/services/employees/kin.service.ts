import { Injectable } from '@angular/core';
import { tap, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EmployeeKin } from 'src/app/classes/employee/employee-kin';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class KinService {

  private employeeURL = `${environment.apiUrl}/employeeKin`;

  constructor(private http: HttpClient) { }

  getEmployeesKin(): Observable<EmployeeKin[]> {
    return this.http.get<EmployeeKin[]>(this.employeeURL)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived employee kins'))
      );
  }

  getEmployeeKin(id: number): Observable<EmployeeKin> {
    const url = `${this.employeeURL}/${id}`;
    return this.http.get<EmployeeKin>(url)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived employee kin'))
      );
  }

  addEmployeeKin(employeeKin: EmployeeKin): Observable<EmployeeKin> {
    return this.http.post<EmployeeKin>(this.employeeURL, employeeKin, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('added employee kin'))
      );
  }

  deleteEmployeeKin(employeeID: number): Observable<EmployeeKin> {
    const url = `${this.employeeURL}/${employeeID}`;
    return this.http.delete<EmployeeKin>(url, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('deleted employee kin'))
      );
  }

  updateEmployeeKin(employeeKin: EmployeeKin): Observable<any> {
    const url = `${this.employeeURL}/${employeeKin.employeeId}`;
    return this.http.put(url, employeeKin, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('updated employee kin'))
      );
  }
}
