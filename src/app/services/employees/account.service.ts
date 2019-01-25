import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeAccount } from 'src/app/classes/employee/employee-account';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private employeeAccountURL = `${environment.apiUrl}/employeeAccount`;

  constructor(private http: HttpClient) { }

  getEmployeeAccounts(): Observable<EmployeeAccount[]> {
    return this.http.get<EmployeeAccount[]>(this.employeeAccountURL)
      .pipe(
        tap(_ => console.log('retrived employee accounts'))
      );
  }

  getEmployeeAccount(id: number): Observable<EmployeeAccount> {
    const url = `${this.employeeAccountURL}/${id}`;
    return this.http.get<EmployeeAccount>(url)
      .pipe(
        tap(_ => console.log('retrived employee account'))
      );
  }

  addEmployeeAccount(employeeAccount: EmployeeAccount): Observable<EmployeeAccount> {
    return this.http.post<EmployeeAccount>(this.employeeAccountURL, employeeAccount, httpOptions)
      .pipe(
        tap(_ => console.log('added employee account'))
      );
  }

  deleteEmployeeAccount(employeeAccount: EmployeeAccount): Observable<EmployeeAccount> {
    const url = `${this.employeeAccountURL}/${employeeAccount.employeeAccountsId}`;
    return this.http.delete<EmployeeAccount>(url, httpOptions)
      .pipe(
        tap(_ => console.log('deleted employee account'))
      );
  }

  updateEmployeeAcccount(employeeAccount: EmployeeAccount): Observable<any> {
    const url = `${this.employeeAccountURL}/${employeeAccount.employeeAccountsId}`;
    return this.http.put(url, employeeAccount, httpOptions)
      .pipe(
        tap(_ => console.log('updated employee account'))
      );
  }
}
