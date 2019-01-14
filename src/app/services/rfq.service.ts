import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Rfq } from '../classes/rfq/rfq';
import { Observable, of } from 'rxjs';
import { tap, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RfqService {

  private rfqUrl = `${environment.apiUrl}/Quote`;

  constructor(private http: HttpClient) { }

  getRfqs(): Observable<Rfq[]> {
    return this.http.get<Rfq[]>(this.rfqUrl)
      .pipe(
        retry(3),
        tap(_ => console.log('Fetched Rfqs'))
    );
  }  
}
