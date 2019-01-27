import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/classes/client/client';
import { Project } from 'src/app/classes/projects/project';
import { GeneralServiceClient } from 'src/app/services/clients/general.service';
import { ProjectService } from 'src/app/services/projects/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-reports',
  templateUrl: './project-reports.component.html',
  styleUrls: ['./project-reports.component.css', '../../base-template/base-template.component.css']
})
export class ProjectReportsComponent implements OnInit {

  clients: Client[];
  projects: Project[];
  project: Project;
  inProgress: number = 0;
  overDue: number = 0;
  pending: number = 0;

  constructor(
    private clientService: GeneralServiceClient,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProjects();
    this.projectService.currentProject.subscribe(project => this.project = project);
  }

  getProjects() {
    console.log("Retrieving Projects");
    this.projectService.getProjects()
      .subscribe(projects => {
        console.log(projects);
        this.inProgress = projects.length;
        this.projects = projects;
      });
  }

  onSelect(projectSelected: Project) {
    console.log(projectSelected);
    this.projectService.setProject(projectSelected);
    this.router.navigate(['projects/:'+projectSelected.projectId]);
  }
}
