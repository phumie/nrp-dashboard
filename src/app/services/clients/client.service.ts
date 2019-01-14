import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Client } from 'src/app/classes/client/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientSubject = new Subject<Client>();

  storeClient(client: Client): void {
    this.clientSubject.next(client);
  }

  getClient(): Observable<Client> {
    return this.clientSubject.asObservable();
  }
}
