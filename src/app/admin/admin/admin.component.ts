import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/employee/employee';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../admin-template/admin-template.component.css']
})
export class AdminComponent implements OnInit {

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
