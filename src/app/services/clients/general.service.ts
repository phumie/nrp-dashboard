import { Injectable } from '@angular/core';
import { tap, retry } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Client } from 'src/app/classes/client/client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceClient {

  private clientURL = `${environment.apiUrl}/client`;

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientURL)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived clients'))
      );
  }

  getClient(id: number): Observable<Client> {
    const url = `${this.clientURL}/${id}`;
    return this.http.get<Client>(url)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived client'))
      );
  }

  searchEmployee(searchTerm: string): Observable<Client[]> {
    if (!searchTerm.trim()) {
      return of([]);
    }

    const url = `${this.clientURL}/?name=${searchTerm.trim()}`;
    return this.http.get<Client[]>(url)
      .pipe(
        retry(3),
        tap(_ => console.log('retrieved search results'))
      );
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientURL, client, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('added client'))
      );
  }

  deleteClient(clientId: number): Observable<Client> {
    const url = `${this.clientURL}/${clientId}`;
    return this.http.delete<Client>(url, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('deleted client'))
      );
  }

  updateClient(client: Client): Observable<any> {
    const url = `${this.clientURL}/${client.clientId}`;
    return this.http.put(url, client, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('updated client'))
      );
  }
}
