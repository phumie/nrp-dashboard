import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Employee } from 'src/app/classes/employee/employee';

import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { ProjectFileService } from 'src/app/services/reports/project-file.service';
import { ProjectFile } from 'src/app/classes/projects/project-file';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  today: Date;
  employee: Employee;
  projectFiles: ProjectFile[];
  @ViewChild('cover') cover: ElementRef;
  month = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
  day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
  'Saturday', 'Sunday'];

  constructor(
    private authService: AuthService,
    private projectFileService: ProjectFileService
  ) { }

  ngOnInit() {
    this.today = new Date();
    this.getEmployeeProjectFiles();
    this.employee = this.authService.currentUserValue;
  }

  getEmployeeProjectFiles(): void {
    // this.projectFileService.getProjectsFiles()
    //   .subscribe(projectsFiles => {
    //     this.projectFiles = projectsFiles.filter(projectFile => projectFile.projectId === 1);
    //   });
    this.projectFiles = [
      {
        projectFileId: 1,
        projectId: 1,
        description: 'Blah Blah Blah',
        filePath: 'assets/annual.png',
      },
      {
        projectFileId: 2,
        projectId: 2,
        description: 'Blah Blah Blah',
        filePath: 'assets/admin.png',
      },
      {
        projectFileId: 3,
        projectId: 3,
        description: 'Blah Blah Blah',
        filePath: 'assets/background.png',
      },
      {
        projectFileId: 4,
        projectId: 4,
        description: 'Blah Blah Blah',
        filePath: 'assets/budget.png',
      }
    ];
  }

  downloadPDF(): void {
    const pdf = new jspdf('p', 'mm', 'a4');

    // failing to detect when the promise end, so I can save the pdf
    html2canvas(this.cover.nativeElement).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      const contentData = canvas.toDataURL('image/png');
      pdf.addImage(contentData, 'PNG', 0, 0, imgWidth, imgHeight);
    });

    html2canvas(document.getElementById('content1')).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      pdf.addPage();
      const contentData = canvas.toDataURL('image/png');
      pdf.addImage(contentData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('Project Report.pdf');
    });


    // This is the correct one I should have been using just found out
    // const margins = {
    //   top: 80,
    //   bottom: 60,
    //   left: 40,
    //   width: 522
    // };
    // pdf.fromHTML(
    //   this.cover.nativeElement,
    //   margins.left,
    //   margins.top, {
    //     'width': margins.width
    //   }, _ => {
    //     pdf.save('Project Report.pdf');
    //   });

    }

}
