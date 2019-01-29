import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/services/suppliers/supplier.service';
import { Supplier } from 'src/app/classes/supplier/supplier';
import { AuthService } from 'src/app/services/auth.service';
import { Employee } from 'src/app/classes/employee/employee';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css', '../../admin-template/admin-template.component.css']
})
export class SupplierListComponent implements OnInit {

  loaded = false;
  user: Employee;
  suppliers: Supplier[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.getClient();
    this.user = this.authService.currentUserValue;
  }

  getClient(): void {
    this.supplierService.getSuppliers()
      .subscribe(suppliers => {
        this.suppliers = suppliers;
        this.loaded = true;
      });
  }

  onSelect(supplier: Supplier): void {
    const url = `/admin/suppliers/edit/${supplier.supplierId}`;
    this.router.navigate([url]);
  }

  logout(): void {
    const employee = this.authService.currentUserValue;
    this.authService.logout(employee.employeeId);
    this.router.navigate(['/login']);
  }
}
