import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, retry } from 'rxjs/operators';

import { Supplier } from 'src/app/classes/supplier/supplier';
import { environment } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private supplierURL = `${environment.apiUrl}/supplier`;

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.supplierURL)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived suppliers'))
      );
  }

  getSupplier(id: number): Observable<Supplier> {
    const url = `${this.supplierURL}/${id}`;
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

    const url = `${this.supplierURL}/?name=${searchTerm.trim()}`;
    return this.http.get<Supplier[]>(url)
      .pipe(
        retry(3),
        tap(_ => console.log('retrieved search results'))
      );
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.supplierURL, supplier, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('added supplier'))
      );
  }

  deleteSupplier(supplierId: number): Observable<Supplier> {
    const url = `${this.supplierURL}/${supplierId}`;
    return this.http.delete<Supplier>(url, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('deleted supplier'))
      );
  }

  updateSupplier(supplier: Supplier): Observable<any> {
    const url = `${this.supplierURL}/${supplier.supplierId}`;
    return this.http.put(url, supplier, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('updated supplier'))
      );
  }
}
