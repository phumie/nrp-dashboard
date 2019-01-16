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

  constructor(
    private router: Router,
    private employeeService: GeneralService
    ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  onSelect(employee: Employee): void {
    const url = `/admin/employees/edit/${employee.employeeId}`;
    this.router.navigate([url]);
  }

}
