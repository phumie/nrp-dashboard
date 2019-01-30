import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Employee } from 'src/app/classes/employee/employee';

import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  today: Date;
  employee: Employee;
  @ViewChild('cover') cover: ElementRef;
  month = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
  day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
  'Saturday', 'Sunday'];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.today = new Date();
    this.employee = this.authService.currentUserValue;
  }

  downloadPDF(): void {
    const pdf = new jspdf('p', 'mm', 'a4');
    html2canvas(this.cover.nativeElement).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      const contentData = canvas.toDataURL('image/png');
      pdf.addImage(contentData, 'PNG', 0, 0, imgWidth, imgHeight);
    });

    html2canvas(document.getElementById('content')).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      const contentData = canvas.toDataURL('image/png');
      pdf.addPage();
      pdf.addImage(contentData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('testing.pdf');
    });
  }

}
