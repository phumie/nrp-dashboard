import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ClientListComponent } from './client-list/client-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ManageClientsComponent } from './manage-clients/manage-clients.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { ManageSuppliersComponent } from './manage-suppliers/manage-suppliers.component';
import { ManageEmployeesAccountComponent } from './manage-employees-account/manage-employees-account.component';
import { ManageEmployeesGeneralComponent } from './manage-employees-general/manage-employees-general.component';
import { ManageEmployeesKinComponent } from './manage-employees-kin/manage-employees-kin.component';
import { ManageEmployeesPermissionsComponent } from './manage-employees-permissions/manage-employees-permissions.component';
import { ManageClientsContactComponent } from './manage-clients-contact/manage-clients-contact.component';
import { ManageClientsGeneralComponent } from './manage-clients-general/manage-clients-general.component';

@NgModule({
  declarations: [
    AdminComponent,
    ClientListComponent,
    EmployeeListComponent,
    ManageClientsComponent,
    ManageEmployeesComponent,
    SupplierListComponent,
    ManageSuppliersComponent,
    ManageEmployeesAccountComponent,
    ManageEmployeesGeneralComponent,
    ManageEmployeesKinComponent,
    ManageEmployeesPermissionsComponent,
    ManageClientsContactComponent,
    ManageClientsGeneralComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
