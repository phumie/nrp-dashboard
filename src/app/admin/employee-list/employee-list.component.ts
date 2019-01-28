import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/employees/general.service';
import { Employee } from 'src/app/classes/employee/employee';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css', '../../admin-template/admin-template.component.css']
})
export class EmployeeListComponent implements OnInit {

  loaded = false;
  user: Employee;
  employees: Employee[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private employeeService: GeneralService
    ) { }

  ngOnInit() {
    this.getEmployees();
    this.user = this.authService.currentUserValue;
  }

  getEmployees(): void {
      this.employeeService.getEmployees()
        .subscribe(employees => {
          this.employees = employees;
          this.loaded = true;
        });
  }

  onSelect(employee: Employee): void {
    const url = `/admin/employees/edit/${employee.employeeId}`;
    this.router.navigate([url]);
  }

  logout(): void {
    const employee = this.authService.currentUserValue;
    this.authService.logout(employee.employeeId);
    this.router.navigate(['/login']);
  }

}
