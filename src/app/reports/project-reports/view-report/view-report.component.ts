import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Employee } from 'src/app/classes/employee/employee';

import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { ProjectFileService } from 'src/app/services/reports/project-file.service';
import { ProjectFile } from 'src/app/classes/projects/project-file';
import { Project } from 'src/app/classes/projects/project';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  today: Date;
  employee: Employee;
  project: Project;
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

  async downloadPDF() {
    const pdf = new jspdf('p', 'mm', 'a4');

    await html2canvas(this.cover.nativeElement).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      const contentData = canvas.toDataURL('image/png');
      pdf.addImage(contentData, 'PNG', 0, 0, imgWidth, imgHeight);
    });

    let pos = 0;
    let count = 0;
    pdf.addPage();
    for (const file of this.projectFiles) {
      if (count === 3) {
        pos = 0;
        count = 0;
        pdf.addPage();
      }

      await html2canvas(document.getElementById(`content${file.projectId}`)).then(canvas => {
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;

        const contentData = canvas.toDataURL('image/png');
        pdf.addImage(contentData, 'PNG', 0, pos, imgWidth, imgHeight);
        pos += (imgHeight + 10);
        count++;
      });
    }
    pdf.save('Project Report.pdf');
  }

}
