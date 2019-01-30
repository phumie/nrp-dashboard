import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

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

  allowed = false;
  loading = false;
  employee: Employee;
  subscription: Subscription;
  user: Employee;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private employeeService: EmployeeService,
    private employeeGeneralService: GeneralService
    ) {
    this.subscription = this.employeeService.getEmployee()
      .subscribe(employee => this.employee = employee);
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeGeneralService.getEmployee(id)
        .subscribe(employee => this.employee = employee);
    }

    this.user = this.authService.currentUserValue;
    if (this.user.userRights.admin.delete) {
      this.allowed = true;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteEmployee(): void {
    if (this.employee) {
      this.loading = true;
      this.employeeGeneralService.deleteEmployee(this.employee).subscribe(
        _ => this.router.navigate(['/admin/employees']),
        error => console.log(error)
      );
    }
  }

  logout(): void {
    const employee = this.authService.currentUserValue;
    this.authService.logout(employee.employeeId);
    this.router.navigate(['/login']);
  }

}
