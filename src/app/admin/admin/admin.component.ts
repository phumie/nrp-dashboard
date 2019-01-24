import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from 'src/app/classes/employee/employee';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/employees/general.service';
import { GeneralServiceClient } from 'src/app/services/clients/general.service';
import { SupplierService } from 'src/app/services/suppliers/supplier.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../admin-template/admin-template.component.css']
})
export class AdminComponent implements OnInit {

  loadedEmployees = false;
  loadedClients = false;
  loadedSuppliers = false;
  employee: Employee;
  employeesCount: number;
  clientsCount: number;
  suppliersCount: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private employeeService: GeneralService,
    private supplierService: SupplierService,
    private clientService: GeneralServiceClient,
    ) { }

  ngOnInit() {
    this.getClients();
    this.getSuppliers();
    this.getEmployees();
    this.employee = this.authService.currentUserValue;
  }

  logout(): void {
    this.authService.logout(this.employee.employeeId);
    this.router.navigate(['/login']);
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employee => {
        this.employeesCount = employee.length;
        this.loadedEmployees = true;
      });
  }

  getClients(): void {
    this.clientService.getClients()
      .subscribe(clients => {
        this.clientsCount = clients.length;
        this.loadedClients = true;
      });
  }

  getSuppliers(): void {
    this.supplierService.getSuppliers()
      .subscribe(suppliers => {
        this.suppliersCount = suppliers.length;
        this.loadedSuppliers = true;
      });
  }

}
