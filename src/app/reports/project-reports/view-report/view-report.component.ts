import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Employee } from 'src/app/classes/employee/employee';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  date: Date;
  employee: Employee;
  month = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.date = new Date();
    this.employee = this.authService.currentUserValue;
  }

  downloadPDF(): void {
  }

}
