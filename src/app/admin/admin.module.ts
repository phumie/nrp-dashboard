import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ClientListComponent } from './client-list/client-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ManageClientsComponent } from './manage-clients/manage-clients.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { ManageSuppliersComponent } from './manage-suppliers/manage-suppliers.component';

@NgModule({
  declarations: [AdminComponent, ClientListComponent, EmployeeListComponent, ViewClientComponent, ViewEmployeeComponent, ManageClientsComponent, ManageEmployeesComponent, SupplierListComponent, ManageSuppliersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
