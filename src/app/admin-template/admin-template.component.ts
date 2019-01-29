import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Employee } from '../classes/employee/employee';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {

  employee: Employee;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.employee = this.authService.currentUserValue;
  }

}
