import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, tap } from 'rxjs/operators';

import { Employee } from 'src/app/classes/employee/employee';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private employeeURL = `${environment.apiUrl}/employee`;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeURL)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived employees'))
      );
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeeURL}/${id}`;
    return this.http.get<Employee>(url)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived employee'))
      );
  }

  searchEmployee(searchTerm: string): Observable<Employee[]> {
    if (!searchTerm.trim()) {
      return of([]);
    }

    const url = `${this.employeeURL}/?name=${searchTerm.trim()}`;
    return this.http.get<Employee[]>(url)
      .pipe(
        retry(3),
        tap(_ => console.log('retrieved search results'))
      );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    console.log(employee);
    return this.http.post<Employee>(this.employeeURL, employee, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('added employee'))
      );
  }

  deleteEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.employeeURL}/${employee.employeeId}`;
    return this.http.delete<Employee>(url, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('deleted employee'))
      );
  }

  updateEmployee(employee: Employee): Observable<any> {
    const url = `${this.employeeURL}/${employee.employeeId}`;
    return this.http.put(url, employee, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('updated employee'))
      );
  }
}
