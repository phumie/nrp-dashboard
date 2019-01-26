import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { EmployeeService } from 'src/app/services/employees/employee.service';
import { Employee } from 'src/app/classes/employee/employee';
import { GeneralService } from 'src/app/services/employees/general.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css', '../../admin-template/admin-template.component.css'],
  providers: [EmployeeService]
})
export class ManageEmployeesComponent implements OnInit, OnDestroy {

  employee: Employee;
  subscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
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
  }

  logout(): void {
    const employee = this.authService.currentUserValue;
    this.authService.logout(employee.employeeId);
    this.router.navigate(['/login']);
  }

}
