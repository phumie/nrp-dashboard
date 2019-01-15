import { Injectable } from '@angular/core';
// import { Subject, Observable } from 'rxjs';
import { Client } from 'src/app/classes/client/client';
import { Observable, of } from 'rxjs';
import { retry, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  private clientUrl = `${environment.apiUrl}/client`;

  storeClient(client: Client): void {
    // this.clientSubject.next(client);
  }

  // getClient(): Observable<Client> {
  //   return this.clientSubject.asObservable();
  // }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived clients'))
      );
  }
}
