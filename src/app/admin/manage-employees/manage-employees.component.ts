import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';

import { EmployeeService } from 'src/app/services/employees/employee.service';
import { Employee } from 'src/app/classes/employee/employee';
import { GeneralService } from 'src/app/services/employees/general.service';
import { AccountService } from 'src/app/services/employees/account.service';
import { KinService } from 'src/app/services/employees/kin.service';
import { PermissionsService } from 'src/app/services/employees/permissions.service';
import { EmployeeAccount } from 'src/app/classes/employee/employee-account';
import { EmployeeKin } from 'src/app/classes/employee/employee-kin';
import { EmployeePermissions } from 'src/app/classes/employee/employee-permissions';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css', '../../admin-template/admin-template.component.css'],
  providers: [EmployeeService]
})
export class ManageEmployeesComponent implements OnInit, OnDestroy {

  employee: Employee;
  employeeAccount: EmployeeAccount;
  employeeKin: EmployeeKin;
  employeePermissions: EmployeePermissions;
  subscription: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private employeeGeneralService: GeneralService
    ) {
    this.subscription = this.employeeService.getEmployee()
      .subscribe(employee => this.employee = employee);
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteEmployee(): void {
    this.employeeGeneralService.deleteEmployee(this.employee).subscribe();
    $(document).ready(function(){
        alert("Employee deleted!");
    });
  }

}
