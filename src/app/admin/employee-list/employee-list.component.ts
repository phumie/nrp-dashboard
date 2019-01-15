import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/employees/general.service';
import { Employee } from 'src/app/classes/employee/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/employees/account.service';
import { KinService } from 'src/app/services/employees/kin.service';
import { PermissionsService } from 'src/app/services/employees/permissions.service';
import { EmployeeAccount } from 'src/app/classes/employee/employee-account';
import { EmployeeKin } from 'src/app/classes/employee/employee-kin';
import { EmployeePermissions } from 'src/app/classes/employee/employee-permissions';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css', '../../admin-template/admin-template.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  employeesAccounts: EmployeeAccount[];
  employeesKin: EmployeeKin[];
  employeesPermissions: EmployeePermissions[];

  constructor(
    private router: Router,
    private employeeService: GeneralService,
    private employeeAccountService: AccountService,
    private employeeKinService: KinService,
    private employeePermissionsService: PermissionsService
    ) { }

  ngOnInit() {
    this.getEmployees();
    this.getEmployeesAccounts();
    this.getEmployeesKin();
    this.getEmployeesPermissions();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  getEmployeesAccounts(): void {
    this.employeeAccountService.getEmployeeAccounts()
      .subscribe(employeesAccount => this.employeesAccounts = employeesAccount);
  }

  getEmployeesKin(): void {
    this.employeeKinService.getEmployeesKin()
      .subscribe(employeesKin => this.employeesKin = employeesKin);
  }

  getEmployeesPermissions(): void {
    this.employeePermissionsService.getEmployeesPermissions()
      .subscribe(employeesPermissions => this.employeesPermissions = employeesPermissions);
  }

  onSelect(employee: Employee): void {
    const url = `/admin/employees/edit/${employee.employeeId}`;
    const accounts = this.employeesAccounts.find(acc => {
      return (acc.employeeId === employee.employeeId);
    });
    const employeeKin = this.employeesAccounts.find(kin => {
      return (kin.employeeId === employee.employeeId);
    });
    const employeePermissions = this.employeesAccounts.find(permissions => {
      return (permissions.employeeId === employee.employeeId);
    });
    this.router.navigate([url]);
    sessionStorage.setItem('employeeAccount', JSON.stringify(accounts));
    sessionStorage.setItem('employeeKin', JSON.stringify(employeeKin));
    sessionStorage.setItem('employeePermissions', JSON.stringify(this.employeesPermissions));
  }

}
