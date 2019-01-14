import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from 'src/app/classes/client/contact';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private clientURL = `${environment.apiUrl}/clientContact`;

  constructor(private http: HttpClient) { }

  getClientsContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.clientURL)
      .pipe(
        tap(_ => console.log('retrived clients contacts'))
      );
  }

  getClientContact(id: number): Observable<Contact> {
    const url = `${this.clientURL}/?id=${id}`;
    return this.http.get<Contact>(url)
      .pipe(
        tap(_ => console.log('retrived client contact'))
      );
  }

  addClientContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.clientURL, contact, httpOptions)
      .pipe(
        tap(_ => console.log('added client contact'))
      );
  }

  deleteClient(clientId: number): Observable<Contact> {
    const url = `${this.clientURL}/${clientId}`;
    return this.http.delete<Contact>(url, httpOptions)
      .pipe(
        tap(_ => console.log('deleted client contact'))
      );
  }

  updateClient(contact: Contact): Observable<any> {
    return this.http.put(this.clientURL, contact, httpOptions)
      .pipe(
        tap(_ => console.log('updated client contact'))
      );
  }
}
