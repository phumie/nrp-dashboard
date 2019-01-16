import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { ClientListComponent } from './client-list/client-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ManageClientsComponent } from './manage-clients/manage-clients.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { ManageSuppliersComponent } from './manage-suppliers/manage-suppliers.component';
import { EmployeeAddGuard } from '../guard/admin/employee-add.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'employees',
        children: [
          {
            path: 'edit',
            children: [
              {
                path: ':id',
                component: ManageEmployeesComponent
              },
              {
                path: '',
                canActivate: [EmployeeAddGuard],
                component: ManageEmployeesComponent
              }
            ]
          },
          { path: 'employee-list', component: EmployeeListComponent },
          { path: '', component: EmployeeListComponent }
        ]
      },
      {
        path: 'clients',
        children: [
          {
            path: 'edit',
            children: [
              {
                path: ':id',
                component: ManageClientsComponent
              },
              {
                path: '',
                component: ManageClientsComponent
              }
            ]
          },
          { path: 'client-list', component: ClientListComponent },
          { path: '', component: ClientListComponent }
        ]
      },
      {
        path: 'suppliers',
        children: [
          {
            path: 'edit',
            children: [
              {
                path: ':id',
                component: ManageSuppliersComponent
              },
              {
                path: '',
                component: ManageSuppliersComponent
              }
            ]
          },
          { path: 'supplier-list', component: SupplierListComponent },
          { path: '', component: SupplierListComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
