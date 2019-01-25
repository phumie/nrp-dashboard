import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SupplierAccount } from 'src/app/classes/supplier/supplier-account';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class SupplierAccountService {

  private supplierUrl = `${environment.apiUrl}/supplierAccount`;

  constructor(private http: HttpClient) { }

  getSuppliersAccount(): Observable<SupplierAccount[]> {
    return this.http.get<SupplierAccount[]>(this.supplierUrl)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived suppliers accounts'))
      );
  }

  getSupplierAccount(id: number): Observable<SupplierAccount> {
    const url = `${this.supplierUrl}/${id}`;
    return this.http.get<SupplierAccount>(url)
      .pipe(
        retry(3),
        tap(_ => console.log('retrived supplier account'))
      );
  }

  addSupplierAccount(supplier: SupplierAccount): Observable<SupplierAccount> {
    return this.http.post<SupplierAccount>(this.supplierUrl, supplier, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('added supplier'))
      );
  }

  deleteSupplierAccount(supplierId: number): Observable<SupplierAccount> {
    const url = `${this.supplierUrl}/${supplierId}`;
    return this.http.delete<SupplierAccount>(url, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('deleted supplier'))
      );
  }

  updateSupplierAccount(supplierAccount: SupplierAccount): Observable<any> {
    const url = `${this.supplierUrl}/${supplierAccount.supplierAccountId}`;
    return this.http.put(this.supplierUrl, supplierAccount, httpOptions)
      .pipe(
        retry(3),
        tap(_ => console.log('updated supplier'))
      );
  }
}
