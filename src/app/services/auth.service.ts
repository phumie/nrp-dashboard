import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private authUrl = `${environment.apiUrl}/authentication`;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  clientLogin(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { username: username, password: password }, httpOptions)
      .pipe(
        tap(user => {
          console.log('logged in');
          sessionStorage.setItem('user', JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
  }

  employeeLogin(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { username: username, password: password }, httpOptions)
      .pipe(
        tap(_ => console.log('Logged in'))
      );
  }

  logout(): void {
    sessionStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}
