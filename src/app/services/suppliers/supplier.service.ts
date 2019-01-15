import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, retry } from 'rxjs/operators';

import { Supplier } from 'src/app/classes/supplier/supplier';
import { environment } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private clientURL = `${environment.apiUrl}/supplier`;

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.clientURL)
      .pipe(
        tap(_ => console.log('retrived suppliers'))
      );
  }

  getSupplier(id: number): Observable<Supplier> {
    const url = `${this.clientURL}/${id}`;
    return this.http.get<Supplier>(url)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived supplier'))
      );
  }

  searchSupplier(searchTerm: string): Observable<Supplier[]> {
    if (!searchTerm.trim()) {
      return of([]);
    }

    const url = `${this.clientURL}/?name=${searchTerm.trim()}`;
    return this.http.get<Supplier[]>(url)
      .pipe(
        retry(3),
        tap(_ => console.log('retrieved search results'))
      );
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.clientURL, supplier, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('added supplier'))
      );
  }

  deleteSupplier(supplierId: number): Observable<Supplier> {
    const url = `${this.clientURL}/${supplierId}`;
    return this.http.delete<Supplier>(url, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('deleted supplier'))
      );
  }

  updateSupplier(client: Supplier): Observable<any> {
    return this.http.put(this.clientURL, client, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('updated supplier'))
      );
  }
}
