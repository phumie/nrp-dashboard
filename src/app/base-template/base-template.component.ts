import { Component, OnInit } from '@angular/core';
import { Employee } from '../classes/employee/employee';
import { EmployeeService } from '../services/employees/employee.service';
import { GeneralService } from '../services/employees/general.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.css']
})
export class BaseTemplateComponent implements OnInit {

  employee: Employee;

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.employee = this.authService.currentUserValue;
  }

  logout(): void {
    this.authService.logout(this.employee.employeeId);
    this.router.navigate(['/login']);
  }
}
