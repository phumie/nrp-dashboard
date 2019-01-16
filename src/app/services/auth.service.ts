import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private authUrl = `${environment.apiUrl}/authentication`;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('user'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  clientLogin(username: string, password: string): Observable<any> {
    const url = `${this.authUrl}/0`;
    return this.http.post<any>(url, { username: username, password: password }, httpOptions)
      .pipe(
        tap(user => {
          console.log(user);
          sessionStorage.setItem('user', JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
  }

  employeeLogin(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { username: username, password: password }, httpOptions)
      .pipe(
        tap(user => {
          sessionStorage.setItem('user', JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
  }

  logout(id: number): void {
    const url = `${this.authUrl}/${id}`;
    sessionStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.http.delete<any>(this.authUrl, httpOptions)
      .pipe(
        tap(data => console.log(data))
      );
  }
}
